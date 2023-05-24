import React from 'react';
import CodeCoverage from './reports';

export default {
    title: "Reports/Quality",
    parameters: {
        viewMode: 'docs',
        previewTabs: {
            canvas: {
                hidden: true
            }
        },
        docs: {
            container: ({ children, context }) => (
                <CodeCoverage />
            ),
        },
    },
}

export const Coverage = () => { };