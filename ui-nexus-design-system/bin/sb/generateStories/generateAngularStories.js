const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const { capitalize, isPathPresent, getCategory, prettifyStoryNames } = require('../utils');

const files = [];
const components = {};
const playbookRoot = path.join(__dirname, '..', '..', '..', 'playbook');
const angularSBRoot = path.join(playbookRoot, 'angular', 'src', 'app', 'sb');
const storiesSBRoot = path.join(playbookRoot, 'stories');

const templateDirectory = path.join(__dirname, '..', 'templates', 'angular.hbs');
const exampleDirectory = path.join(angularSBRoot, 'components');
const docsDirectory = path.join(storiesSBRoot, 'docs');
const dataDirectory = path.join(storiesSBRoot, 'data');
const targetDirectory = path.join(playbookRoot, 'stories', 'pages');

const angularHBTemplate = fs.readFileSync(templateDirectory, 'utf-8');
const template = Handlebars.compile(angularHBTemplate);


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
      else if (absolute.endsWith('.ts')) {
        files.push(absolute);
      }
    }
  );
};


const generateDataAndDocsImport = (storyName, componentName, fileName) => {
  const storyBinderDetails = {};

  if (isPathPresent(path.join(docsDirectory, componentName, `${storyName}.ts`))) {
    const docsImportName = `${storyName.replaceAll('-', '')}Doc`;
    const docsImportPath = `../../../docs/${componentName}/${storyName}.ts`;

    components[componentName].docs.push({
      docsImportPath,
      docsImportName
    });

    Object.assign(storyBinderDetails, { docsImport: `storyDescription: ${docsImportName},` });
  }

  if (isPathPresent(path.join(dataDirectory, componentName, `${storyName}.ts`))) {
    const dataImportName = `${storyName.replaceAll('-', '')}Data`;
    const dataImportPath = `!!raw-loader!../../../data/${componentName}/${storyName}.ts`;

    components[componentName].data.push({
      dataImportPath,
      dataImportName
    });

    Object.assign(storyBinderDetails, { dataImportName: `$\{${dataImportName}}` });
  }

  if (isPathPresent(path.join(exampleDirectory, componentName, `${fileName}`))) {
    const exampleImportName = `${capitalize(storyName.replaceAll('-', ''))}`;
    const tsSrcImportName = `${capitalize(storyName.replaceAll('-', ''))}Src`;
    const exampleImportPath = `../../../../angular/src/app/sb/components/${componentName}/${fileName}`;
    const tsSrcImportPath = `!!raw-loader!../../../../angular/src/app/sb/components/${componentName}/${fileName}`;

    components[componentName].exampleImports.push({
      exampleImportPath,
      exampleImportName,
      tsSrcImportName,
      tsSrcImportPath
    });

    Object.assign(storyBinderDetails, { tsSrcImportName: `$\{${tsSrcImportName}}` });
  }

  if (isPathPresent(path.join(exampleDirectory, componentName, `${fileName.replace('.ts', '.html')}`))) {
    const htmlSrcImportName = `${capitalize(storyName.replaceAll('-', ''))}HtmlSrc`;
    const htmlSrcImportPath = `!!raw-loader!../../../../angular/src/app/sb/components/${componentName}/${fileName.replace('.ts', '.html')}`;

    components[componentName].htmlSrcImports.push({
      htmlSrcImportName,
      htmlSrcImportPath
    });

    Object.assign(storyBinderDetails, { htmlSrcImportName: `$\{${htmlSrcImportName}}` });
  }

  const [name, _suffix] = fileName.split('.');
  const [code, _templateInfo] = name.split('_');
  const templateName = `${String.fromCharCode(parseInt(code, 10) + 96)}_${capitalize(storyName.replaceAll('-', ''))}`;
  const exampleName = `${capitalize(storyName.replaceAll('-', ''))}`;

  Object.assign(storyBinderDetails, {
    templateName,
    exampleName,
    name: prettifyStoryNames(exampleName),
    showArgs: parseInt(code, 10) === 1 && isPathPresent(path.join(targetDirectory, getCategory(componentName), componentName, 'args.json'))
  });
  Object.assign(storyBinderDetails, {
    isArgsJsonPresent: isPathPresent(path.join(targetDirectory, getCategory(componentName), componentName, 'args.json'))
  });


  components[componentName].bindings.push(storyBinderDetails);
  components[componentName].declarations.push({ exampleName });
};

const initComponent = (componentName) => {
  if (!(componentName in components)) {
    components[componentName] = {
      docs: [],
      data: [],
      exampleImports: [],
      htmlSrcImports: [],
      bindings: [],
      declarations: []
    };
  }
};


const angularStoryGenerator = () => {
  getFilesRecursively(exampleDirectory);
  files.forEach(
    (file) => {
      const [_prefix, storyName] = path.basename(file).split('.')[0].split('_');
      const componentName = path.basename(path.dirname(file));
      const fileName = path.basename(file);
      initComponent(componentName);
      generateDataAndDocsImport(storyName, componentName, fileName);
    }
  );

  Object.keys(components).forEach(
    (component) => {
      const targetStoryFilePath = path.join(targetDirectory, getCategory(component), component, 'angular.stories.tsx');

      fs.writeFileSync(targetStoryFilePath, template({
        docs: components[component].docs,
        data: components[component].data,
        exampleImports: components[component].exampleImports,
        htmlSrcImports: components[component].htmlSrcImports,
        category: getCategory(component),
        pageTitle: capitalize(prettifyStoryNames(component)),
        component,
        dangerouslySetInnerHTML: isPathPresent(path.join(docsDirectory, component, `${component}.ts`)) ? `dangerouslySetInnerHTML={{ __html: ${component.replaceAll('-', '')}Doc }}` : ``,
        isArgsJsonPresent: isPathPresent(path.join(targetDirectory, getCategory(component), component, 'args.json')),
        isControlsJson: isPathPresent(path.join(targetDirectory, getCategory(component), component, 'controls.json')),
        isEventPresent: isPathPresent(path.join(targetDirectory, getCategory(component), component, 'event.mdx')),
        bindings: components[component].bindings,
        declarations: components[component].declarations
      }));
    }
  );
};

module.exports = { angularStoryGenerator };
