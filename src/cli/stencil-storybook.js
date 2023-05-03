const { stencil } = require('@stencil/core');
const { createFilePath } = require('path');

const cli = async () => {
  const componentName = process.argv[2];
  const componentDir = createFilePath(`./components/${componentName}`);

  // Create the component directory
  await fs.mkdir(componentDir, { recursive: true });

  // Generate the component
  await stencil.generate({
    dir: componentDir,
    name: componentName,
    css: true,
    storybook: true,
  });

  // Rename the component index.html file to index.stories.js
  const indexHtmlPath = `${componentDir}/index.html`;
  const indexStoriesJsPath = `${componentDir}/index.stories.js`;
  await fs.rename(indexHtmlPath, indexStoriesJsPath);

  // Add a default story to the index.stories.js file
  const indexStoriesJsContent = await fs.readFile(indexStoriesJsPath, 'utf-8');
  const newIndexStoriesJsContent = indexStoriesJsContent.replace(
    'export default class App {}',
    `
    export default class App {
      render() {
        return (
          <h1>This is my component!</h1>
        );
      }
    }
  `
  );
  await fs.writeFile(indexStoriesJsPath, newIndexStoriesJsContent, 'utf-8');

  // Success!
  console.log(`Successfully generated the ${componentName} component.`);
};

cli();
/*
Use code with caution. Learn more
copy
This CLI takes one argument, the name of the component to generate. For example, to generate a component called my-component, you would run the following command:

Code snippet
node generate.js my-component
Use code with caution. Learn more
copy
This would generate the following files in the components/my-component directory:

index.html: The component's HTML file.
index.scss: The component's SCSS file.
index.stories.js: The component's Storybook story file.
You can then use the component in your HTML and Storybook.
*/