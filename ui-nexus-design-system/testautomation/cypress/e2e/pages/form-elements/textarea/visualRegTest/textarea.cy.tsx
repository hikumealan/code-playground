import 'cypress-iframe';
import { Locators } from '../textarea.constants'
import {
  DESKTOP,
  TAB_LANDSCAPE,
  TAB_PORTRAIT,
  MOBILE,
  DEVICE_TYPE_DESKTOP,
  DEVICE_TYPE_MOBILE,
  JAVASCRIPT,
  ANGULAR,
  REACT
} from '../../../../constants/constants';
import { CommonLocators } from '../../../../constants/locators'
import { selectSBFramework, compareScreenshot, clickElementIdentifiedByLocator } from '../../../../utils/functions'

// validates text area default state clickable state visual regression
//
// @parms: testname: string testname: string
// @returns: void
const textareaDefaultVisualRegressionValidation = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).should('be.visible')
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.textareaVR, testname, 'Scenario_01_Text Area_Default_Validation');
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).click()
  compareScreenshot(Locators.textareaVR, testname, 'Scenario_02_Text Area_click_Validation');
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// validates text area  input combinations visual regression
//
// @parms: testname: string testname: string,deviceType: string
// @returns: void
const textAreaInputCombinationsValidation = (testname: string, deviceType: string) => {
  const inputCombination = new Map([
    [Locators.numericValue, Locators.numericValueCombination],
    [Locators.alphabetValue, Locators.alphabetInputValue],
    [Locators.lowerCaseValue, Locators.alphabetInputValue],
    [Locators.upperCaseValue, Locators.upperCaseInputValue],
    [Locators.alphanumericValue, Locators.alphanumericInputValue],
    [Locators.specialCharactersValue, Locators.specialCharacterInputValue],
    [Locators.minValue, Locators.singleValue],
    [Locators.maxValue, Locators.maxNumericInputValue]
  ]);
  inputCombination.forEach((value, key) => {
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    if (deviceType !== DEVICE_TYPE_MOBILE) {
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
    cy.iframe(Locators.iframe).find(Locators.textareaComponentTextArea).clear().type(value)
    compareScreenshot(Locators.textareaVR, testname, `Scenario_Text Area_input_Validation with input  ${key}`);
    if (deviceType !== DEVICE_TYPE_MOBILE) {
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
  })
}

// validates textarea controls visual regression with customised error messages
//
// @parms: testname: string
// @returns: void
const textareaControlsVRValidation = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlDisabled).click({ force: true })
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.textareaVR, testname, 'Scenario_04_Disabled state text area validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlDisabled).click({ force: true })
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.textareaVR, testname, 'Scenario_05_Enabled state text area validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlPlaceholder).clear({ force: true }).type('placeholder')
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.textareaVR, testname, 'Scenario_06_placeholder text area validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlPlaceholder).clear({ force: true })
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.textareaVR, testname, 'Scenario_07_Default_placeholder text area validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// validates form field overall visual regression for desktop , mobile and tab
//
// @parms: testname: string,deviceType: string
// @returns: void
const textAreaVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    textareaDefaultVisualRegressionValidation(testname)
    textareaControlsVRValidation(testname)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click({ force: true })
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.textareaComponent).should('be.visible')
    compareScreenshot(Locators.textareaVR, testname, 'Scenario_01_Text Area_Default_Validation_Mobile');
    cy.iframe(Locators.iframe).find(Locators.textareaComponent).click()
    compareScreenshot(Locators.textareaVR, testname, 'Scenario_02_Text Area_click_Validation_Mobile');
  }
  textAreaInputCombinationsValidation(testname, deviceType)
}

describe('Visual Regression Test For Textarea Component', () => {
  it('Visit text area component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit text area component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit text area component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_MOBILE);
  })

  it('Visit text area component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_MOBILE);
    textAreaVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit text area component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit text area component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit text area component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_MOBILE);
  })

  it('Visit text area component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_MOBILE);
    textAreaVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit text area component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit text area component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit text area component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_MOBILE);
  })

  it('Visit text area component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_MOBILE);
    textAreaVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
