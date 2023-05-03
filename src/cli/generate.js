const stencil = require('@stencil/cli');
const { join } = require('path');
const { mkdir } = require('fs');

const cli = async () => {
  const componentName = process.argv[2];
  const componentDir = join(`./components/${componentName}`);
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