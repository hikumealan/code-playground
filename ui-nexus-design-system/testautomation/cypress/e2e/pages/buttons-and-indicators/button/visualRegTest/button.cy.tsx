import 'cypress-iframe';
import { Locators } from '../button.constants'
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

// Validates button default state  visual regression
//
// @parms: testname: string, deviceType: string
// @returns: void
const buttonDefaultVRValidation = (testname: string) => {
  cy.iframe(Locators.iframe).find(Locators.button).eq(0).should('be.visible')
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.buttonVR, testname, 'Scenario_01_Button visual regression validation')
  cy.iframe(Locators.iframe).find(Locators.buttonComponent).click()
  compareScreenshot(Locators.buttonVR, testname, 'Scenario_02_Button Click visual regression validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// Validates button size component visual regression
//
// @parms: testname: string, deviceType: string
// @returns: void
const buttonSizeVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.buttonSizeSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.buttonVR, testname, 'Scenario_04_Button Size default state visual regression validation');
  [Locators.mediumButton, Locators.largeButton, Locators.fluidButton].forEach(
    (buttonVariants, idx) => {
      cy.iframe(Locators.iframe).find(buttonVariants).eq(0).click()
      compareScreenshot(Locators.buttonVR, testname, `Scenario_Button clickable state visual regression validation ${idx}`)
    }
  )
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates button state vr component visual regression
//
// @parms: testname: string, deviceType: string
// @returns: void
const buttonStateVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.buttonStateSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.buttonVR, testname, 'Scenario_08_Button state variant default state visual regression validation');
  [Locators.defaultButton, Locators.primaryButton, Locators.warnButton].forEach(
    (buttonStates, idx) => {
      cy.iframe(Locators.iframe).find(buttonStates).eq(0).click()
      compareScreenshot(Locators.buttonVR, testname, `Scenario_Button state variant clickable state visual regression validation ${idx}`)
    }
  )
  cy.iframe(Locators.iframe).find(Locators.link).eq(0).rightclick()
  compareScreenshot(Locators.buttonVR, testname, 'Scenario_12_Button state variant_Link clickable state visual regression validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates button dark theme component visual regression
//
// @parms: testname: string, deviceType: string
// @returns: void
const buttonDarkThemeVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.darkThemeSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.buttonVR, testname, 'Scenario_13_Dark Theme default state visual regression validation');
  [Locators.darkThemeDefault, Locators.darkThemePrimary, Locators.darkThemeDanger].forEach(
    (darkThemeStates, idx) => {
      cy.iframe(Locators.iframe).find(darkThemeStates).eq(0).click()
      compareScreenshot(Locators.buttonVR, testname, `Scenario_DarkTheme clickable state visual regression validation ${idx}`)
    }
  )
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates button disabled component visual regression
//
// @parms: testname: string, deviceType: string
// @returns: void
const buttonDisabledVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.disabledSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.buttonVR, testname, 'Scenario_17_Disabled button default state visual regression validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates button floating component visual regression
//
// @parms: testname: string, deviceType: string
// @returns: void
const buttonFloatingButtonVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.floatingSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.buttonVR, testname, 'Scenario_18_Floating button default state visual regression validation');
  [Locators.settingsIcon, Locators.settingsFloatingIcon].forEach(
    (floatingbuttonStates, idx) => {
      cy.iframe(Locators.iframe).find(floatingbuttonStates).click()
      compareScreenshot(Locators.buttonVR, testname, `Scenario_Floating icon clickable state visual regression validation ${idx}`)
    }
  )
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates button tabbed component visual regression
//
// @parms: testname: string, deviceType: string
// @returns: void
const buttonTabbedVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.tabbedSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.buttonVR, testname, 'Scenario_21_Tabbed button default state visual regression validation');
  [Locators.hideButton, Locators.onButton].forEach(
    (tabbedbuttonStates, idx) => {
      cy.iframe(Locators.iframe).find(tabbedbuttonStates).eq(0).click()
      compareScreenshot(Locators.buttonVR, testname, `Scenario_Tabbed On and hide button Clickable state visual regression validation ${idx}`)
    }
  );
  [Locators.hideButton, Locators.onButton].forEach(
    (tabbedbutton, idx) => {
      cy.iframe(Locators.iframe).find(tabbedbutton).eq(1).click()
      compareScreenshot(Locators.buttonVR, testname, `Scenario_22_Tabbed off Show button Clickable state visual regression validation${idx}`)
    }
  )
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates button  component visual regression for desktop, mobile,tab
//
// @parms: testname: string, deviceType: string
// @returns: void
const buttonVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    buttonDefaultVRValidation(testname)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    compareScreenshot(Locators.buttonVR, testname, 'Scenario_01_Button_Mobile_Default_Validation')
    cy.iframe(Locators.iframe).find(Locators.buttonComponent).click()
    compareScreenshot(Locators.buttonVR, testname, 'Scenario_02_Button Click Mobile visual regression validation')
  }
  buttonSizeVRValidation(testname, deviceType)
  buttonStateVRValidation(testname, deviceType)
  buttonDarkThemeVRValidation(testname, deviceType)
  buttonDisabledVRValidation(testname, deviceType)
  buttonFloatingButtonVRValidation(testname, deviceType)
  buttonTabbedVRValidation(testname, deviceType)
}

describe('Visual Regression Test For Button Component', () => {
  it('Visit button component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonVR, DEVICE_TYPE_DESKTOP);
    buttonVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit button component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonVR, DEVICE_TYPE_DESKTOP);
    buttonVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit button component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonVR, DEVICE_TYPE_DESKTOP);
    buttonVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit button component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonVR, DEVICE_TYPE_MOBILE);
    buttonVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit button component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonVR, DEVICE_TYPE_DESKTOP);
    buttonVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit button component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonVR, DEVICE_TYPE_DESKTOP);
    buttonVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit button component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonVR, DEVICE_TYPE_DESKTOP);
    buttonVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit button component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonVR, DEVICE_TYPE_MOBILE);
    buttonVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit button component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonVR, DEVICE_TYPE_DESKTOP);
    buttonVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit button component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonVR, DEVICE_TYPE_DESKTOP);
    buttonVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit button component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonVR, DEVICE_TYPE_DESKTOP);
    buttonVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_DESKTOP);
  })

  it('Visit button component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonVR, DEVICE_TYPE_MOBILE);
    buttonVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
