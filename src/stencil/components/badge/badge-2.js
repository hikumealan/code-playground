import { Component, h } from 'stencil';

@Component({
  tag: 'badge',
  shadow: true,
})
export class Badge {
  // The text to display.
  text = '';

  // The background color.
  backgroundColor = '';

  // The text color.
  textColor = '';

  // The dismissible action.
  dismissible = false;

  constructor() {
    super();
  }

  render() {
    const { text, backgroundColor, textColor, dismissible } = this;

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
      h('span', {
        class: 'badge-text',
      }, [
        text,
      ]),
    ]);

    if (dismissible) {
      // Add a dismiss button to the badge.
      const dismissButton = h('button', {
        class: 'badge-dismiss-button',
        onClick: this.onDismiss,
      }, [
        'x',
      ]);

      badge.appendChild(dismissButton);
    }

    return badge;
  }

  onDismiss() {
    // Dismiss the badge.
    this.dispatchEvent(new CustomEvent('dismiss'));
  }
}
/*
This component has the following features:

It can be used to display text with a background color.
It ensures that text has enough contrast ratio with the background according to the WCAG AA standard.
It can be dismissed by clicking a button.
*/
