/* eslint-disable no-process-env */
let fw = process.env.STORYBOOK_FRAMEWORK || 'angular';
export const FRAMEWORK = fw;
export const ANGULAR_URL = process.env.STORYBOOK_ANGULAR_URL;
export const REACT_URL = process.env.STORYBOOK_REACT_URL;
export const WC_URL = process.env.STORYBOOK_WC_URL;
export const STORYBOOK_DEPLOYMENT_DATE = process.env.STORYBOOK_DEPLOYMENT_DATE;
