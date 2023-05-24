import React from 'react';
import GettingStartedPage from './gettingStarted';

export default {
  title: "Documentation/Setup Guide",
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true
      }
    },
    docs: {
      container: ({ children, context }) => (
        <GettingStartedPage />
      ),
    },
  },
}

export const SetupGuide = () => {};
