import React from 'react';
import Styles from './styles';

export default {
  title: "Resources/CSS Helpers",
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true
      }
    },
    docs: {
      container: ({ children, context }) => (
        <Styles />
      ),
    },
  },
}

export const CSSHelpers = () => { };
