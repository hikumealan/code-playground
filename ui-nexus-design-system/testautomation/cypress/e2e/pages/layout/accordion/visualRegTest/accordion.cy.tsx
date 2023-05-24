import 'cypress-iframe';
import { Locators } from '../accordion.constants'
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

// validates accordion default state clickable state visual regression
//
// @parms: testname: string deviceType: string
// @returns: void
const accordionVRValidation = (testname: string, deviceType: string, componentType: string) => {
  compareScreenshot(Locators.accordionVR, testname, 'Scenario_01_accordion_Default_Validation for ' +componentType);
  cy.iframe(Locators.iframe).find(Locators.accordionComponentLabel).eq(0).click({force:true})
  compareScreenshot(Locators.accordionVR, testname, 'Scenario_02_source Data_clicked state_Validation for ' +componentType);
  cy.iframe(Locators.iframe).find(Locators.accordionComponentLabel).eq(1).click({force:true})
  compareScreenshot(Locators.accordionVR, testname, 'Scenario_03_Data exploration_clicked state_Validation for ' +componentType);
  cy.iframe(Locators.iframe).find(Locators.accordionComponentLabel).eq(2).click({force:true})
  compareScreenshot(Locators.accordionVR, testname, 'Scenario_04_Training_clicked state_Validation for ' +componentType);
  cy.iframe(Locators.iframe).find(Locators.accordionComponentLabel).eq(3).click({force:true})
  compareScreenshot(Locators.accordionVR, testname, 'Scenario_05_Test and analysis_clicked state_Validation for ' +componentType);
  cy.iframe(Locators.iframe).find(Locators.featureSetComponentLabel).click({force:true})
  compareScreenshot(Locators.accordionVR, testname, 'Scenario_06_Feature sets_clicked state_Validation for ' +componentType);
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates accordion default state clickable state visual regression
//
// @parms: testname: string deviceType: string
// @returns: void
const accordionDefaultVRValidation = (testname: string, deviceType: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.accordionComponent).should('be.visible')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  accordionVRValidation(testname,deviceType, "accordion")
}

// validates accordion Alignement component default state clickable state visual regression
//
// @parms: testname: string deviceType: string
// @returns: void
const accordionAlignDefaultVRValidation = (testname: string, deviceType: string) => {
    cy.get(Locators.statusSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.accordionComponent).should('be.visible')
    if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
    accordionVRValidation(testname ,deviceType, "accordion status")
  }

// validates accordion within Card component default state clickable state visual regression
//
// @parms: testname: string deviceType: string
// @returns: void
const accordioncCardDefaultVRValidation = (testname: string, deviceType: string) => {
    cy.get(Locators.statusSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.accordionComponent).should('be.visible')
    if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
    accordionVRValidation(testname ,deviceType, "accordion status")
  }

// validates accordion Group component default state clickable state visual regression
//
// @parms: testname: string deviceType: string
// @returns: void
const accordionGroupDefaultVRValidation = (testname: string, deviceType: string) => {
    cy.get(Locators.statusSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.accordionComponent).click().should('be.visible')
    if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
    accordionVRValidation(testname ,deviceType, "accordion status")
  }

// validates accordion controls visual regression
//
// @parms: testname: string 
// @returns: void
const accordionControlsVRValidation = (testname: string, deviceType: string) => {
    cy.get(Locators.accordionSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.accordionTypeSelectBox).select(Locators.columnLabel, { force: true });
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    accordionVRValidation(testname ,deviceType, "accordion controls")  
}

// validates Menu overall visual regression for desktop , mobile and tab
//
// @parms: testname: string,deviceType: string
// @returns: void
const accordionVisualRegressionValidation = (testname: string, deviceType: string) => {
    accordionDefaultVRValidation(testname, deviceType)
    accordionAlignDefaultVRValidation(testname, deviceType)
    accordioncCardDefaultVRValidation(testname, deviceType)
    accordionGroupDefaultVRValidation(testname, deviceType)

    if (deviceType === DEVICE_TYPE_DESKTOP) {
        accordionControlsVRValidation(testname, deviceType)
    }
  }

describe('Visual Regression Test For accordion Component', () => {
  it('Visit accordion component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit accordion component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit accordion component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit accordion component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_MOBILE);
    accordionVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit accordion component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit accordion component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit accordion component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit accordion component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_MOBILE);
    accordionVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit accordion component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit accordion component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit accordion component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit accordion component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_MOBILE);
    accordionVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })

})
