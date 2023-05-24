import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { enableProdMode } from '@angular/core';

import { withTests } from '@storybook/addon-jest';
import results from '../../../packages/nexus/.jest-test-results.json';

setCompodocJson(docJson);
enableProdMode();

export const parameters = {
  viewMode: 'docs',
  angularLegacyRendering: true,
  docs: {
    inlineStories: true,
    source: {
      state: 'open'
    }
  },
  options: {
    storySort: {
      includeName: true,
      order: [
        'Nexus Design System',
        ['Introduction'],
        'Components'
      ],
      method: 'alphabetical',
      locales: 'en-US'
    }
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#FFFFFF',
        color: '#FFFFFF'
      },
      {
        name: 'dark',
        value: '#2E2E3C',
        color: '#2E2E3C'
      }
    ]
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  utils: {
    render: (story) => Template(story)
  }
};

export const decorators = [
  (Story, context) => {
    const darkMode = context.globals.backgrounds?.value === 'dark' ? 'nexus-theme-dark' : 'nexus';
    const story = Story();

    return {
      ...story,
      template: `<div class="${darkMode}">${story.template}</div>`
    };
  },
  withTests({
    results
  })
];
