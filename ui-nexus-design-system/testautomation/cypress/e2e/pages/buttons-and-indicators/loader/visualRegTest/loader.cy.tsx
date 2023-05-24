import 'cypress-iframe';
import { Locators } from '../loader.constants'
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

// Navigate to the canvas tab and opens the storybook component in the fullscreen
//
// @return: void
const tabNavigation = () => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// Validates loader component default state visual regression
//
// @parms: testname: string
// @return: void
const loaderDefaultVRValidation = (testname: string) => {
  cy.iframe(Locators.iframe).find(Locators.loaderContent).should('be.visible')
  tabNavigation()
  compareScreenshot(Locators.loaderVR, testname, 'Scenario_01_Loader_Default_Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// Validates loader component controls visual regression
//
// @parms: testname: string
// @return: void
const loaderControlsVRValidation = (testname: string) => {
  ['show False state', 'show True state'].forEach(
    (loaderStates, idx) => {
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.frameLoaded(Locators.iframe);
      cy.iframe(Locators.iframe).find(Locators.show).click()
      clickElementIdentifiedByLocator(CommonLocators.canvas, false)
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
      compareScreenshot(Locators.loaderVR, testname, `Scenario_Loader_Validation ${loaderStates}${idx}`)
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
  )
}

// Validates loader overlay visual regression
//
// @parms: testname: string,deviceType : string
// @return: void
const loaderOverlayVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.loaderOverlay).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType === DEVICE_TYPE_DESKTOP || DEVICE_TYPE_TAB) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.loaderVR, testname, 'Scenario_01_Loader_Overlay_Default state Validation')
  cy.iframe(Locators.iframe).find(Locators.loaderButton).click()
  compareScreenshot(Locators.loaderVR, testname, 'Scenario_02_Loader_Overlay_Clickability state Validation')
  if (deviceType === DEVICE_TYPE_DESKTOP || DEVICE_TYPE_TAB) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates loader component overlay visual regression for mobile
//
// @parms: testname: string
// @return: void
const mobileOverlayVRValidation = (testname: string) => {
  cy.get(Locators.loaderOverlay).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  compareScreenshot(Locators.loaderVR, testname, 'Scenario_01_Loader_Mobile_Overlay_Default state Validation')
  cy.iframe(Locators.iframe).find(Locators.loaderButton).click()
  compareScreenshot(Locators.loaderVR, testname, 'Scenario_02_Loader_Mobile_Overlay_Clickability state Validation')
}

// Validates loader component overall visual regression for mobile tab and desktop
//
// @parms: testname: string, deviceType: string
// @return: void
const loaderVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    loaderDefaultVRValidation(testname)
    loaderControlsVRValidation(testname)
    loaderOverlayVRValidation(testname, deviceType)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    compareScreenshot(Locators.loaderVR, testname, 'Scenario_01_Loader_Mobile_Default_Validation')
    mobileOverlayVRValidation(testname)
  }
  else if (deviceType === DEVICE_TYPE_TAB) {
    loaderDefaultVRValidation(testname)
    loaderOverlayVRValidation(testname, deviceType)
  }
}

describe('Visual Regression Tests For Loader Component', () => {
  it('Visit Loader component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderComponentLocator, DEVICE_TYPE_DESKTOP);
    loaderVisualRegressionValidation('Test_01_Loader__VR_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Loader component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderComponentLocator, DEVICE_TYPE_DESKTOP);
    loaderVisualRegressionValidation('Test_02_Loader_VR_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Loader component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderComponentLocator, DEVICE_TYPE_DESKTOP);
    loaderVisualRegressionValidation('Test_03_Loader_VR_Javascript_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Loader component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderComponentLocator, DEVICE_TYPE_MOBILE);
    loaderVisualRegressionValidation('Test_04__Loader_VR_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Loader component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderComponentLocator, DEVICE_TYPE_DESKTOP);
    loaderVisualRegressionValidation('Test_05_Loader_VR_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Loader component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderComponentLocator, DEVICE_TYPE_DESKTOP);
    loaderVisualRegressionValidation('Test_06_Loader_VR_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Loader component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderComponentLocator, DEVICE_TYPE_DESKTOP);
    loaderVisualRegressionValidation('Test_07_Loader_VR_Angular_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Loader component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderComponentLocator, DEVICE_TYPE_MOBILE);
    loaderVisualRegressionValidation('Test_08_Loader_VR_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Loader component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderComponentLocator, DEVICE_TYPE_DESKTOP);
    loaderVisualRegressionValidation('Test_09_Loader_VR_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Loader component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderComponentLocator, DEVICE_TYPE_DESKTOP);
    loaderVisualRegressionValidation('Test_10_Loader_VR_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Loader component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderComponentLocator, DEVICE_TYPE_DESKTOP);
    loaderVisualRegressionValidation('Test_11_Loader_VR_React_TabPotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Loader component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderComponentLocator, DEVICE_TYPE_MOBILE);
    loaderVisualRegressionValidation('Test_12_Loader_VR_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
