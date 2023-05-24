import React from 'react';
import {GridsPage} from './grids';


export default {
  title: "Resources/Grids",
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true
      }
    },
    docs: {
      container: ({ children, context }) => (
        <GridsPage />
      ),
    },
  },
}

export const Grids = () => {};

