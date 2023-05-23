#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ejs = require('ejs');
// const stencil = require('@stencil/cli');

// remove the first two arguments
process.env.args = [...process.argv.slice(2)];
process.env.argv = process.argv;

console.log(process.env);
console.log(process.argv);


const cli = async () => {
  const componentName = process.argv[2];
  const componentDir = path.join(`./components/${componentName}`);
  console.log(stencil);

  // Create the component directory
//   await mkdir(componentDir, { recursive: true });

  // Generate the component
//   await stencil.generate({
//     dir: componentDir,
//     name: componentName,
//     css: true,
//     storybook: true,
//   });

  // Rename the component index.html file to index.stories.js
//   const indexHtmlPath = `${componentDir}/index.html`;
//   const indexStoriesJsPath = `${componentDir}/index.stories.js`;
//   await fs.rename(indexHtmlPath, indexStoriesJsPath);

//   // Add a default story to the index.stories.js file
//   const indexStoriesJsContent = await fs.readFile(indexStoriesJsPath, 'utf-8');
//   const newIndexStoriesJsContent = indexStoriesJsContent.replace(
//     'export default class App {}',
//     `
//     export default class App {
//       render() {
//         return (
//           <h1>This is my component!</h1>
//         );
//       }
//     }
//   `
//   );
//   await fs.writeFile(indexStoriesJsPath, newIndexStoriesJsContent, 'utf-8');

  // Success!
  console.log(`Successfully generated the ${componentName} component.`);
};

cli();