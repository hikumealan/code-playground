import React from 'react';
import { AccessibilityPage } from './accessibility';


export default {
  title: "Resources/Accessibility",
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true
      }
    },
    docs: {
      container: ({ children, context }) => (
        <AccessibilityPage />
      ),
    },
  },
}

export const Accessibility = () => {};