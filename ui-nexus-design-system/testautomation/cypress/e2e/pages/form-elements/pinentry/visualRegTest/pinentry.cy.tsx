import 'cypress-iframe';
import { Locators } from '../pinentry.constants'
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

// Validates pinentry default visual regression
//
// @parms: testname: string,deviceType: string
// @returns: void
const pinentryDefaultVRValidation = (testname: string, deviceType: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.pinentryComponent).should('be.visible')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.hide)
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.pinentryVR, testname, 'Scenario_01_Pinentry_Default_Validation');
  for (let idx = 0; idx < 3; idx++) {
    cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idx).click({force:true})
    compareScreenshot(Locators.pinentryVR, testname, `Scenario_Pinentry_with Focused State_Validation ${idx}`)
    cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idx).type('1')
    compareScreenshot(Locators.pinentryVR, testname, `Scenario_Pinentry_with values_Validation ${idx}`)
    cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idx).clear()
    compareScreenshot(Locators.pinentryVR, testname, `Scenario_Pinentry_with values_Cleared_Validation ${idx}`)
  }
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates pinentry control visual regression
//
// @parms: testname: string
// @returns: void
const pinentryControlVRValidation = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.toggle).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.pinentryVR, testname, 'Scenario_03_Pinentry_Disabled true_Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.toggle).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.lengthTextbox).clear().type(Locators.lengthMaxInputValue)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.pinentryVR, testname, 'Scenario_04_Pinentry_Length_Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.lengthTextbox).clear().type(Locators.lengthMidInputValue);
  [Locators.AttributeTextValue, Locators.AttributePasswordValue, Locators.AttributeTelValue].forEach(
    (pinentryTypes, idx) => {
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(Locators.type).select(pinentryTypes)
      clickElementIdentifiedByLocator(CommonLocators.canvas, false)
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
      compareScreenshot(Locators.pinentryVR, testname, `Scenario_Pinentry_type_Validation ${pinentryTypes}${idx}`)
      for (let idxPos = 0; idxPos < 3; idxPos++) {
        cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idxPos).type(Locators.lengthMinInputValue)
      }
      compareScreenshot(Locators.pinentryVR, testname, `Scenario_Pinentry_text value filled_Validation ${pinentryTypes}${idx}`)
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
  )
}

// Validates pinentry disabled component visual regression
//
// @parms: testname: string,deviceType: string
// @returns: void
const pinentryDisabldVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.disabledSideMenu).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.pinentryVR, testname, 'Scenario_11_Pinentry_Disabled state validation_Validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates pinentry with length component visual regression
//
// @parms: testname: string,deviceType: string
// @returns: void
const pinentryWithLengthVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.withLengthSideMenu).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.pinentryVR, testname, 'Scenario_16_Pinentry_custom length default state validation');
  for (let idx = 0; idx < 6; idx++) {
    cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idx).click({force:true})
    compareScreenshot(Locators.pinentryVR, testname, `Scenario_Pinentry_custom length_Focused state_Validation ${idx}`)
    cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idx).type('1')
    compareScreenshot(Locators.pinentryVR, testname, `Scenario_Pinentry_custom length state_Value Entered_Validation ${idx}`)
    cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idx).clear()
    compareScreenshot(Locators.pinentryVR, testname, `Scenario_Pinentry_custom length state_clear_Validation ${idx}`)
  }
  compareScreenshot(Locators.pinentryVR, testname, 'Scenario_Pinentry_custom length state_Allclear_Validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates pinentry visual regression for desktop mobile and tab
//
// @parms: testname: string,deviceType: string
// @returns: void
const pinentryVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    pinentryDefaultVRValidation(testname, deviceType)
    pinentryControlVRValidation(testname)
  }
  else if (deviceType === DEVICE_TYPE_TAB) {
    pinentryDefaultVRValidation(testname, deviceType)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click({force:true})
    pinentryDefaultVRValidation(testname, deviceType)
  }
  pinentryDisabldVRValidation(testname, deviceType)
  pinentryWithLengthVRValidation(testname, deviceType)
}

describe('Visual Regression Test For Pin Entry Component', () => {
  it('Visit pinentry component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit pinentry component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit pinentry component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit pinentry component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_MOBILE);
    pinentryVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit pinentry component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit pinentry component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit pinentry component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit pinentry component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_MOBILE);
    pinentryVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit pinentry component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit pinentry component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit pinentry component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_TAB);
  })

  it('Visit pinentry component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
