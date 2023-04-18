const fs = require('fs');
const path = require('path');

const stencilJsParser = require('stenciljs-parser');
const storybookCrfGenerator = require('storybook-crf-generator');

const COMPONENT_NAME = 'my-component';
const STORYBOOK_DIR = './storybook';

// Parse the StencilJS web component code.
const component = stencilJsParser.parse(fs.readFileSync(path.join(__dirname, COMPONENT_NAME + '.tsx'), 'utf8'));

// Generate the Storybook CRF formatted story file.
const storyFile = storybookCrfGenerator.generate(component);

// Write the Storybook CRF formatted story file to disk.
fs.writeFileSync(path.join(STORYBOOK_DIR, COMPONENT_NAME + '.story.js'), storyFile);

/*
This script will parse the StencilJS web component code in the file my-component.tsx and generate a Storybook CRF formatted story file in the directory storybook. The name of the story file will be the same as the name of the web component, with the extension .story.js.

For example, if the web component is named MyComponent, the story file will be named MyComponent.story.js.

The generated story file will contain the following code:
*/
// import { Meta, Story, Preview } from '@storybook/addon-docs/blocks';
// 
// import { MyComponent } from './my-component';
// 
// <Meta title="MyComponent" component={MyComponent} />
// 
// <Story name="Default">
//   <Preview>
//     <MyComponent />
//   </Preview>
// </Story>
/*
This code will create a Storybook story for the web component. The story will have a title of "MyComponent" and will use the MyComponent component. The story will have a preview that renders the component.

You can then use this story to test and document your web component.
*/

// ##################################################################################################
// Example # 2
// ##################################################################################################
/*
const path = require('path');
const fs = require('fs');

// Get the path to the StencilJS web component code
const componentPath = path.resolve(__dirname, 'component.js');

// Read the StencilJS web component code
const componentCode = fs.readFileSync(componentPath, 'utf8');

// Parse the StencilJS web component code
const component = StencilJS.parse(componentCode);

// Generate a Storybook CRF formatted story file
const storyFile = `
import { Meta, Story } from '@storybook/addon-docs/blocks';

<Meta title="Component Name" component={ComponentName} />

<Story name="Default">
  <ComponentName />
</Story>
`;

// Write the Storybook CRF formatted story file to disk
fs.writeFileSync(path.resolve(__dirname, 'story.js'), storyFile, 'utf8');
*/
// ##################################################################################################
