import 'cypress-iframe';
import { Locators } from '../formfield.constants'
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

// validates form field default state clickable state visual regression
//
// @parms: testname: string testname: string
// @returns: void
const formFieldDefaultVisualRegressionValidation = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.formFieldInputBox).should('be.visible')
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.formFieldVR, testname, 'Scenario_01_Form Field_Default_Validation');
  cy.iframe(Locators.iframe).find(Locators.formFieldInputBox).click()
  compareScreenshot(Locators.formFieldVR, testname, 'Scenario_02_Form Field_click_Validation');
}

// validates form field  input combinations visual regression
//
// @parms: testname: string testname: string,deviceType: string
// @returns: void
const formFieldInputCombinationsValidation = (testname: string, deviceType: string) => {
  const inputCombination = new Map([
    [Locators.numericVariant, Locators.numericValue],
    [Locators.alphabetVariant, Locators.alphabeticValue],
    [Locators.lowerCaseVariant, Locators.lowerCaseValue],
    [Locators.upperCaseVariant, Locators.upperCsseValue],
    [Locators.alphanumericVariant, Locators.alphanumericValue],
    [Locators.specialCharactersVariant, Locators.specialCharactersValue],
    [Locators.minimumValueVariant, Locators.minimumValue],
    [Locators.maximumValueVariant, Locators.maximumValue]
  ]);
  let idx;
  idx = 0;
  inputCombination.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.formFieldInputBox).clear().type(value)
    compareScreenshot(Locators.formFieldVR, testname, `Scenario_Form Field_input_Validation with input  ${key} ${idx}`);
    // clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    idx++;
  })
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates form field disabled state visual regression
//
// @parms: testname: string,,deviceType: string
// @returns: void
const formFieldDisabledStateVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.disabledSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.formFieldVR, testname, 'Scenario_12_Form Field_Disabled_Default State_Validation');
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates form field with message component visual regression
//
// @parms: testname: string,deviceType: string
// @returns: void
const formFieldWithMessageVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.withMessageSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.formFieldVR, testname, 'Scenario_13_Form Field_with message_Default State_Validation');
  cy.iframe(Locators.iframe).find(Locators.formFieldInputBox).click()
  compareScreenshot(Locators.formFieldVR, testname, 'Scenario_14_Form Field_with message_Clickable State_Validation');
  cy.iframe(Locators.iframe).find(Locators.formFieldInputBox).type('abcd')
  compareScreenshot(Locators.formFieldVR, testname, 'Scenario_15_Form Field_with message_Entered input State_Validation');
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates form field with error component visual regression
//
// @parms: testname: string,deviceType: string
// @returns: void
const formFieldWithErrorVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.withErrorSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.formFieldVR, testname, 'Scenario_16_Form Field_with error_Default State_Validation');
  cy.iframe(Locators.iframe).find(Locators.formFieldErrorMessageTextbox).click()
  compareScreenshot(Locators.formFieldVR, testname, 'Scenario_17_Form Field_with error_clickable State_Validation');
  cy.iframe(Locators.iframe).find(Locators.formFieldErrorMessageTextbox).type('abcd')
  compareScreenshot(Locators.formFieldVR, testname, 'Scenario_18_Form Field_with message_Entered input State_Validation');
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates form field overall visual regression for desktop , mobile and tab
//
// @parms: testname: string,deviceType: string
// @returns: void
const formFieldVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    formFieldDefaultVisualRegressionValidation(testname)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click({ force: true })
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.formFieldInputBox).should('be.visible')
    compareScreenshot(Locators.formFieldVR, testname, 'Scenario_01_Form Field_Default_Validation_Mobile');
    cy.iframe(Locators.iframe).find(Locators.formFieldInputBox).click()
    compareScreenshot(Locators.formFieldVR, testname, 'Scenario_02_Form Field_click_Validation_Mobile');
  }
  formFieldInputCombinationsValidation(testname, deviceType)
  formFieldDisabledStateVRValidation(testname, deviceType)
  formFieldWithMessageVRValidation(testname, deviceType)
  formFieldWithErrorVRValidation(testname, deviceType)
}

describe('Visual Regression Test For Formfield Component', () => {
  it('Visit form field component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit form field component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit form field component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit form field component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_MOBILE);
    formFieldVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit form field component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit form field component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit form field component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit form field component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_MOBILE);
    formFieldVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit form field component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit form field component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit form field component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit form field component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_MOBILE);
    formFieldVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
