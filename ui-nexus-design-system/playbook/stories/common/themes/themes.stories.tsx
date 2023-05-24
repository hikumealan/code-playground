import React from 'react';
import Themes from './themes';


export default {
  title: "Resources/Theme",
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true
      }
    },
    docs: {
      container: ({ children, context }) => (
        <Themes />
      ),
    },
  },
}

export const Iconography = () => { };

