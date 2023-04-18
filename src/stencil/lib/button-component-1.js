// Import the StencilJS library.
import { Stencil } from 'stencil';

// Create a new component library.
const library = new Stencil({
  name: 'my-component-library',
  entry: './src/index.html',
  html: './src/index.html',
  css: './src/styles.css',
  ts: './src/index.ts',
});

// Create a component.
const Button = library.createComponent({
  template: `
    <button class="button">
      Click me!
    </button>
  `,
  style: `
    .button {
      background-color: blue;
      color: white;
      padding: 10px;
      border: 1px solid black;
    }
  `,
});

// Export the component library.
export default library;
This component library defines a single component, Button. The component has a template and a style, which define its appearance. The component is exported from the library so that it can be used in other applications.

To use the component library, you can import it into your application and use the Button component. For example:

import { Button } from 'my-component-library';

const myButton = new Button();
myButton.textContent = 'Click me!';
document.body.appendChild(myButton);
This code will create a new Button component and add it to the document. When the user clicks the button, it will alert the message "Click me!".

This is just a simple example of a StencilJS web component library. By following the design system checklist, you can create a component library that is easy to use, maintain, and share.
