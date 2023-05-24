import 'cypress-iframe';
import { Locators } from '../toggle.constants'
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

// validates toggle default state clickable state visual regression
//
// @parms: testname: string testname: string
// @returns: void
const toggleDefaultVRValidation = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.toggleSlider).should('be.visible')
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_01_Toggle_Default_Validation');
  cy.iframe(Locators.iframe).find(Locators.toggleSlider).click()
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_02_Toggle_click_Validation');
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// validates toggle disabled state  visual regression
//
// @parms: testname: string testname: string
// @returns: void
const toggleDisabledVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.toggleDisabledSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.toggleSlider).should('be.visible')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_03_Toggle_Disabled State_Validation');
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates toggle with label visual regression
//
// @parms: testname: string testname: string
// @returns: void
const toggleWithLabelVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.toggleWithLabelSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.toggleSlider).should('be.visible')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_04_Toggle With Label_Default State_Validation');
  cy.iframe(Locators.iframe).find(Locators.toggleSlider).click()
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_05_Toggle With Label_Clicked State_Validation');
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates toggle type button visual regression
//
// @parms: testname: string testname: string
// @returns: void
const toggleTypeButtonVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.toggleButtonSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_05_Toggle type button_Default State_Validation');
  cy.iframe(Locators.iframe).find(Locators.toggleButton).click()
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_06_Toggle type button_Clicked State_Validation');
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates toggle switch size visual regression
//
// @parms: testname: string testname: string
// @returns: void
const toggleSwitchsizeVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.toggleSwitchSizeSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_07_Toggle switch size_Default State_Validation');
  for (let idx = 0; idx <= 4; idx++) {
    cy.iframe(Locators.iframe).find(Locators.toggleSlider).eq(idx).click()
    compareScreenshot(Locators.toggleVR, testname, `Scenario_Toggle type button_Clicked State_Validation ${idx}`);
    cy.iframe(Locators.iframe).find(Locators.toggleSlider).eq(idx).click()
  }
  for (let id = 0; id <= 4; id++) {
    cy.iframe(Locators.iframe).find(Locators.toggleSlider).eq(id).click()
  }
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_07_Toggle switch size all buttons_Clicked State_Validation');
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates toggle button size visual regression
//
// @parms: testname: string testname: string
// @returns: void
const toggleButtonSizeVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.toggleButtonSizeSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_08_Toggle button size_Default State_Validation');
  for (let idx = 0; idx <= 4; idx++) {
    cy.iframe(Locators.iframe).find(Locators.toggleButtonSlider).eq(idx).click({ force: true })
    compareScreenshot(Locators.toggleVR, testname, `Scenario_Toggle button size_Clicked State_Validation ${idx}`);
    cy.iframe(Locators.iframe).find(Locators.toggleButtonSlider).eq(idx).click({ force: true })
  }
  for (let id = 0; id <= 4; id++) {
    cy.iframe(Locators.iframe).find(Locators.toggleButtonSlider).eq(id).click({ force: true })
  }
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_09_Toggle button size all buttons_Clicked State_Validation');
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates toggle controls visual regression
//
// @parms: testname: string
// @returns: void
const toggleControlsVRValidation = (testname: string) => {
  cy.get(Locators.toggleSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlDisabled).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_10_Disabled state toggle controls validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlDisabled).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_11_Enabled state toggle controls validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlLabelActive).clear().type(Locators.labelActiveLabel)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_12_Label Active toggle control validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlLabelActive).clear()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_13_Default_Label Active toggle control validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlLabelInActive).clear().type(Locators.labelInactiveLabel)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_14_Label InActive toggle control validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlLabelInActive).clear()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_15_Default_Label InActive toggle control validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlToggled).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_16_toggle true control validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlToggled).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.toggleVR, testname, 'Scenario_17_Default_toggle false control validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  const size = new Map([
    [Locators.smallLabel, Locators.smallValue],
    [Locators.mediumLabel, Locators.mediumValue],
    [Locators.largeLabel, Locators.largeValue],
    [Locators.extraLargeLabel, Locators.extraLargeValue],
    [Locators.extraSmallLabel, Locators.extraSmallvalue]
  ]);
  size.forEach((value, key) => {
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.controlSize).select(value)
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    compareScreenshot(Locators.toggleVR, testname, `Scenario_Default_toggle sizes control validation for ${key} ${value}`)
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  })
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlSize).select(Locators.mediumValue)
  const type = new Map([
    [Locators.typeSwitchLabel, Locators.switchValue],
    [Locators.typeButtonLabel, Locators.buttonValue]
  ]);
  type.forEach((value, key) => {
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.controlType).select(value)
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    compareScreenshot(Locators.toggleVR, testname, `Scenario_Default_toggle types control validation for ${key} ${value}`)
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  })
}

// validates Toggle overall visual regression for desktop , mobile and tab
//
// @parms: testname: string,deviceType: string
// @returns: void
const textAreaVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    toggleDefaultVRValidation(testname)
    toggleControlsVRValidation(testname)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click({ force: true })
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.toggleSlider).should('be.visible')
    compareScreenshot(Locators.toggleVR, testname, 'Scenario_01_Toggle_Default_Validation_Mobile');
    cy.iframe(Locators.iframe).find(Locators.toggleSlider).click()
    compareScreenshot(Locators.toggleVR, testname, 'Scenario_02_Toggle_click_Validation_Mobile');
  }

  toggleDisabledVRValidation(testname, deviceType)
  toggleWithLabelVRValidation(testname, deviceType)
  toggleTypeButtonVRValidation(testname, deviceType)
  toggleSwitchsizeVRValidation(testname, deviceType)
  toggleButtonSizeVRValidation(testname, deviceType)
}

describe('Visual Regression Test For Toggle Component', () => {
  it('Visit Toggle component__Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toggle component__Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toggle component__Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toggle component__Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_MOBILE);
    textAreaVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Toggle component___Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toggle component__Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toggle component__Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toggle component__Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_MOBILE);
    textAreaVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Toggle component__Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toggle component__Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toggle component__Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toggle component__Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_MOBILE);
    textAreaVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
