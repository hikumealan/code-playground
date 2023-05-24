import 'cypress-iframe';
import { Locators } from '../toast.constants'
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

// validates toast default state 
//
// @parms: testname: string deviceType: string
// @returns: void
const toastDefaultVRValidation = (testname: string, deviceType: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.toastComponentLocator).should('be.visible')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.toastVR, testname, 'Scenario_01_Toast_Component_Default_State');
}

// validates toast variant default state
//
// @parms: testname: string deviceType: string
// @returns: void
const toastVariantDefaultVRValidation = (testname: string, deviceType: string) => {
    cy.get(Locators.toastVariantsSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
    compareScreenshot(Locators.toastVR, testname, 'Scenario_02_Toast_Variant_Component_Default_State');
  }

// validates toast variant default state
//
// @parms: testname: string deviceType: string
// @returns: void
const toastAutoCloseVRValidation = (testname: string, deviceType: string) => {
    cy.get(Locators.toastAutoCloseSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
    compareScreenshot(Locators.toastVR, testname, 'Scenario_03_Toast_Auto_Close_Component_Default_State');
    cy.get(Locators.autoCloseMessage).click()
    compareScreenshot(Locators.toastVR, testname, 'Scenario_04_Toast_Auto_Close_Timeout_Component_Default_State');
    cy.get(Locators.reloadPage).click()
    compareScreenshot(Locators.toastVR, testname, 'Scenario_05_Toast_reload_Component');

    
  }

// validates toast overall visual regression for desktop , mobile and tab
//
// @parms: testname: string,deviceType: string
// @returns: void
const toastVisualRegressionValidation = (testname: string, deviceType: string) => {
    toastDefaultVRValidation(testname, deviceType)
    toastVariantDefaultVRValidation(testname, deviceType)
    toastAutoCloseVRValidation(testname, deviceType)
}

describe('Visual Regression Test For Toast Component', () => {
  it('Visit Toast Component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toast Component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toast Component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toast Component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_MOBILE);
    toastVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Toast Component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toast Component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toast Component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toast Component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_MOBILE);
    toastVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Toast Component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toast Component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toast Component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toast Component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_MOBILE);
    toastVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })

})
