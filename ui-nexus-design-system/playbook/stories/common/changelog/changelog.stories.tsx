import React from 'react';
import ChangeLogData from './changelog';


export default {
  title: "Resources/Change Log",
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true
      }
    },
    docs: {
      container: ({ children, context }) => (
        <ChangeLogData />
      ),
    },
  },
}

export const ChangeLog = () => {};