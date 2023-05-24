import React from 'react';
import { html } from 'lit-html';
import {defineCustomElements} from '../../../packages/nexus/loader';
import './styles.scss';
import { withTests } from '@storybook/addon-jest';

import results from '../../../packages/nexus/.jest-test-results.json';


defineCustomElements();

export const parameters = {
  viewMode: 'docs',
  docs: {
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
        'Components',
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
        color: '#FFFFFF',
        class: 'nexus'
      },
      {
        name: 'dark',
        value: '#2E2E3C',
        color: '#2E2E3C',
        class: 'nexus-theme-dark'
      }
    ]
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  utils: {
    render: (story) => html([story()])
  }
};

export const decorators = [
  (Story, context) => {
    const darkMode = context.globals.backgrounds?.value === 'dark' ? 'nexus-theme-dark' : 'nexus';

    return html` <div class="${darkMode}">${Story()}</div>`;
  },
  withTests({
    results
  })
];

