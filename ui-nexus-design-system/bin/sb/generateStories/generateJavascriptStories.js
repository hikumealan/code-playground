const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const { capitalize, isPathPresent, getCategory, prettifyStoryNames } = require('../utils');

const files = [];
const components = {};
const playbookRoot = path.join(__dirname, '..', '..', '..', 'playbook');
const stencilSBRoot = path.join(playbookRoot, 'stencil', 'sb');
const storiesSBRoot = path.join(playbookRoot, 'stories');

const templateDirectory = path.join(__dirname, '..', 'templates', 'javascript.hbs');
const exampleDirectory = path.join(stencilSBRoot, 'components');
const docsDirectory = path.join(storiesSBRoot, 'docs');
const srcExamplesDirectory = path.join(stencilSBRoot, 'examples');
const targetDirectory = path.join(playbookRoot, 'stories', 'pages');

const jsHBTemplate = fs.readFileSync(templateDirectory, 'utf-8');
const template = Handlebars.compile(jsHBTemplate);

// Given a directory path recursively find files within the directory.
// params {string} root directory or parent directory from which files are
// to be identified recursively.
//
// returns {void}
//
const getFilesRecursively = (directory) => {
  const filesInDirectory = fs.readdirSync(directory);
  filesInDirectory.forEach(
    (file) => {
      const absolute = path.join(directory, file);
      if (fs.statSync(absolute).isDirectory()) {
        getFilesRecursively(absolute);
      }
      else {
        files.push(absolute);
      }
    }
  );
};


// Generates imports.
//
// @params: {componentName} string
// @params: {fileName} string
// @params: {storyName} string
//
// @return void
const importHtmlAndJSSrc = (componentName, fileName, storyName) => {
  const htmlSrc = fileName.replace('.ts', '.html');
  const jsSrc = fileName.replace('.ts', '.js');
  const importName = capitalize(storyName.replaceAll('-', ''));
  const importPath = `../../../../stencil/sb/components/${componentName}/${fileName.replace('.ts', '')}`;
  components[componentName].exampleImports.push({
    importPath,
    importName
  });

  const [code, name] = [...fileName.replace('.ts', '').split('_')];
  const templateName = `${String.fromCharCode(parseInt(code, 10) + 96)}_${capitalize(name.replaceAll('-', ''))}`;
  const functionName = capitalize(name.replaceAll('-', ''));
  const binderInfo = {
    templateName,
    functionName,
    storyName,
    name: prettifyStoryNames(functionName),
    showArgs: parseInt(code, 10) === 1 && isPathPresent(path.join(targetDirectory, getCategory(componentName), componentName, 'args.json'))
  };


  if (isPathPresent(path.join(docsDirectory, componentName, `${name}.ts`))) {
    const docsImportPath = `../../../docs/${componentName}/${name}`;
    const docsImportName = `${storyName.replaceAll('-', '')}Doc`;
    components[componentName].docs.push({
      docsImportPath,
      docsImportName
    });
    Object.assign(binderInfo, { docsImportName: `storyDescription: ${docsImportName},` });
  }

  if (isPathPresent(path.join(srcExamplesDirectory, componentName, htmlSrc))) {
    components[componentName].htmlSrcImports.push({
      importPath: `!!raw-loader!../../../../stencil/sb/examples/${componentName}/${htmlSrc}`,
      importName: `${capitalize(storyName.replaceAll('-', ''))}HtmlSrc`
    });
    Object.assign(binderInfo, {
      htmlSrc: `$\{${capitalize(storyName.replaceAll('-', ''))}HtmlSrc}`
    });
  }

  if (isPathPresent(path.join(srcExamplesDirectory, componentName, jsSrc))) {
    components[componentName].jsSrcImports.push({
      importPath: `!!raw-loader!../../../../stencil/sb/examples/${componentName}/${jsSrc}`,
      importName: `${capitalize(storyName.replaceAll('-', ''))}JSSrc`
    });
    Object.assign(binderInfo, {
      jsSrc: `$\{${capitalize(storyName.replaceAll('-', ''))}JSSrc}`
    });
  }

  components[componentName].binderName.push(binderInfo);
};


// Check if the component exist in list. If not initialize the same.
//
// @param {string} componentName
//
// returns void
const checkAndAddMissingComponent = (componentName) => {
  if (!(componentName in components)) {
    components[componentName] = {
      docs: [],
      exampleImports: [],
      htmlSrcImports: [],
      jsSrcImports: [],
      category: '',
      binderName: []
    };
  }
};

// M A I N

const jsStoryGenerator = () => {
  getFilesRecursively(exampleDirectory);
  files.forEach(
    (file) => {
      const storyName = path.basename(file).replace('.ts', '').split('_')[1].replace('-', '');
      const componentName = path.basename(path.dirname(file));
      const fileName = path.basename(file);
      checkAndAddMissingComponent(componentName);
      importHtmlAndJSSrc(componentName, fileName, storyName);
      components[componentName].category = getCategory(componentName);
    }
  );

  Object.keys(components).forEach(
    (component) => {
      const storyTargetPath = path.join(targetDirectory, getCategory(component), component);
      const targetStoryPath = path.join(storyTargetPath, 'stencil.stories.tsx');
      if (!isPathPresent(storyTargetPath)) {
        fs.mkdirSync(storyTargetPath, { recursive: true });
      }

      fs.writeFileSync(targetStoryPath, template({
        docs: components[component].docs,
        exampleImports: components[component].exampleImports,
        htmlSrcImport: components[component].htmlSrcImports,
        jsSrcImport: components[component].jsSrcImports,
        category: components[component].category,
        pageName: capitalize(prettifyStoryNames(component)),
        component,
        showPrimaryComponentDoc: isPathPresent(path.join(docsDirectory, component, `${component}.ts`)) ? `dangerouslySetInnerHTML={{ __html: ${component.replaceAll('-', '')}Doc }}` : ``,
        binderName: components[component].binderName,
        isArgsJsonPresent: isPathPresent(path.join(storyTargetPath, 'args.json')),
        isControlsJson: isPathPresent(path.join(storyTargetPath, 'controls.json')),
        isEventPresent: isPathPresent(path.join(storyTargetPath, 'event.mdx'))

      }));
    }
  );
};

module.exports = { jsStoryGenerator };
