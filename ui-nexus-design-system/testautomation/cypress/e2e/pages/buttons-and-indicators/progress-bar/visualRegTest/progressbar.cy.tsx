import 'cypress-iframe';
import { Locators } from '../progressbar.constants'
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

// Validates progressbar default visual regression
//
// @parms: testname: string
// @returns: void
const progressbarDefaultVRValidation = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.progressbarComponent).should('be.visible')
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.progressBarVR, testname, 'Scenario_01_Progress bar_Default_Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// Validates progressbar controls visual regression
//
// @parms: testname: string
// @returns: void
const progressbarControlsVRValidation = (testname: string) => {
  ['circle true', 'error true', 'indeterminate true'].forEach(
    (progressbarVariants, idx) => {
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(Locators.toggle).eq(idx).click({ force: true })
      clickElementIdentifiedByLocator(CommonLocators.canvas, false)
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
      compareScreenshot(Locators.progressBarVR, testname, `Scenario_Progressbar_Validation ${progressbarVariants} ${idx}`)
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(Locators.toggle).eq(idx).click({ force: true })
    }
  )
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.progressbarValue).type('100')
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.progressBarVR, testname, 'Scenario_05_Progress bar_value_Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.progressbarValue).clear().type('50')
}

// Validates progressbar infinite visual regression
//
// @parms: testname: string
// @returns: void
const progressbarInfiniteVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.progressbarInfinite).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.progressBarVR, testname, 'Scenario_07_Progress bar Infinite_defaultstate_Validation')
  cy.iframe(Locators.iframe).find(Locators.checkETA).click({force:true})
  compareScreenshot(Locators.progressBarVR, testname, 'Scenario_08_Progress bar_checkETA_Clicked state_Validation')
  cy.iframe(Locators.iframe).find(Locators.checkETA).click({force:true})
  compareScreenshot(Locators.progressBarVR, testname, 'Scenario_09_Progress bar_calculatingETA_Clicked state_Validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates progressbar reports visual regression
//
// @parms: testname: string
// @returns: void
const progressbarReportsVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.progressbarReports).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.progressBarVR, testname, 'Scenario_07_Progress bar Report_defaultstate_Validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates progressbar overall  visual regression for mobile, tab and desktop
//
// @parms: testname: string
// @returns: void
const progressbarVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    progressbarDefaultVRValidation(testname)
    progressbarControlsVRValidation(testname)
  }
  else if (deviceType === DEVICE_TYPE_TAB) {
    progressbarDefaultVRValidation(testname)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click({force:true})
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    compareScreenshot(Locators.progressBarVR, testname, 'Scenario_01_Progress bar_Mobile_Default_Validation')
  }
  progressbarInfiniteVRValidation(testname, deviceType)
  progressbarReportsVRValidation(testname, deviceType)
}

describe('Visual Regression Test For progressbar Component', () => {
  it('Visit Progressbar component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressbarVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Progressbar component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressbarVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Progressbar component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressbarVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Progressbar component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_MOBILE);
    progressbarVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Progressbar component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressbarVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Progressbar component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressbarVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Progressbar component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressbarVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Progressbar component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_MOBILE);
    progressbarVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Progressbar component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressbarVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Progressbar component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressbarVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Progressbar component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressbarVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Progressbar component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressbarVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
