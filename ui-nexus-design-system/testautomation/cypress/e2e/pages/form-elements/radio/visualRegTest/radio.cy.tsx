import 'cypress-iframe';
import { Locators } from '../radio.constants'
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

// Validates radio default visual regression
//
// @parms: testname: string
// @returns: void
const radioDefaultVRValidation = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.radioOption).eq(0).should('be.visible')
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.radioVR, testname, 'Scenario_01_Radio_Default_Validation')
  cy.iframe(Locators.iframe).find(Locators.radioOptionRadioButton).eq(0).click({ force: true })
  compareScreenshot(Locators.radioVR, testname, 'Scenario_02_RadioButton option 1_Checked_Validation')
  cy.iframe(Locators.iframe).find(Locators.radioOptionRadioButton).eq(1).click({ force: true })
  compareScreenshot(Locators.radioVR, testname, 'Scenario_03_RadioButton option 2_Checked_Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// Validates radio controls visual regression
//
// @parms: testname: string
// @returns: void
const radioControlsVRValidation = (testname: string, deviceType: string) => {
  ['Radio Checked True', 'Radio Checked False'].forEach(
    (radioCheckedState, idx) => {
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(Locators.ToggleButton).eq(0).click({force:true})
      clickElementIdentifiedByLocator(CommonLocators.canvas, false)
      if (deviceType !== DEVICE_TYPE_MOBILE) {
        clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
      }
      compareScreenshot(Locators.radioVR, testname, `Scenario_Radio_Validation ${radioCheckedState}${idx}`)
      if (deviceType !== DEVICE_TYPE_MOBILE) {
        clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
      }
    }
  );
  ['Radio Disabled True', 'Radio Disabled False'].forEach(
    (radioDisabledState, idx) => {
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(Locators.ToggleButton).eq(1).click({force:true})
      clickElementIdentifiedByLocator(CommonLocators.canvas, false)
      if (deviceType !== DEVICE_TYPE_MOBILE) {
        clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
      }
      compareScreenshot(Locators.radioVR, testname, `Scenario_Radio_Validation ${radioDisabledState}${idx}`)
      if (deviceType !== DEVICE_TYPE_MOBILE) {
        clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
      }
    }
  )
}

// Validates radio Group visual regression
//
// @parms: testname: string
// @returns: void
const radioGroupVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.radioGroupSideMenu).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.radioVR, testname, 'Scenario_04_Radio_Group_Default State_Validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  for (let idx = 0; idx <= 2; idx++) {
    if (deviceType !== DEVICE_TYPE_MOBILE) {
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
    cy.iframe(Locators.iframe).find(Locators.groupRadioButton).eq(idx).click({ force: true })
    compareScreenshot(Locators.radioVR, testname, `Scenario_Radio_Group_Clicked State_Validation ${idx}`)
    if (deviceType !== DEVICE_TYPE_MOBILE) {
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
  }
}

// Validates radio with icon visual regression
//
// @parms: testname: string
// @returns: void
const radioWithIconVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.radioWithIconSideMenu).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.radioVR, testname, 'Scenario_05_Radio_With Icon_Default State_Validation')
  cy.iframe(Locators.iframe).find(Locators.withIconRadioButton).eq(0).click({ force: true })
  compareScreenshot(Locators.radioVR, testname, 'Scenario_06_Radio_With Icon_option1_checked_Default State_Validation')
  cy.iframe(Locators.iframe).find(Locators.withIconRadioButton).eq(1).click({ force: true })
  compareScreenshot(Locators.radioVR, testname, 'Scenario_07_Radio_With Icon_option2_checked_Default State_Validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates radio variants visual regression
//
// @parms: testname: string
// @returns: void
const radioVariantsVRValidation = (testname: string, deviceType:string) => {
  cy.get(Locators.radioVariantsSideMenu).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.radioVR, testname, 'Scenario_08_Radio_Variants_Default State_Validation')
  cy.iframe(Locators.iframe).find(Locators.variantsOptionRadioButton).eq(0).click({ force: true })
  compareScreenshot(Locators.radioVR, testname, 'Scenario_09_Radio_Variants_Default Checked State_Validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates radio group disabled visual regression
//
// @parms: testname: string
// @returns: void
const radioGroupDisabledVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.radioGroupDisabledSideMenu).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.radioVR, testname, 'Scenario_10_Radio_Group disabled_Default State_Validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates radio disabled selected visual regression
//
// @parms: testname: string
// @returns: void
const radioDisabledSelectedVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.radioDisabledSelectedSideMenu).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.radioVR, testname, 'Scenario_11_Radio_Disabled selected_Default State_Validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// Validates radio  visual regression for mobile desktop and tab
//
// @parms: testname: string
// @returns: void
const radioVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    radioDefaultVRValidation(testname)
    radioControlsVRValidation(testname, deviceType)
  }
  else if (deviceType === DEVICE_TYPE_TAB) {
    radioDefaultVRValidation(testname)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click({ force: true })
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    compareScreenshot(Locators.radioVR, testname, 'Scenario_01_Radio_Default_Mobile_Validation')
    cy.iframe(Locators.iframe).find(Locators.radioOptionRadioButton).eq(0).click({ force: true })
    compareScreenshot(Locators.radioVR, testname, 'Scenario_02_RadioButton option 1_Checked__Mobile_Validation')
    cy.iframe(Locators.iframe).find(Locators.radioOptionRadioButton).eq(1).click({ force: true })
    compareScreenshot(Locators.radioVR, testname, 'Scenario_03_RadioButton option 2_Checked_Mobile_Validation')
  }
  radioGroupVRValidation(testname, deviceType)
  radioWithIconVRValidation(testname, deviceType)
  radioVariantsVRValidation(testname, deviceType)
  radioGroupDisabledVRValidation(testname, deviceType)
  radioDisabledSelectedVRValidation(testname, deviceType)
}

describe('Visual Regression Test For Radio Component', () => {
  it('Visit radio component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit radio component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit radio component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit radio component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_MOBILE);
    radioVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit radio component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit radio component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit radio component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit radio component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_MOBILE);
    radioVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit radio component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit radio component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit radio component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_TAB);
  })

  it('Visit radio component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
