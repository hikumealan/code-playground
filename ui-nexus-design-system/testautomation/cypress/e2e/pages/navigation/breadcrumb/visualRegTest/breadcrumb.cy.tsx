import 'cypress-iframe';
import { Locators } from '../breadcrumb.constants'
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

// validates breadcrumb default state clickable state visual regression
//
// @parms: testname: string deviceType: string
// @returns: void
const breadcrumbDefaultVRValidation = (testname: string, deviceType: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.breadcrumbComponent).should('be.visible')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.breadcrumbVR, testname, 'Scenario_01_Breadcrumb_Default_State_Validation');
  for (let idx = 0; idx <= 2; idx++) {
    {
        cy.iframe(Locators.iframe).find(Locators.breadcrumbIndividual).eq(idx).click()
        compareScreenshot(Locators.breadcrumbVR, testname, 'Scenario_Breadcrumb_Clickable_State_Validation for ${idx}');
    }
}
}

// validates breadcrumb with icon state clickable state visual regression
//
// @parms: testname: string deviceType: string
// @returns: void
const breadcrumbWithIconVRValidation = (testname: string, deviceType: string) => {
    cy.get(Locators.withIconSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
    compareScreenshot(Locators.breadcrumbVR, testname, 'Scenario_05_Breadcrumb with icon_Default_State_Validation');
  }

// validates breadcrumb disabled state component default state clickable state visual regression
//
// @parms: testname: string deviceType: string
// @returns: void
const breadcrumbDisabledVRValidation = (testname: string, deviceType: string) => {
    cy.get(Locators.disabledSideMenu).click()
    breadcrumbDefaultVRValidation(testname,deviceType)
  }

// validates breadcrumb with icon state component default state clickable state visual regression
//
// @parms: testname: string 
// @returns: void
const breadcrumbControlsVRValidation = (testname: string) => {
    cy.get(Locators.breadcrumbSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.seperatorTextbox).should('be.visible').clear().type(".")
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    compareScreenshot(Locators.breadcrumbVR, testname, 'Scenario_06_Breadcrumb controls_Default_State_Validation');
}

// validates breadcrumb visual regression for desktop , mobile and tab
//
// @parms: testname: string,deviceType: string
// @returns: void
const breadcrumbVisualRegressionValidation = (testname: string, deviceType: string) => {
    breadcrumbDefaultVRValidation(testname, deviceType)
    breadcrumbDisabledVRValidation(testname, deviceType)
    breadcrumbWithIconVRValidation(testname, deviceType)
    if (deviceType === DEVICE_TYPE_DESKTOP) {
        breadcrumbControlsVRValidation(testname)
    }
  }

describe('Visual Regression Test For BreadCrumb Component', () => {
  it('Visit breadcrumb component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit breadcrumb component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit breadcrumb component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit breadcrumb component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_MOBILE);
    breadcrumbVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit breadcrumb component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit breadcrumb component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit breadcrumb component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit breadcrumb component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_MOBILE);
    breadcrumbVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit breadcrumb component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit breadcrumb component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit breadcrumb component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit breadcrumb component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_MOBILE);
    breadcrumbVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })

})
