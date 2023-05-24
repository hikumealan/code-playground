import 'cypress-iframe';
import { Locators } from '../avatar.constants'
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

// Avatar component default state Visual regression validation
//
// @parms: testname: string
// @return: void
const defaultAvatarVRValidation = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.avatarComponent).should('be.visible')
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.avatarVR, testname, 'Scenario_01_Avatar_Default_Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// avatar component control section Visual regression validation
//
// @parms: testname: string
// @return: void
const avatarControlsVRValidation = (testname: string, deviceType: string) => {
  cy.get(Locators.avatarSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controltoggle).eq(1).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)

  compareScreenshot(Locators.avatarVR, testname, 'Scenario_Avatar_Avtar dark_state_Validation')
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }

  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controltoggle).eq(1).click()
  cy.iframe(Locators.iframe).find(Locators.controltoggle).eq(4).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)

  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)

  compareScreenshot(Locators.avatarVR, testname, 'Scenario_Avatar_Avtar name display_state_Validation')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controltoggle).eq(4).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  const variant = new Map([
    ['avatar-class-name', 'class'],
    ['avatar-image-src', 'image'],
    ['avatar-logo-icon', 'logo'],
    ['avatar-notification', 'test'],
    ['avatar-size', 'lg'],
    ['avatar-status', 'status'],
    ['user-name', 'NAME']
  ]);
  let idx;
  idx = 0;
  variant.forEach((value, key) => {
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.control).eq(idx).clear().type(value)
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    compareScreenshot(Locators.avatarVR, testname, `Scenario_Notification_Notification state_Validation ${key} ${idx}`)

    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.control).eq(idx).clear()
    idx++
  })
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.control).eq(6).clear().type('No Name')
  cy.get('[class="sto-ha8kg"]').eq(3).click({ force: true })
}

// avatar component visual regression for avatar size, status, image name , initial name , initial name notification, initial and logo name
//
// @parms: testname: string
// @return: void
const avatarExamplesVRValidation = (testname: string, deviceType: string) => {
  const avatarExamples = new Map([
    ['avatarSize', Locators.avatarSizeSideMenu],
    ['avatarStatus', Locators.avatarStatusSideMenu],
    ['avatarImageName', Locators.avatarImageNameSideMenu],
    ['avatarInitialName', Locators.avatarInitialNameSideMenu],
    ['avatarInitialNameNotification', Locators.avatarInitialNameNotifSideMenu],
    ['avatarInitial', Locators.avatarInitialSideMenu],
    ['avatarLogoName', Locators.avatrLogoNameSideMenu]
  ]);
  avatarExamples.forEach((value, key, idx) => {
    cy.get(value).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    if (deviceType !== DEVICE_TYPE_MOBILE) {
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
    compareScreenshot(Locators.avatarVR, testname, `Scenario_Avatar_default state validation for ${key} ${idx}`)
    if (deviceType !== DEVICE_TYPE_MOBILE) {
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
  })
}

// avatar component overall Visual regression validation for mobile tab and desktop
//
// @parms: testname: string
// @return: void
const avatarVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    defaultAvatarVRValidation(testname)
    avatarControlsVRValidation(testname, deviceType)
    avatarExamplesVRValidation(testname, deviceType)
  }
  else if (deviceType === DEVICE_TYPE_TAB) {
    defaultAvatarVRValidation(testname)
    avatarExamplesVRValidation(testname, deviceType)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    compareScreenshot(Locators.avatarVR, testname, 'Scenario_01_Avatar_Default_Validation_Mobile')
    avatarExamplesVRValidation(testname, deviceType)
  }
}

describe('Visual Regression Test For Avatar Component', () => {
  it('Visit Avatar component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Avatar component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Avatar component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Avatar component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_MOBILE);
    avatarVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Avatar component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Avatar component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Avatar component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Avatar component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_MOBILE);
    avatarVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Avatar component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Avatar component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Avatar component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Avatar component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_MOBILE);
    avatarVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
