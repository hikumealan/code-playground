import React from 'react';
import { FigmaPage } from './figma';


export default {
    title: "Resources/Figma",
    parameters: {
        viewMode: 'docs',
        previewTabs: {
            canvas: {
                hidden: true
            }
        },
        docs: {
            container: ({ children, context }) => (
                <FigmaPage />
            ),
        },
    },
}

export const Figma = () => { };