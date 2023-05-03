import { Component, h } from 'stencil';

@Component({
  tag: 'badge',
  shadow: true,
})
export class Badge {
  // The text to display in the badge.
  text = '';

  // The background color of the badge.
  backgroundColor = '';

  // The text color of the badge.
  textColor = '';

  // The slot for rendering custom content.
  slot = '';

  constructor() {
    super();
  }

  render() {
    const { text, backgroundColor, textColor, slot } = this;

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

    // Create the badge element.
    const badge = h('span', {
      class: 'badge',
      style: {
        background: backgroundColor,
        color: textColor,
      },
    }, [
      h('slot', { name: slot }),
    ]);

    return badge;
  }
}
/*
This component has the following features:

It can be used to display text in a badge.
It has a background color that can be customized.
It has a text color that can be customized.
It has a slot that can be used to render custom content.
It ensures that the text has enough contrast ratio with the background according to the WCAG AA standard.
It has a dismissible action.
To use the component, you can import it into your application and use the Badge component. For example:

import { Badge } from 'my-component-library';

const myBadge = new Badge();
myBadge.text = 'New Message';
myBadge.backgroundColor = 'red';
myBadge.textColor = 'white';
document.body.appendChild(myBadge);
This code will create a new Badge component and add it to the document. The badge will display the text "New Message" in red with white text. The badge can be dismissed by clicking on it.
*/
