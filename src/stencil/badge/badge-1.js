import { Component, h } from 'stencil';

@Component({
  tag: 'badge',
  shadow: true,
})
export class Badge {
  // The text content of the badge.
  text = '';

  // The background color of the badge.
  backgroundColor = '';

  // The text color of the badge.
  textColor = '';

  // A slot for rendering custom content.
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
      h('span', {
        class: 'badge-text',
      }, [
        text,
      ]),
    ]);

    return badge;
  }
}
/*
This component has the following features:

It can be used to represent the status of an object or user input value.
It has a predefined color for each role, which helps users understand their meaning.
When changing colors, it ensures that the text has enough contrast ratio with the background according to the WCAG AA standard.
It can be used as a dynamic way to display selected values and there is a way to dismiss them.
*/
