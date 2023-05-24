import 'cypress-iframe';
import { Locators } from '../breadcrumb.constants'
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
import { selectSBFramework, clickElementIdentifiedByLocator } from '../../../../utils/functions'

// Validates Breadcrumb Component default state,background color
//
// @returns: void
const breadcrumbDefaultValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.breadcrumbComponent).should('be.visible')
  for (let idx = 0; idx <= 2; idx++) {
  {
    cy.iframe(Locators.iframe).find(Locators.breadcrumbSeperator).should('be.visible')
    cy.iframe(Locators.iframe).find(Locators.breadcrumbIndividual).should('be.visible')
  }
  cy.log('TC_01_Breadcrumb Component availability -validated successfully')
  const attributes = new Map([
    [Locators.breadcrumb, Locators.breadCrumbOne],
    [Locators.breadcrumb, Locators.breadCrumbTwo],
    [Locators.breadcrumb, Locators.breadCrumbThree],
  ]);
  let idx;
  idx = 0;
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.breadcrumbSeperator).eq(idx).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', "/");
    cy.iframe(Locators.iframe).find(Locators.breadcrumbIndividual).eq(idx).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', value);
    cy.log(`TC_02_Breadcrumb inner text-validated successfully for ${key}  ${value}`)
    idx++;
  })  
}
}

// Validates  breadcrumb component controls validation
//
// @returns: void
const breadcrumbControlsValidation = () => {
    cy.get(Locators.breadcrumbSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.seperatorTextbox).should('be.visible').clear().type(".")
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    for (let idx = 0; idx <= 2; idx++) {
        {
          cy.iframe(Locators.iframe).find(Locators.breadcrumbSeperator).eq(idx).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', ".");
        }
    cy.log(`TC_03_Breadcrumb Component seperator controls-validated successfully`)
}
}

// Validates breadcrumb disabled state component
//
// @returns: void
const breadCrumbDisabledValidation = () => {
    cy.get(Locators.disabledSideMenu).click()
    breadcrumbDefaultValidation()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false);
    cy.iframe(Locators.iframe).find(Locators.breadcrumbComponent).should('be.visible')
    for (let idx = 0; idx <= 2; idx++) {
        {
          cy.iframe(Locators.iframe).find(Locators.disabledBreadCrumbItem).eq(idx).should('be.visible').should('have.attr', Locators.disabledAttribute);
        }
    cy.log('TC_04_Breadcrumb disabled Component availability -validated successfully')
  }
}

  // Validates breadcrumb with icon component
  //
  // @returns: void
const breadCrumbWithIconValidation = () => {
    cy.get(Locators.withIconSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.iconList).should('be.visible')
    const attributes = new Map([
      [Locators.breadcrumb, Locators.dimensionLabel],
      [Locators.breadcrumb, Locators.settingsLabel],
      [Locators.breadcrumb, Locators.buildLabel],
    ]);
    let idx;
    idx = 0;
    attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.icons).eq(idx).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', value);
    cy.iframe(Locators.iframe).find(Locators.iconSeperator).eq(idx).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', "/");
      cy.log(`TC_02_Breadcrumb with icon inner text-validated successfully for ${key}  ${value}`)
      idx++;
    })  
  }

// Validates breadcrumb Component overall validation for desktop, mobile and tab
//
// @returns: void
const breadcrumbValidation = (deviceType: string) => {
    breadcrumbDefaultValidation()
    breadCrumbDisabledValidation()
    breadCrumbWithIconValidation()
    if (deviceType === DEVICE_TYPE_DESKTOP) {
        breadcrumbControlsValidation()
      }
}

describe('Functional Test For BreadCrumb component', () => {
  it('Visit Breadcrumb Component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Breadcrumb Component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Breadcrumb Component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Breadcrumb Component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_MOBILE);
    breadcrumbValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Breadcrumb Component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Breadcrumb Component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Breadcrumb Component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Breadcrumb Component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_MOBILE);
    breadcrumbValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Breadcrumb Component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Breadcrumb Component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Breadcrumb Component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_DESKTOP);
    breadcrumbValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Breadcrumb Component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.breadcrumbComponentLocator, DEVICE_TYPE_MOBILE);
    breadcrumbValidation(DEVICE_TYPE_MOBILE);
  })

})
