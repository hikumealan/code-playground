import 'cypress-iframe';
import { Locators } from '../chip.constants'
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

// Validates chip component default visual regression
//
// @parms: testname: string
// @return: void
const chipDefaultVRValidation = (testname: string) => {
  cy.iframe(Locators.iframe).find(Locators.chip).eq(0).should('be.visible')
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.chipVR, testname, 'Scenario_01_Chip_Default_Desktop_Validation')
  cy.iframe(Locators.iframe).find(Locators.chip).eq(0).click()
  compareScreenshot(Locators.chipVR, testname, 'Scenario_02_Chip__Default_Desktop_Clickability_Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// Validates chip component control visual regression
//
// @parms: testname: string, deviceType: string
// @return: void
const chipControlVRValodation = (testname: string, deviceType: string) => {
  [Locators.chipDisabled, Locators.chipEnabled, Locators.chipError, Locators.chipErrorFalse, Locators.chipRemovable, Locators.chipErrorFalse,
    Locators.chipSuccess, Locators.chipSuccessFalse].forEach(
    (chipControlStates, idx) => {
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(chipControlStates).click()
      clickElementIdentifiedByLocator(CommonLocators.canvas, false)
      if (deviceType !== DEVICE_TYPE_MOBILE) {
        clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
      }
      compareScreenshot(Locators.chipVR, testname, `Scenario_Chip_controls_state_validation ${idx}`)
      if (deviceType !== DEVICE_TYPE_MOBILE) {
        clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
      }
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(chipControlStates).click()
    }
  )
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.chipText).clear().type('Chip Text')
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.chipVR, testname, 'Scenario_11_Chip_Text_Validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates chip group component default visual regression
//
// @parms: testname: string, deviceType: string
// @return: void
const chipGroupDefaultVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.chipGroupSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.chipVR, testname, 'Scenario_12_Chip_Group_DefaultState_Validation');
  ['chip1 Clickable state', 'chip1 Clickable state', 'chip1 Clickable state'].forEach(
    (chipControlStates, idx) => {
      cy.iframe(Locators.iframe).find(Locators.chip).eq(idx).click()
      compareScreenshot(Locators.chipVR, testname, `Scenario__Chip__Group_Clickable_State_Validation ${chipControlStates}${idx}`)
    }
  )
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates chip variant component default visual regression
//
// @parms: testname: string, deviceType: string
// @return: void
const chipVariantDefaultVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.chipVariantSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.chipVR, testname, 'Scenario_16_Chip_Variant_DefaultState_Validation')
  cy.iframe(Locators.iframe).find(Locators.chip).eq(0).click()
  compareScreenshot(Locators.chipVR, testname, 'Scenario_17_Chip_Default_Clickable_Validation')
  cy.iframe(Locators.iframe).contains('Success').eq(0).click()
  compareScreenshot(Locators.chipVR, testname, 'Scenario_18_Chip_Success_Clickable_Validation')
  cy.iframe(Locators.iframe).find(Locators.chipButtonError).eq(3)
  compareScreenshot(Locators.chipVR, testname, 'Scenario_19_Chip_Error_Clickable_Validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates chip dark theme component default visual regression
//
// @parms: testname: string, deviceType: string
// @return: void
const chipDarkThemeDefaultVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.chipDarkThemeSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.chipVR, testname, 'Scenario_20_Chip_DarkTheme_DefaultState_Validation')
  cy.iframe(Locators.iframe).find(Locators.chip).eq(0).click()
  compareScreenshot(Locators.chipVR, testname, 'Scenario_21_Chip_DarkTheme_ClickableState_Validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates chip removable component default visual regression
//
// @parms: testname: string, deviceType: string
// @return: void
const chipRemovableDefaultVRValidation = (testname: any, deviceType: string) => {
  cy.get(Locators.chipRemovableSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.chipVR, testname, 'Scenario_22_Chip_Removable_DefaultState_Validation')
  cy.iframe(Locators.iframe).find(Locators.removableCheckboxChecked).click({ force: true })
  compareScreenshot(Locators.chipVR, testname, 'Scenario_23_Chip_Remove_Checked_Validation')
  cy.iframe(Locators.iframe).find(Locators.removableCheckboxChecked).click({ force: true })
  compareScreenshot(Locators.chipVR, testname, 'Scenario_24_Chip_Remove_unchecked_Validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates chip component overall visual regression for tab mobile and desktop
//
// @parms: testname: string, deviceType: string
// @return: void
const chipVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    chipDefaultVRValidation(testname)
    chipControlVRValodation(testname, deviceType)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    compareScreenshot(Locators.chipVR, testname, 'Scenario_01_chip_Mobile_Default_Validation')
    cy.iframe(Locators.iframe).find(Locators.chip).eq(0).click()
    compareScreenshot(Locators.chipVR, testname, 'Scenario_02_Chip_Clickability_Validation')
  }
  else if (deviceType === DEVICE_TYPE_TAB) {
    chipDefaultVRValidation(testname)
  }
  chipGroupDefaultVRValidation(testname, deviceType)
  chipVariantDefaultVRValidation(testname, deviceType)
  chipDarkThemeDefaultVRValidation(testname, deviceType)
  chipRemovableDefaultVRValidation(testname, deviceType)
}

describe('Visual Regression Test For Chip Test', () => {
  it('Visit Chip component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipVisualRegressionValidation('Test_01_Chip_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Chip component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipVisualRegressionValidation('Test_02_Chip_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Chip component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipVisualRegressionValidation('Test_03_Chip_Javascript_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Chip component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_MOBILE);
    chipVisualRegressionValidation('Test_04_Chip_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Chip component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipVisualRegressionValidation('Test_05_Chip_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Chip component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipVisualRegressionValidation('Test_06_Chip_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Chip component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipVisualRegressionValidation('Test_07_Chip_Angular_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Chip component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_MOBILE);
    chipVisualRegressionValidation('Test_08_Chip_Angular_Mobile', DEVICE_TYPE_MOBILE)
  })

  it('Visit Chip component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipVisualRegressionValidation('Test_09_Chip_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Chip component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipVisualRegressionValidation('Test_10_Chip_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Chip component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipVisualRegressionValidation('Test_11_Chip_React_TabPotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Chip component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_MOBILE);
    chipVisualRegressionValidation('Test_12_Chip_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
