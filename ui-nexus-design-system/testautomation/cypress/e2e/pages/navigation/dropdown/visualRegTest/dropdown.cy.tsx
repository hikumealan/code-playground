import 'cypress-iframe';
import { Locators } from '../dropdown.constants'
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


// validates dropdown default component , clickable state visual regression
//
// @parms: testname: string,deviceType: string
// @returns: void
const dropdownDefaultVRValidation = (testname: string, deviceType: string) => {
  cy.iframe(Locators.iframe).find(Locators.dropdownHeader).should('be.visible')
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.hide)
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  compareScreenshot(Locators.dropdownVR, testname, 'Scenario_01_dropdown_Default_Component_Validation');
  cy.iframe(Locators.iframe).find(Locators.dropdownIcon).click()
  compareScreenshot(Locators.dropdownVR, testname, 'Scenario_02_dropdown Message Text Box Clickability_Validation');
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
  const dropdownIcon = cy.iframe(Locators.iframe).find(Locators.dropdownIcon)
  const dropdownList = cy.iframe(Locators.iframe).find(Locators.dropdownList)
  const listoptions = ['Option 1', 'Option 2', 'Option 3'] 
      dropdownList.each(($el, index) => {
      cy.log("loop index: " + index)
      listoptions.forEach(function (listoptionsNe) {
      dropdownIcon.click({force:true})
      cy.wrap($el).contains(listoptionsNe).click({force:true})
      });
   })
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  if (deviceType !== DEVICE_TYPE_MOBILE) {
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
  }
}

// validates dropdown component for desktop, mobile and tab
//
// @parms: testname: string,deviceType: string
// @returns: void
const errorVisualRegressionValidation = (testname: string, deviceType: string) => {
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    dropdownDefaultVRValidation(testname, deviceType)
  }
  else if (deviceType === DEVICE_TYPE_TAB) {
    dropdownDefaultVRValidation(testname, deviceType)
  }
  else if (deviceType === DEVICE_TYPE_MOBILE) {
    cy.get(Locators.COMPONENT_NAME).click({ force: true })
    dropdownDefaultVRValidation(testname, deviceType)
  }
}

describe('Visual Regression Test For dropdown Component', () => {
  it('Visit dropdown Component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_01_Javascript_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit dropdown Component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_02_Javascript_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit dropdown Component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_03_Javascript_TabPortrait', DEVICE_TYPE_TAB);
  })

  it('Visit dropdown Component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_MOBILE);
    errorVisualRegressionValidation('Test_04_Javascript_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit dropdown Component__Visual Regression_storybook_Angular Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_05_Angular_Desktop', DEVICE_TYPE_DESKTOP);
  })

  it('Visit dropdown Component_Visual Regression_storybook_Angular Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_06_Angular_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit dropdown Component_Visual Regression_storybook_Angular Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_07_Angular_TabPortrait', DEVICE_TYPE_TAB);
  })

  it('Visit dropdown Component_Visual Regression_storybook_Angular Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_MOBILE);
    errorVisualRegressionValidation('Test_08_Angular_Mobile', DEVICE_TYPE_MOBILE);
  })

  it('Visit dropdown Component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_09_React_Desktop', DEVICE_TYPE_DESKTOP);
  })
  it('Visit dropdown Component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_10_React_TabLandscape', DEVICE_TYPE_DESKTOP);
  })

  it('Visit dropdown Component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
    errorVisualRegressionValidation('Test_11_React_TabPortrait', DEVICE_TYPE_TAB);
  })

  it('Visit dropdown Component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_MOBILE);
    errorVisualRegressionValidation('Test_12_React_Mobile', DEVICE_TYPE_MOBILE);
  })
})
