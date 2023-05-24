import 'cypress-iframe';
import { Locators } from '../pagination.constants'
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

// Pagination component default state Visual regression validation
//
// @parms: testname: string
// @return: void
const defaultPaginationValidation = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.paginationComponent).should('be.visible')
  cy.frameLoaded(Locators.iframe);
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.paginationVR, testname, 'Scenario_01_Pagination_Default_Validation')
}

// Pagination next and previous clickable and disable visual regression validation
//
// @parms: testname: string
// @return: void
const PaginationClickabilityValidation = (testname: string) => {
  cy.iframe(Locators.iframe).find(Locators.paginationButton).eq(3).click()
  compareScreenshot(Locators.paginationVR, testname, 'Scenario_02_Pagination_last and next page disabled_Validation')
  cy.iframe(Locators.iframe).find(Locators.paginationButton).eq(0).click()
  compareScreenshot(Locators.paginationVR, testname, 'Scenario_03_Pagination_first and previous page disabled_Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// Pagination control visual regression validation
//
// @parms: testname: string
// @return: void
const paginationControlValidation = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.currentTextBox).clear().type(Locators.minimumValue)
  cy.iframe(Locators.iframe).find(Locators.maxTextBox).clear().type(Locators.maximumValue)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.paginationVR, testname, 'Scenario_04_Pagination_count_Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// Pagination  visual regression validation for mobile
//
// @parms: testname: string
// @return: void
const mobilePaginationVisualRegressionValidation = (testname: string) => {
  cy.log('mobile pagination')
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.paginationComponent).should('be.visible')
  compareScreenshot(Locators.paginationVR, testname, 'Scenario_01_Pagination_Default_Validation')
  cy.iframe(Locators.iframe).find(Locators.paginationButton).eq(3).click()
  compareScreenshot(Locators.paginationVR, testname, 'Scenario_02_Pagination_last and next page disabled_Validation')
  cy.iframe(Locators.iframe).find(Locators.paginationButton).eq(0).click()
  compareScreenshot(Locators.paginationVR, testname, 'Scenario_03_Pagination_first and previous page disabled_Validation')
}

// Pagination component overall visual regression validation
//
// @parms: testname: string,deviveType: string
// @return: void
const paginationVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    defaultPaginationValidation(testname)
    PaginationClickabilityValidation(testname)
    paginationControlValidation(testname)
  }
  else if (deviceType === DEVICE_TYPE_TAB) {
    defaultPaginationValidation(testname)
    PaginationClickabilityValidation(testname)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click()
    mobilePaginationVisualRegressionValidation(testname)
  }
}

describe('Visual Regression Test For Pagination Component', () => {
  it('Visit Pagination component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Pagination component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Pagination component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationVisualRegressionValidation('Test_03_Javascript_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Pagination component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_MOBILE);
    paginationVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Pagination component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Pagination component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Pagination component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationVisualRegressionValidation('Test_07_Angular_Tabpotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Pagination component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_MOBILE);
    paginationVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit Pagination component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Pagination component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit Pagination component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationVisualRegressionValidation('Test_11_React_TabPotrait', DEVICE_TYPE_TAB);
  })

  it('Visit Pagination component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_MOBILE);
    paginationVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
