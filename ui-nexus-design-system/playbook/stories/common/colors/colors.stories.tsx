import React from 'react';
import ColorsPage from './colors';


export default {
  title: "Resources/Colors",
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true
      }
    },
    docs: {
      container: ({ children, context }) => (
        <ColorsPage />
      ),
    },
  },
}

export const Colors = () => {};
