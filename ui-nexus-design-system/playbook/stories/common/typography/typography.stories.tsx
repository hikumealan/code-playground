import React from 'react';
import TypographyPage from './typography';

export default {
  title: "Resources/Typography",
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true
      }
    },
    docs: {
      container: ({ children, context }) => (
        <TypographyPage />
      ),
    },
  },
}

export const Typography = () => {};

