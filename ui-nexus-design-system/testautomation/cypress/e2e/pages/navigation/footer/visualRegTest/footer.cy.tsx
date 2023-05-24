import 'cypress-iframe';
import { Locators } from '../footer.constants'
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


// validates footer default component , clickable state visual regression
//
// @parms: testname: string,deviceType: string
// @returns: void
const footerDefaultVRValidation = (testname: string, deviceType: string) => {
  cy.iframe(Locators.iframe).find(Locators.footerHeader).should('be.visible')
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.hide)
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.footerVR, testname, 'Scenario_01_footer_Default_Component_Validation');
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates footer component for desktop, mobile and tab
//
// @parms: testname: string,deviceType: string
// @returns: void
const footerVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    footerDefaultVRValidation(testname, deviceType)
  }
  else if (deviceType === DEVICE_TYPE_TAB) {
    footerDefaultVRValidation(testname, deviceType)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click({ force: true })
    footerDefaultVRValidation(testname, deviceType)
  }
}

describe('Visual Regression Test For footer Component', () => {
  it('Visit footer Component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
    footerVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit footer Component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
    footerVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit footer Component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
    footerVisualRegressionValidation('Test_03_Javascript_TabPortrait', DEVICE_TYPE_TAB);
  })

  it('Visit footer Component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_MOBILE);
    footerVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit footer Component__Visual Regression_storybook_Angular Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
    footerVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit footer Component_Visual Regression_storybook_Angular Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
    footerVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit footer Component_Visual Regression_storybook_Angular Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
    footerVisualRegressionValidation('Test_07_Angular_TabPortrait', DEVICE_TYPE_TAB);
  })

  it('Visit footer Component_Visual Regression_storybook_Angular Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_MOBILE);
    footerVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit footer Component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
    footerVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })
  it('Visit footer Component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
    footerVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit footer Component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
    footerVisualRegressionValidation('Test_11_React_TabPortrait', DEVICE_TYPE_TAB);
  })

  it('Visit footer Component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_MOBILE);
    footerVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
