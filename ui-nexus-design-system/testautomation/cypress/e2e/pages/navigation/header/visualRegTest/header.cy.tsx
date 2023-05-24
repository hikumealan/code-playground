import 'cypress-iframe';
import { Locators } from '../header.constants'
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

// validates header default state clickable state visual regression
//
// @parms: testname: string deviceType: string component: string
// @returns: void
const headerVRValidation = (testname: string, deviceType: string,component: string) => {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    compareScreenshot(Locators.headerVR, testname, 'Scenario_01_Default_Validation for'+component);
    cy.iframe(Locators.iframe).find(Locators.headerLogo).click()
    compareScreenshot(Locators.headerVR, testname, 'Scenario_02_Header_Logo_click_Validation for '+component);
    if (deviceType !== DEVICE_TYPE_DESKTOP) {
      cy.iframe(Locators.iframe).find(Locators.headercomponentMobile).click({force:true})  
      }
    cy.iframe(Locators.iframe).find(Locators.headerMenuItemComponent).eq(0).click()
    compareScreenshot(Locators.headerVR, testname, 'Scenario_03_Item 1_click_Validation for '+component);
    cy.iframe(Locators.iframe).find(Locators.headerMenuItemComponent).eq(1).click()
    compareScreenshot(Locators.headerVR, testname, 'Scenario_04_Item 2_click_Validation for '+component);
    cy.iframe(Locators.iframe).find(Locators.headerMenuItemComponent).eq(2).click()
    compareScreenshot(Locators.headerVR, testname, 'Scenario_05_Item 3_click_Validation for '+component);
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen) 
  }

  // validates header default state clickable state visual regression
//
// @parms: testname: string deviceType: string
// @returns: void
const headerDefaultVRValidation = (testname: string, deviceType: string) => {
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.headerComponent).should('be.visible')
    clickElementIdentifiedByLocator(CommonLocators.hide)
    headerVRValidation(testname, deviceType, "header")
  }

// validates header with avatar default state clickable state visual regression
//
// @parms: testname: string deviceType: string
// @returns: void
const headerWithAvatarDefaultVRValidation = (testname: string, deviceType: string) => {
    cy.get(Locators.headerWithAvatarSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    headerVRValidation(testname, deviceType, "header with avatar")
  }
  
// validates Header overall visual regression for desktop , mobile and tab
//
// @parms: testname: string,deviceType: string
// @returns: void
const headerVisualRegressionValidation = (testname: string, deviceType: string) => {
    headerDefaultVRValidation(testname, deviceType)
    headerWithAvatarDefaultVRValidation(testname, deviceType)
  }

describe('Visual Regression Test For Header Component', () => {
  it('Visit Header component__Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Header component__Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Header component__Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_MOBILE);
  })

  it('Visit Header component__Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_MOBILE);
    headerVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Header component___Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Header component__Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Header component__Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_MOBILE);
  })

  it('Visit Header component__Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_MOBILE);
    headerVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Header component__Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Header component__Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Header component__Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_MOBILE);
  })

  it('Visit Header component__Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_MOBILE);
    headerVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })

})
