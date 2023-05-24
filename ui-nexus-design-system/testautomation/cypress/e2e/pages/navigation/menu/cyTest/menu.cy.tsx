import 'cypress-iframe';
import { Locators } from '../menu.constants'
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

// Validates Menu Component default state,background color
//
// @returns: void
const menuDefaultValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.menuButtonComponent).should('be.visible')
  cy.log('TC_01_Menu Component availability -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.menuButtonComponent).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.openMenuText);
  cy.log('TC_02_Menu component inner text -validated successfully')
  const attributes = new Map([
    [Locators.positionAttribute, Locators.rightValue],
  ]);
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.closeMenu).should('have.attr', key, value);
    cy.log(`TC_04_Menu Component attributes-validated successfully for ${key}`)
  })  
}

// Validates  menu list default validation and close button validation
//
// @returns: void
const MenuListValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.menuButtonComponent).should('be.visible').click({force:true})  
  cy.iframe(Locators.iframe).find(Locators.menuListComponent).eq(0).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.itemOne);
  cy.iframe(Locators.iframe).find(Locators.menuListComponent).eq(1).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.itemTwo);
  cy.iframe(Locators.iframe).find(Locators.menuListComponent).eq(2).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.itemThree);
  cy.log('TC_05_Menu List Component inner texts -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.menuListComponent).eq(0).invoke('attr', 'href').should('eq', Locators.menuHref)
  cy.iframe(Locators.iframe).find(Locators.menuListComponent).eq(1).invoke('attr', 'href').should('eq', Locators.menuHref)
  cy.iframe(Locators.iframe).find(Locators.menuListComponent).eq(2).invoke('attr', 'href').should('eq', Locators.menuHref)
  cy.log('TC_06_Menu List Component as a Link -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.closeButton).should('be.visible').click({force:true})  
}

// Validates menu components controls validation
//
// @returns: void
const menuControlsValidation = () => {
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.openToggleButton).should('be.visible').click({force:true})  
    clickElementIdentifiedByLocator(CommonLocators.canvas, false);
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.openToggleButton).should('be.visible').click({force:true}) 
    clickElementIdentifiedByLocator(CommonLocators.canvas, false);
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.positionSelectBox).select(Locators.leftValue, { force: true });
    clickElementIdentifiedByLocator(CommonLocators.canvas, false);
    cy.iframe(Locators.iframe).find(Locators.closeMenu).should('have.attr', Locators.positionAttribute, Locators.leftValue);
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.positionSelectBox).select(Locators.rightValue, { force: true });
    clickElementIdentifiedByLocator(CommonLocators.canvas, false);
    cy.iframe(Locators.iframe).find(Locators.closeMenu).should('have.attr', Locators.positionAttribute, Locators.rightValue);    
}

// Validates Menu Component overall validation for desktop, mobile and tab
//
// @returns: void
const menuValidation = (deviceType: string) => {
    menuDefaultValidation()
    MenuListValidation()
    if (deviceType === DEVICE_TYPE_DESKTOP) {
        menuControlsValidation()
      }
}

describe('Functional Test For Menu component', () => {
  it('Visit Menu Component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    menuValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Menu Component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    menuValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Menu Component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    menuValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Menu Component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_MOBILE);
    menuValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Menu Component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    menuValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Menu Component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    menuValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Menu Component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    menuValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Menu Component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_MOBILE);
    menuValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Menu Component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    menuValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Menu Component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    menuValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Menu Component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_DESKTOP);
    menuValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Menu Component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.menuComponentLocator, DEVICE_TYPE_MOBILE);
    menuValidation(DEVICE_TYPE_MOBILE);
  })

})
