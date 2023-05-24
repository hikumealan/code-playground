import parse from 'html-react-parser';
import React from 'react';

import './styles.scss';
import { withTests } from '@storybook/addon-jest';
import { MemoryRouter } from "react-router";

import results from '../../../packages/nexus/.jest-test-results.json';

export const parameters = {
  viewMode: 'docs',
  docs: {
    source: {
      state: 'open',
      format: true
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
    render: (story) => parse(story())
  }
};

export const decorators = [
  (Story, context) => {
    const darkMode = context.globals.backgrounds?.value === 'dark' ? 'nexus-theme-dark' : 'nexus';

    return React.createElement('div', { className: darkMode }, Story());
  },
  withTests({
    results
  }),
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  ),
];
