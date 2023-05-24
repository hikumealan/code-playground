import React from 'react';
import { SketchPage } from './sketch';

export default {
  title: "Resources/Sketch",
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true
      }
    },
    docs: {
      container: ({ children, context }) => (
        <SketchPage />
      ),
    },
  },
}

export const Sketch = () => { };

