import 'cypress-iframe';
import { Locators } from '../input.constants'
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


// validates input default component , clickable state and value typed visual regression
//
// @parms: testname: string,deviceType: string
// @returns: void
const inputDefaultVRValidation = (testname: string, deviceType: string) => {
  cy.iframe(Locators.iframe).find(Locators.inputLabel).should('be.visible')
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.hide)
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.inputVR, testname, 'Scenario_01_input_Default_Component_Validation');
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).click()
  compareScreenshot(Locators.inputVR, testname, 'Scenario_02_Input Message Text Box Clickability_Validation');
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).type('input', { force: true })
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.inputVR, testname, 'Scenario_03_Input typed value_Validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates input controls visual regression
//
// @parms: testname: string
// @returns: void
const inputControlValidation = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controltoggle).eq(1).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.inputVR, testname, 'Scenario_04_Default input field disabled state validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controltoggle).eq(1).click()
  const type = new Map([['variantEmail', 'email'], ['variantNumber', 'number'],
    ['variantPassword', 'password'], ['variantTel', 'tel'], ['variantText', 'text']]);
  type.forEach(
    (variant, idx) => {
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(Locators.controlSelect).select(variant)
      clickElementIdentifiedByLocator(CommonLocators.canvas, false)
      cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).type(variant, { force: true })
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
      compareScreenshot(Locators.inputVR, testname, `Scenario_input field with input types validation ${variant} ${idx}`)
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
  )
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlSelect).select('date')
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).type('2023-01-01')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.inputVR, testname, 'Scenario_input field with input types validation for date')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// validates input max length component visual regression validation
//
// @parms: testname: string,deviceType: string
// @returns: void
const maxLengthVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.inputMaxLength).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.inputVR, testname, 'Scenario_01_Max Length Default state validation')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).click()
  compareScreenshot(Locators.inputVR, testname, 'Scenario_02_Max Length Clicked state validation')
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).type('1234567890')
  compareScreenshot(Locators.inputVR, testname, 'Scenario_03_Max Length Typed state validation')
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).type('123456789012345678901234567890')
  compareScreenshot(Locators.inputVR, testname, 'Scenario_02_Max Length Incorrect value entered validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates input with number component visual regression validation
//
// @parms: testname: string,deviceType: string
// @returns: void
const inputWithNumberVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.inputWithNumberSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.inputVR, testname, 'Scenario_01_input with number Default state validation')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).click()
  compareScreenshot(Locators.inputVR, testname, 'Scenario_02_input with number Clicked state validation')
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).type('12345')
  compareScreenshot(Locators.inputVR, testname, 'Scenario_03_input with number Typed state validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates input with date component visual regression validation
//
// @parms: testname: string,deviceType: string
// @returns: void
const inputWithDateVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.inputWithDateSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.inputVR, testname, 'Scenario_01_input with date Default state validation')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).click()
  compareScreenshot(Locators.inputVR, testname, 'Scenario_02_input with date Clicked state validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates input with read only component visual regression validation
//
// @parms: testname: string,deviceType: string
// @returns: void
const inputReadOnlyVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.inputWithReadOnlySideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.inputVR, testname, 'Scenario_01_input with read only Default state validation')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).click()
  compareScreenshot(Locators.inputVR, testname, 'Scenario_02_input with read only Clicked state validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates input with disabled component visual regression validation
//
// @parms: testname: string,deviceType: string
// @returns: void
const inputDisabledVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.inputWithDisabledSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.inputVR, testname, 'Scenario_01_input disabled Default state validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}


// validates input with password component visual regression validation
//
// @parms: testname: string,deviceType: string
// @returns: void
const inputWithPasswordVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.inputPasswordSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.inputVR, testname, 'Scenario_01_input with password Default state validation')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).click()
  compareScreenshot(Locators.inputVR, testname, 'Scenario_02_input with password Clicked state validation')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).type('12345')
  compareScreenshot(Locators.inputVR, testname, 'Scenario_03_input with password Typed state validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates input component for desktop, mobile and tab
//
// @parms: testname: string,deviceType: string
// @returns: void
const errorVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    inputDefaultVRValidation(testname, deviceType)
    inputControlValidation(testname)
  }
  else if (deviceType === DEVICE_TYPE_TAB) {
    inputDefaultVRValidation(testname, deviceType)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click({ force: true })
    inputDefaultVRValidation(testname, deviceType)
  }
  maxLengthVRValidation(testname, deviceType)
  inputWithNumberVRValidation(testname, deviceType)
  inputWithDateVRValidation(testname, deviceType)
  inputReadOnlyVRValidation(testname, deviceType)
  inputDisabledVRValidation(testname, deviceType)
  inputWithPasswordVRValidation(testname, deviceType)
}

describe('Visual Regression Test For Input Component', () => {
  it('Visit Input Component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Input Component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Input Component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Input Component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_MOBILE);
    errorVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Input Component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Input Component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Input Component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Input Component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_MOBILE);
    errorVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Input Component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })
  it('Visit Input Component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Input Component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Input Component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_MOBILE);
    errorVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
