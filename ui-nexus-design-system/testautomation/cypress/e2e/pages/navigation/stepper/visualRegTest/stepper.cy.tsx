import 'cypress-iframe';
import { Locators } from '../stepper.constants'
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

// validates stepper default state clickable state visual regression
//
// @parms: testname: string deviceType: string
// @returns: void
const stepperVRValidation = (testname: string, deviceType: string, componentType: string) => {
  compareScreenshot(Locators.stepperVR, testname, 'Scenario_01_Stepper_Default_Validation for ' +componentType);
  cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(0).click({force:true})
  compareScreenshot(Locators.stepperVR, testname, 'Scenario_02_source Data_clicked state_Validation for ' +componentType);
  cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(1).click({force:true})
  compareScreenshot(Locators.stepperVR, testname, 'Scenario_03_Data exploration_clicked state_Validation for ' +componentType);
  cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(2).click({force:true})
  compareScreenshot(Locators.stepperVR, testname, 'Scenario_04_Training_clicked state_Validation for ' +componentType);
  cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(3).click({force:true})
  compareScreenshot(Locators.stepperVR, testname, 'Scenario_05_Test and analysis_clicked state_Validation for ' +componentType);
  cy.iframe(Locators.iframe).find(Locators.featureSetComponentLabel).click({force:true})
  compareScreenshot(Locators.stepperVR, testname, 'Scenario_06_Feature sets_clicked state_Validation for ' +componentType);
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates stepper default state clickable state visual regression
//
// @parms: testname: string deviceType: string
// @returns: void
const stepperDefaultVRValidation = (testname: string, deviceType: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.stepperComponent).should('be.visible')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  stepperVRValidation(testname,deviceType, "stepper")
}

// validates stepper status component default state clickable state visual regression
//
// @parms: testname: string deviceType: string
// @returns: void
const stepperStatusDefaultVRValidation = (testname: string, deviceType: string) => {
    cy.get(Locators.statusSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.stepperComponent).should('be.visible')
    if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
    stepperVRValidation(testname ,deviceType, "stepper status")
  }

// validates stepper controls visual regression
//
// @parms: testname: string 
// @returns: void
const stepperControlsVRValidation = (testname: string, deviceType: string) => {
    cy.get(Locators.stepperSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.stepperTypeSelectBox).select(Locators.columnLabel, { force: true });
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    stepperVRValidation(testname ,deviceType, "stepper controls")  
}

// validates Menu overall visual regression for desktop , mobile and tab
//
// @parms: testname: string,deviceType: string
// @returns: void
const stepperVisualRegressionValidation = (testname: string, deviceType: string) => {
    stepperDefaultVRValidation(testname, deviceType)
    stepperStatusDefaultVRValidation(testname, deviceType)
    if (deviceType === DEVICE_TYPE_DESKTOP) {
        stepperControlsVRValidation(testname, deviceType)
    }
  }

describe('Visual Regression Test For Stepper Component', () => {
  it('Visit stepper component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit stepper component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit stepper component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit stepper component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_MOBILE);
    stepperVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit stepper component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit stepper component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit stepper component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit stepper component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_MOBILE);
    stepperVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit stepper component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit stepper component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit stepper component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit stepper component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_MOBILE);
    stepperVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })

})
