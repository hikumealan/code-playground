import addons from '@storybook/addons';
import { NAVIGATE_URL } from '@storybook/core-events';
import React from 'react';
import {IntroductionPage} from './introduction';


export default {
  title: "Nexus Design System",
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true
      }
    },
    docs: {
      container: ({ children, context }) => (
        <IntroductionPage />
      ),
    },
  },
}

export const Introduction = () => {
  // https://github.com/storybookjs/storybook/issues/13128
  addons.getChannel().emit(NAVIGATE_URL, `?path=/docs/nexus-design-system--introduction`);
};
