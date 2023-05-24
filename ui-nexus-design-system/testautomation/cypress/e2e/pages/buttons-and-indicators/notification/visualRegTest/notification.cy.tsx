import 'cypress-iframe';
import { Locators } from '../notification.constants'
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

// Notification component default state Visual regression validation
//
// @parms: testname: string
// @return: void
const defaultNotificationVRValidation = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.notificationComponent).should('be.visible')
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.notificationVR, testname, 'Scenario_01_Notification_Default_Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// Notification component dontrol section Visual regression validation
//
// @parms: testname: string
// @return: void
const notificationControlsVRValidation = (testname: string) => {
  const variant = new Map([['Varianterror', Locators.errorValue], ['Variantsuccess', Locators.successValue], ['Variantwarning', Locators.warningValue]]);
  variant.forEach(
    (notificationVariant, idx) => {
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(Locators.variant).select(notificationVariant)
      clickElementIdentifiedByLocator(CommonLocators.canvas, false)
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
      compareScreenshot(Locators.notificationVR, testname, `Scenario_Notification_Notification state_Validation  ${notificationVariant} ${idx}`)
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
  );
}

// Notification overlay component  Visual regression validation
//
// @parms: testname: string
// @return: void
const notificationOverlayVRValidation = (testname: string) => {
  cy.get(Locators.notificationOverlay).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.notificationVR, testname, 'Scenario_05_Notification overlay_Deafult_Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// Notification variant component  Visual regression validation
//
// @parms: testname: string
// @return: void
const notificationVariants = (testname: string) => {
  cy.get(Locators.notificationVariants).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.notificationVR, testname, 'Scenario_06_Notification variants_Deafult_Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// Notification component overall  Visual regression validation for mobile
//
// @parms: testname: string
// @return: void
const mobileNotificationVisualRegressionValidation = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.notificationComponent).should('be.visible')
  clickElementIdentifiedByLocator(CommonLocators.hide)
  compareScreenshot(Locators.notificationVR, testname, 'Scenario_01_Notification_Default_Validation')
  cy.get(Locators.notificationOverlay).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  compareScreenshot(Locators.notificationVR, testname, 'Scenario_02_Notification overlay_Deafult_Validation')
  cy.get(Locators.notificationVariants).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  compareScreenshot(Locators.notificationVR, testname, 'Scenario_03_Notification variants_Deafult_Validation')
}

// Notification component overall Visual regression validation for desktop tab and mobile
//
// @parms: testname: string , deviceType
// @return: void
const notificationVisualRegressionValidation = (testname: string, deviceType) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    defaultNotificationVRValidation(testname)
    notificationControlsVRValidation(testname)
    notificationOverlayVRValidation(testname)
    notificationVariants(testname)
  }
  else if (deviceType === DEVICE_TYPE_TAB) {
    defaultNotificationVRValidation(testname)
    notificationOverlayVRValidation(testname)
    notificationVariants(testname)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    mobileNotificationVisualRegressionValidation(testname)
  }
}

describe('Visual Regression Test For Notification Component', () => {
  it('Visit Notification component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })
  it('Visit Notification component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })
  it('Visit Notification component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_TAB);
  })
  it('Visit Notification component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_MOBILE);
    notificationVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })
  it('Visit Notification component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })
  it('Visit Notification component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })
  it('Visit Notification component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_TAB);
  })
  it('Visit Notification component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_MOBILE);
    notificationVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })
  it('Visit Notification component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })
  it('Visit Notification component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })
  it('Visit Notification component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_TAB);
  })
  it('Visit Notification component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_MOBILE);
    notificationVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
