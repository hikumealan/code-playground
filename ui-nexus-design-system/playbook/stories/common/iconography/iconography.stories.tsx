import React from 'react';
import IconographyPage from './iconography';


export default {
  title: "Resources/Iconography",
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true
      }
    },
    docs: {
      container: ({ children, context }) => (
        <IconographyPage />
      ),
    },
  },
}

export const Iconography = () => {};

