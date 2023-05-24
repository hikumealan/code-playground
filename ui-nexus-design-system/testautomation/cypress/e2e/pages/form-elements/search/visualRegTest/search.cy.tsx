import 'cypress-iframe';
import { Locators } from '../search.constants'
import {
  DESKTOP,
  TAB_LANDSCAPE,
  TAB_PORTRAIT,
  MOBILE,
  DEVICE_TYPE_DESKTOP,
  DEVICE_TYPE_MOBILE,
  DEVICE_TYPE_TAB,
  JAVASCRIPT,
  ANGULAR,
  REACT
} from '../../../../constants/constants';
import { CommonLocators } from '../../../../constants/locators'
import { selectSBFramework, compareScreenshot, clickElementIdentifiedByLocator } from '../../../../utils/functions'

// validates search component default and with various input combinations visual regression
//
// @parms: testname: string
// @returns: void
const searchVR = (testname: string) => {
  compareScreenshot(Locators.searchVR, testname, 'Scenario_01 search component default state');
  cy.iframe(Locators.iframe).find(Locators.searchInput).click()
  compareScreenshot(Locators.searchVR, testname, 'Scenario_02 search component clicked state');
  const searchInputCombination = new Map([
    [Locators.numericLabel, Locators.numericInputValue],
    [Locators.lowerCaseLabel, Locators.alphabeticLowerCaseInputValue],
    [Locators.upperCaseLabel, Locators.alphabeticUpperCaseInputValue],
    [Locators.alphanumericLabel, Locators.alphabeticAlphanumericInputValue],
    [Locators.minimumLengthLabel, Locators.minimumInputValue],
    [Locators.maximumLengthLabel, Locators.maximumInputValue],
    [Locators.specialCharactersLabel, Locators.specialCharactersInputValue]
  ]);
  let idx;
  idx = 0;
  searchInputCombination.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.searchInput).clear().type(value)
    compareScreenshot(Locators.searchVR, testname, `Scenario_search component Input combination Typed for${key}${idx}`);
    cy.iframe(Locators.iframe).find(Locators.searchIcon).click()
    compareScreenshot(Locators.searchVR, testname, `Scenario_search component Input combination search icon clicked for ${key}${idx}`);
    idx++;
  })
}

// validates search component visual regression for desktop tab and mobile
//
// @parms: testname: string,deviceType: string
// @returns: void
const searchVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP || DEVICE_TYPE_TAB) {
    cy.iframe(Locators.iframe).find(Locators.searchComponent).should('be.visible')
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    clickElementIdentifiedByLocator(CommonLocators.hide)
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    searchVR(testname)
  }
  else {
    cy.get(Locators.COMPONENT_NAME).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.searchComponent).should('be.visible')
    searchVR(testname)
  }
}

describe('Visual Regression Test For Search Component', () => {
  it('Visit search component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit search component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit search component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit search component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_MOBILE);
    searchVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit search component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit search component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit search component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit search component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_MOBILE);
    searchVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit search component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit search component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit search component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_TAB);
  })

  it('Visit search component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
