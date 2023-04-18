import { Component, h } from 'stencil';

@Component({
  tag: 'button',
  shadow: true,
})
export class Button {
  // The text to display on the button.
  text = '';

  // The icon to display on the button.
  icon = '';

  // The background color of the button.
  backgroundColor = '';

  // The text color of the button.
  textColor = '';

  // The size of the button.
  size = 'medium';

  // The state of the button.
  state = 'normal';

  constructor() {
    super();
  }

  render() {
    const { text, icon, backgroundColor, textColor, size, state } = this;

    // Check the contrast ratio between the text and background colors.
    const contrastRatio = wcagContrastRatio(textColor, backgroundColor);
    if (contrastRatio < 4.5) {
      // The contrast ratio is too low, so we need to use a different color.
      const colors = {
        black: '#000',
        white: '#fff',
        red: '#f44336',
        green: '#4caf50',
        blue: '#2196f3',
        yellow: '#ffeb3b',
        pink: '#e91e63',
        purple: '#9c27b0',
        cyan: '#00bcd4',
        gray: '#979797',
      };

      // Find the first color that has a contrast ratio of at least 4.5.
      for (const color in colors) {
        const newContrastRatio = wcagContrastRatio(textColor, colors[color]);
        if (newContrastRatio >= 4.5) {
          backgroundColor = colors[color];
          break;
        }
      }
    }

    // Create the button element.
    const button = h('button', {
      class: [
        'button',
        `button-${size}`,
        state === 'active' && 'button-active',
        state === 'focused' && 'button-focused',
        state === 'disabled' && 'button-disabled',
      ],
      style: {
        background: backgroundColor,
        color: textColor,
      },
    }, [
      h('span', { class: 'button-text' }, text),
      h('span', { class: 'button-icon' }, icon),
    ]);

    return button;
  }
}
This component has the following features:

It can be used to create buttons with text and icons.
It has a background color that can be customized.
It has a text color that can be customized.
It has a size that can be customized.
It has a state that can be customized (normal, active, focused, disabled).
It ensures that the text has enough contrast ratio with the background according to the WCAG AA standard.
To use the component, you can import it into your application and use the Button component. For example:

import { Button } from 'my-component-library';

const myButton = new Button();
myButton.text = 'Click me!';
myButton.backgroundColor = 'blue';
myButton.textColor = 'white';
document.body.appendChild(myButton);
This code will create a new Button component and add it to the document. The button will display the text "Click me!" in blue with white text.
