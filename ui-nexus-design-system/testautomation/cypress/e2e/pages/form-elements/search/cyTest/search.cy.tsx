import 'cypress-iframe';
import { Locators } from '../search.constants'
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
import { selectSBFramework } from '../../../../utils/functions';

// Validates search component default state
//
// @returns: void
const defaultSearchValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.searchComponent).should('be.visible')
  cy.log('TC_01_search component availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.searchComponent).should('have.attr', Locators.autoCompleteAttribute, Locators.offAttributeValue);
  cy.log('TC_02_search component autocomplete default set to off-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.searchInput).should('be.visible').should('have.attr', Locators.typeAttribute, Locators.textAttributeValue);
  cy.log('TC_03_search component type default input textbox-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.searchComponent).should('have.css', Locators.backgroundColorAttribute, Locators.whiteColorValue)
  cy.log('TC_04_search component background color-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.searchComponent).should('have.css', Locators.colorAttribute, Locators.blackColorValue)
  cy.log('TC_05_search component border color-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.searchIcon).should('have.css', Locators.colorAttribute, Locators.blackColorValue)
  cy.log('TC_06_search icon component  color-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.searchInput).click()
  cy.iframe(Locators.iframe).find(Locators.searchIcon).should('have.css', Locators.colorAttribute, Locators.orangeColorValue)
  cy.log('TC_06_search icon component  color-validated successfully')
}

// Validates search component controls
//
// @returns: void
const searchControlValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.debounceInterval).should('be.visible').should('have.text', Locators.deBounceIntervalValue)
  cy.log('TC_08_search  component  default debounce interval-validated successfully')
}

// Validates search component with various input combinations
//
// @returns: void
const searchInputCombination = () => {
  const searchCombination = new Map([
    [Locators.numericLabel, Locators.numericInputValue],
    [Locators.lowerCaseLabel, Locators.alphabeticLowerCaseInputValue],
    [Locators.upperCaseLabel, Locators.alphabeticUpperCaseInputValue],
    [Locators.alphanumericLabel, Locators.alphabeticAlphanumericInputValue],
    [Locators.minimumLengthLabel, Locators.minimumInputValue],
    [Locators.maximumLengthLabel, Locators.maximumInputValue],
    [Locators.specialCharactersLabel, Locators.specialCharactersInputValue]
  ]);
  searchCombination.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.searchInput).clear().type(value)
    cy.iframe(Locators.iframe).find(Locators.searchIcon).click({ force: true })
    cy.iframe(Locators.iframe).find(Locators.searchInput).should('be.visible').invoke('val').should('equal', value);
    cy.log(`TC_search  component numeric input-validated successfully with the input combination ${key}`)
  })
}

// Validates radio component overall validation for desktop. mobile and tab
//
//  @parms: deviceType: string
// @returns: void
const searchValidation = (deviceType: string) => {
  defaultSearchValidation();
  searchInputCombination();
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    searchControlValidation();
  }
}

describe('Functional Test For Search Component', () => {
  it('Visit search component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit search component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit search component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit search component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_MOBILE);
    searchValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit search component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit search component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit search component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit search component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_MOBILE);
    searchValidation(DEVICE_TYPE_MOBILE)
  })

  it('Visit search component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit search component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit search component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_DESKTOP);
    searchValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit search component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.searchComponentLocator, DEVICE_TYPE_MOBILE);
    searchValidation(DEVICE_TYPE_MOBILE);
  })
})
