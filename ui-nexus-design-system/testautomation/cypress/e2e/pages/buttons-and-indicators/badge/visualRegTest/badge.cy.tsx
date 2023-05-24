import 'cypress-iframe'
import { Locators } from '../badge.constants'
import { CommonLocators } from '../../../../constants/locators'
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
}
  from '../../../../constants/constants';
import { selectSBFramework, compareScreenshot, clickElementIdentifiedByLocator } from '../../../../utils/functions'

// Validates badge controls
//
// @params: testname: string
//
// @returns: void
//
const badgeControls = (testname: string) => {
  ['Success', 'Error', 'Warning', 'Default'].forEach(
    (variant, idx) => {
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(Locators.variant).select(variant.toLowerCase())
      clickElementIdentifiedByLocator(CommonLocators.canvas, false)
      cy.get(Locators.goToFullScreen).eq(1).click({ force: true })
      compareScreenshot(Locators.badgeComponent, testname, `Scenario_${idx + 3}_${variant}_Badge_Validation`)
      clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
  );
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.variant).select(Locators.variantDefault)
  cy.iframe(Locators.iframe).find(Locators.label).clear().type(Locators.defaultText)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.get(Locators.goToFullScreen).eq(1).click({ force: true })
  cy.log('FullScreen clicked successfully!!')
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_06 Badge Label validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// Validates badge component's look and feel
//
// @params: testname: string
//
// @returns: void
//
const badgeAppearance = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.get(Locators.appearence).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.get(Locators.goToFullScreen).eq(1).click({ force: true })
  cy.log('FullScreen clicked successfully!!')
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_07 Badge Appearance')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  cy.log('FullScreen closed successfully!!')
}

// Validates badge component - example -Button overlay - look and feel
//
// @params: testname: string
//
// @returns: void
//
const badgeButtonOverlay = (testname: string) => {
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.get(Locators.overlay).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.get(Locators.goToFullScreen).eq(1).click({ force: true })
  cy.log('FullScreen clicked successfully!!')
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_08 Badge Button Overlay')
  cy.iframe(Locators.iframe).find(Locators.Button).click()
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_10 clickable validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
}

// Validates badge component - example -Button icon overlay - look and feel
//
// @params: testname: string
//
// @returns: void
//
const badgeIconOverlay = (testname: string) => {
  cy.get(Locators.iconOverlay).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.get(Locators.goToFullScreen).eq(1).click({ force: true })
  cy.log('FullScreen clicked successfully!!')
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_11 icon overlay validation')
}

// Visual regression test for badge component in Tablet view
//
// @params: testname: string
//
// @returns: void
//
const tabBadgeVisualRegressionValidation = (testname: string) => {
  cy.iframe(Locators.iframe).find(Locators.badge).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.defaultText)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_01_Badge_Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  cy.get(Locators.appearence).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.get(Locators.goToFullScreen).eq(1).click({ force: true })
  cy.log('FullScreen clicked successfully!!')
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_02 Badge Appearance')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  cy.log('FullScreen closed successfully!!')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.get(Locators.buttonOverlay).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.get(Locators.goToFullScreen).eq(1).click({ force: true })
  cy.log('FullScreen clicked successfully!!')
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_03 Badge Button Overlay')
  cy.iframe(Locators.iframe).find(Locators.Button).click()
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_05 clickable validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  cy.get(Locators.iconOverlay).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.get(Locators.goToFullScreen).eq(1).click({ force: true })
  cy.log('FullScreen clicked successfully!!')
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_06 icon overlay validation')
};

// Visual regression test for badge component in Mobile view
//
// @params: testname: string
//
// @returns: void
//
const mobileBadgeVisualRegressionValidation = (testname: string) => {
  cy.iframe(Locators.iframe).find(Locators.badge).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.defaultText)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_01_Badge_Validation')
  cy.get('#component-buttons-and-indicators-badge').click()
  cy.log('Badge component selected successfully!!')
  cy.get(Locators.appearence).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_02 Badge Appearance')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.get(Locators.buttonOverlay).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_03 Badge Button Overlay')
  cy.iframe(Locators.iframe).find(Locators.Button).click()
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_05 clickable validation')
  cy.get(Locators.iconOverlay).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_06 icon overlay validation')
};

// Visual regression test for badge component in Desktop view
//
// @params: testname: string
//
// @returns: void
//
const badgeVisualRegressionValidation = (testname: string) => {
  cy.iframe(Locators.iframe).find(Locators.badge).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.defaultText)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.hide)
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  compareScreenshot(Locators.badgeComponent, testname, 'Scenario_01_Badge_Validation')
  clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  badgeControls(testname)
  badgeAppearance(testname)
  badgeButtonOverlay(testname)
  badgeIconOverlay(testname)
};

describe('Visual Regression Test for Badge component', () => {
  it('Visit Badge component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    badgeVisualRegressionValidation('Test_01_Javascript_Desktop');
  })

  it('Visit Badge component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    badgeVisualRegressionValidation('Test_02_Javascript_TabLandscape');
  })

  it('Visit Badge component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    tabBadgeVisualRegressionValidation('Test_03_Javascript_Tabportrait');
  })

  it('Visit Badge component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_MOBILE);
    mobileBadgeVisualRegressionValidation('Test_04_Javascript_Mobile');
  })

  it('Visit Badge component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    badgeVisualRegressionValidation('Test_05_Angular_Desktop');
  })

  it('Visit Badge component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    badgeVisualRegressionValidation('Test_06_Angular_TabLandscape');
  })

  it('Visit Badge component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    tabBadgeVisualRegressionValidation('Test_07_Angular_Tabportrait');
  })

  it('Visit Badge component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_MOBILE);
    mobileBadgeVisualRegressionValidation('Test_08_Angular_Mobile');
  })

  it('Visit Badge component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    badgeVisualRegressionValidation('Test_09_React_Desktop');
  })

  it('Visit Badge component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    badgeVisualRegressionValidation('Test_10_React_TabLandscape');
  })

  it('Visit Badge component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    tabBadgeVisualRegressionValidation('Test_11_React_Tabportrait');
  })

  it('Visit Badge component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_MOBILE);
    mobileBadgeVisualRegressionValidation('Test_12_React_Mobile');
  })
})
