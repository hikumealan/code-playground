import 'cypress-iframe';
import { Locators } from '../menu.constants'
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

// validates menu default state clickable state visual regression
//
// @parms: testname: string deviceType: string
// @returns: void
const menuDefaultVRValidation = (testname: string, deviceType: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.menuButtonComponent).should('be.visible')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.menuVR, testname, 'Scenario_01_Menu_Default_Validation');
  cy.iframe(Locators.iframe).find(Locators.menuButtonComponent).click({force:true})
  compareScreenshot(Locators.menuVR, testname, 'Scenario_02_Menu_open_Validation');
  cy.iframe(Locators.iframe).find(Locators.menuListComponent).eq(0).click({force:true})
  compareScreenshot(Locators.menuVR, testname, 'Scenario_03_Menu_Item 1_click_Validation');
  cy.iframe(Locators.iframe).find(Locators.menuListComponent).eq(1).click({force:true})
  compareScreenshot(Locators.menuVR, testname, 'Scenario_04_Menu_Item 2_click_Validation');
  cy.iframe(Locators.iframe).find(Locators.menuListComponent).eq(2).click({force:true})
  compareScreenshot(Locators.menuVR, testname, 'Scenario_05_Menu_Item 3_click_Validation');
  cy.iframe(Locators.iframe).find(Locators.closeButton).click({force:true})
  compareScreenshot(Locators.menuVR, testname, 'Scenario_06_Menu_Close Button_click_Validation');
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates menu controls visual regression
//
// @parms: testname: string 
// @returns: void
const menuControlsVRValidation = (testname: string) => {
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.openToggleButton).should('be.visible').click({force:true}) 
    clickElementIdentifiedByLocator(CommonLocators.canvas, false) 
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    compareScreenshot(Locators.menuVR, testname, 'Scenario_07_Menu_Open_True_Validation');
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.openToggleButton).should('be.visible').click({force:true}) 
    clickElementIdentifiedByLocator(CommonLocators.canvas, false) 
    //clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    compareScreenshot(Locators.menuVR, testname, 'Scenario_08_Menu_Open_False_Validation');
    //clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.positionSelectBox).select(Locators.leftValue, { force: true });
    clickElementIdentifiedByLocator(CommonLocators.canvas, false);
   // clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    compareScreenshot(Locators.menuVR, testname, 'Scenario_09_Menu_Left_Position_Validation');
   // clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.positionSelectBox).select(Locators.rightValue, { force: true });
    clickElementIdentifiedByLocator(CommonLocators.canvas, false);
    //clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    compareScreenshot(Locators.menuVR, testname, 'Scenario_10_Menu_Right_Position_Validation');
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
}

// validates Menu overall visual regression for desktop , mobile and tab
//
// @parms: testname: string,deviceType: string
// @returns: void
const headerVisualRegressionValidation = (testname: string, deviceType: string) => {
    menuDefaultVRValidation(testname, deviceType)
    if (deviceType === DEVICE_TYPE_DESKTOP) {
    menuControlsVRValidation(testname)
    }
  }

describe('Visual Regression Test For Menu Component', () => {
  it('Visit Menu Component__Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Menu Component__Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Menu Component__Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Menu Component__Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_MOBILE);
    headerVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Menu Component___Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Menu Component__Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Menu Component__Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Menu Component__Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_MOBILE);
    headerVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Menu Component__Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Menu Component__Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Menu Component__Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    headerVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Menu Component__Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_MOBILE);
    headerVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })

})
