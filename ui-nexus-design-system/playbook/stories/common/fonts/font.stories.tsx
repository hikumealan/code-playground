import React from 'react';
import { FontPage } from './font';

export default {
  title: "Resources/Font",
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true
      }
    },
    docs: {
      container: ({ children, context }) => (
        <FontPage />
      ),
    },
  },
}

export const Font = () => { };

