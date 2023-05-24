import 'cypress-iframe';
import { Locators } from '../toast.constants'
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

// Validates Toast Component default state,background color
//
// @returns: void
const toastDefaultValidation = () => {
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.toastComponentLocator).should('be.visible')
    cy.log('TC_01_Toast Component availability -validated successfully')
    const attributes = new Map([
      [Locators.closeableAttribute, Locators.closeableValue],
      [Locators.showAttribute, Locators.showValue],
      [Locators.variantAttribute, Locators.variantValue],
    ]);
    attributes.forEach((value, key) => {
      cy.iframe(Locators.iframe).find(Locators.toastComponentLocator).should('be.visible').should('have.attr', key, value);
      cy.log(`TC_02_Toast Component attributes-validated successfully for ${key}  ${value}`)
    })
    cy.iframe(Locators.iframe).find(Locators.toastIcon).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.defaultMessage);
  }

// Validates Toast variant Component default state,background color
//
// @returns: void
const toastVariantDefaultValidation = () => {
    cy.get(Locators.toastVariantsSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    const attributes = new Map([
      [Locators.variantAttribute, Locators.variantOneMessage],
      [Locators.variantAttribute, Locators.variantTwoMessage],
      [Locators.variantAttribute, Locators.variantThreeMessage],
      [Locators.variantAttribute, Locators.variantFourMessage],
      [Locators.variantAttribute, Locators.variantFiveMessage],
    ]);
    let idx;
    idx = 0;
    attributes.forEach((value, key) => {
      cy.iframe(Locators.iframe).find(Locators.toastVariants).eq(idx).should('be.visible')
      cy.iframe(Locators.iframe).find(Locators.toastIcons).eq(idx).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', value);
      cy.log(`TC_02_Toast variant Component inner texts-validated successfully for ${key}  ${value}`)
      idx++;
    }) 
  }

// Validates Toast auto close Component default state,background color
//
// @returns: void
const toastAutoCloseValidation = () => {
    cy.get(Locators.toastAutoCloseSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.autoCloseMessage).should('be.visible')
    cy.iframe(Locators.iframe).find(Locators.autoCloseMessage).should('be.visible').should('have.attr', Locators.autoCloseAttribute, Locators.autoCloseValue);
    cy.iframe(Locators.iframe).find(Locators.reloadPageButton).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.reloadPage);
  }

// Validates  toast component controls validation
//
// @returns: void
const toastControlsValidation = () => {
    cy.get(Locators.toastSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.autocloseToggle).click();
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.toastVariants).should('be.visible').invoke('attr', 'closeable').should('eq', 'true')
}

// Validates toast Component overall validation for desktop, mobile and tab
//
// @returns: void
const toastValidation = (deviceType: string) => {
    toastDefaultValidation()
    toastVariantDefaultValidation()
    toastAutoCloseValidation()
    if (deviceType === DEVICE_TYPE_DESKTOP) {
        toastControlsValidation()
      }
}

describe('Functional Test For Toast component', () => {
  it('Visit Toast Component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toast Component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toast Component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Toast Component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_MOBILE);
    toastValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Toast Component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toast Component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toast Component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Toast Component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_MOBILE);
    toastValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Toast Component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toast Component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toast Component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_DESKTOP);
    toastValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Toast Component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toastComponentLocator, DEVICE_TYPE_MOBILE);
    toastValidation(DEVICE_TYPE_MOBILE);
  })

})
