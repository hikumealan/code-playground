import 'cypress-iframe';
import { Locators } from '../errormessage.constants'
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

// validates error default component , clickable state and value typed visual regression
//
// @parms: testname: string,deviceType: string
// @returns: void
const errorDefaultVRValidation = (testname: string, deviceType: string) => {
  cy.iframe(Locators.iframe).find(Locators.errorMessage).should('be.visible').contains('Please enter a first name.')
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.hide)
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.errorVR, testname, 'Scenario_01_Error_Component_Validation');
  cy.iframe(Locators.iframe).find(Locators.errorTextBox).click({force:true})
  compareScreenshot(Locators.errorVR, testname, 'Scenario_02_Error Message Text Box Clickability_Validation');
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  cy.iframe(Locators.iframe).find(Locators.errorTextBox).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.errorTextBox).clear().type('Incorrect values entered leads to an error message', { force: true })
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.errorVR, testname, 'Scenario_03_Typing incorrect value_Validation')
  cy.iframe(Locators.iframe).find(Locators.errorTextBox).clear({ force: true })
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates error controls visual regression with customised error messages
//
// @parms: testname: string
// @returns: void
const errorControlsVRValidation = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.errorVR, testname, 'Scenario_04_Default error message validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.messageTextBox).clear().type('Customised Error Message')
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.errorVR, testname, 'Scenario_05_customised Error Message Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.messageTextBox).should('be.visible').clear().type('Please enter a first name.')
}

// validates error email component , clickable state and email id entered visual regression
//
// @parms: testname: string,deviceType: string
// @returns: void
const erroremailVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.emailValidationSideMenu).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.errorVR, testname, 'Scenario_06_Default error email component validation')
  cy.iframe(Locators.iframe).find(Locators.enterYourEmailTextbox).click({ force: true })
  compareScreenshot(Locators.errorVR, testname, 'Scenario_07_error email component clickable state validation')
  cy.iframe(Locators.iframe).find(Locators.enterYourEmailTextbox).clear().type('emailadress@gmail.com', { force: true })
  compareScreenshot(Locators.errorVR, testname, 'Scenario_08_error email component entered email address state validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates error name component , clickable state and name entered and maximum value entered visual regression
//
// @parms: testname: string,deviceType:string
// @returns: void
const errornameVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.nameValidationSideMenu).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.errorVR, testname, 'Scenario_09_Default error  name component validation')
  cy.iframe(Locators.iframe).find(Locators.enterYourEmailTextbox).click({ force: true })
  compareScreenshot(Locators.errorVR, testname, 'Scenario_10_error  name component clickable state validation')
  cy.iframe(Locators.iframe).find(Locators.enterYourEmailTextbox).clear().type('1234567890', { force: true })
  compareScreenshot(Locators.errorVR, testname, 'Scenario_11_error  name component value entered  validation')
  cy.iframe(Locators.iframe).find(Locators.enterYourEmailTextbox).clear().type('12345678901234567890')
  compareScreenshot(Locators.errorVR, testname, 'Scenario_12_error  name component value entered more than ten characters validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates error component for desktop, mobile and tab
//
// @parms: testname: string,deviceType: string
// @returns: void
const errorVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    errorDefaultVRValidation(testname, deviceType)
    errorControlsVRValidation(testname)
    erroremailVRValidation(testname, deviceType)
    errornameVRValidation(testname, deviceType)
  }
  else if (deviceType === DEVICE_TYPE_TAB) {
    errorDefaultVRValidation(testname, deviceType)
    erroremailVRValidation(testname, deviceType)
    errornameVRValidation(testname, deviceType)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click({force:true})
    errorDefaultVRValidation(testname, deviceType)
    erroremailVRValidation(testname, deviceType)
    errornameVRValidation(testname, deviceType)
  }
}

describe('Visual Regression Test For ErrorMessage Component', () => {
  it('Visit error component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit error component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit error component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit error component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_MOBILE);
    errorVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit error component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit error component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit error component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit error component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_MOBILE);
    errorVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit error component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })
  it('Visit error component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit error component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_TAB);
  })

  it('Visit error component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
