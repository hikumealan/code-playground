const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const { capitalize, isPathPresent, getCategory, prettifyStoryNames } = require('../utils');

const files = [];
const components = {};
const playbookRoot = path.join(__dirname, '..', '..', '..', 'playbook');
const reactSBRoot = path.join(playbookRoot, 'react', 'src', 'sb');
const storiesSBRoot = path.join(playbookRoot, 'stories');

const templateDirectory = path.join(__dirname, '..', 'templates', 'react.hbs');
const exampleDirectory = path.join(reactSBRoot, 'components');
const docsDirectory = path.join(storiesSBRoot, 'docs');
const dataDirectory = path.join(storiesSBRoot, 'data');
const targetDirectory = path.join(storiesSBRoot, 'pages');

const reactHBTemplate = fs.readFileSync(templateDirectory, 'utf-8');
const template = Handlebars.compile(reactHBTemplate);


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

// Check if the component exist in list. If not initialize the same.
//
// @param {string} componentName
//
// returns void
const checkAndAddMissingComponent = (componentName) => {
  if (!(componentName in components)) {
    components[componentName] = {
      docs: [],
      data: [],
      exampleImports: [],
      source: [],
      jsSrcImports: [],
      category: '',
      binderName: []
    };
  }
};

// Generates imports.
//
// @params: {componentName} string
// @params: {fileName} string
// @params: {storyName} string
//
// @return void
const importHtmlAndJSSrc = (componentName, fileName, storyName) => {
  const [code, name] = [...fileName.replace('.tsx', '').split('_')];
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
    const importPath = `../../../docs/${componentName}/${name}`;
    const importName = `${storyName}Doc`;
    components[componentName].docs.push({
      importPath,
      importName
    });
    Object.assign(binderInfo, { docsImportName: `storyDescription: ${importName},` });
  }

  if (isPathPresent(path.join(dataDirectory, componentName, `${name}.ts`))) {
    const importPath = `!!raw-loader!../../../data/${componentName}/${name}.ts`;
    const importName = `${storyName}Data`;
    components[componentName].data.push({
      importPath,
      importName
    });
    Object.assign(binderInfo, { dataImportName: `$\{${importName}}` });
  }

  if (isPathPresent(path.join(exampleDirectory, componentName, fileName))) {
    components[componentName].source.push({
      importPath: `!!raw-loader!../../../../react/src/sb/components/${componentName}/${fileName}`,
      importName: `${capitalize(storyName)}Src`
    });
    Object.assign(binderInfo, {
      Src: `$\{${capitalize(storyName)}Src}`
    });
  }

  if (isPathPresent(path.join(exampleDirectory, componentName, fileName))) {
    components[componentName].exampleImports.push({
      importPath: `../../../../react/src/sb/components/${componentName}/${fileName}`,
      importName: `${capitalize(storyName)}`
    });
  }

  components[componentName].binderName.push(binderInfo);
};


// M A I N

const reactStoryGenerator = () => {
  getFilesRecursively(exampleDirectory);
  files.forEach(
    (file) => {
      const storyName = path.basename(file).replace('.tsx', '').split('_')[1].replaceAll('-', '');
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
      const targetStoryPath = path.join(storyTargetPath, 'react.stories.tsx');
      if (!isPathPresent(storyTargetPath)) {
        fs.mkdirSync(storyTargetPath, { recursive: true });
      }

      fs.writeFileSync(targetStoryPath, template({
        docs: components[component].docs,
        data: components[component].data,
        exampleImports: components[component].exampleImports,
        source: components[component].source,
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

module.exports = { reactStoryGenerator };
