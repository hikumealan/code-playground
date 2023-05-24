import { defineConfig } from "cypress";
const getCompareSnapshotsPlugin = require('../node_modules/cypress-image-diff-js/dist/plugin')
const allureWriter = require('../node_modules/@shelex/cypress-allure-plugin/writer');

async function setupNodeEvents(on, config) {
  getCompareSnapshotsPlugin(on, config);

  allureWriter(on, config);

  return config;
}

export default defineConfig({
  video: false,
  videosFolder: "cypress/videos",
  e2e: {
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    setupNodeEvents,
    env: {
      allureReuseAfterSpec: true,
      allureResultsPath: "allure-results",
      grepFilterSpecs: true,
      grepOmitFiltered: true,
    },
    retries: {
      runMode: 2,
      openMode: 2,
    },
  },
  chromeWebSecurity: false,
  includeShadowDom: true,
});
