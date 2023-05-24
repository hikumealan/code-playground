import 'cypress-iframe';
import { Locators } from '../loader.constants'
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
import { selectSBFramework } from '../../../../utils/functions'

// Validates loader component default state
//
// @parms: deviceType: string
// @return: void
const loaderDefaultValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.loaderContent).should('be.visible')
  cy.iframe(Locators.iframe).find(Locators.loader).should('be.visible')
}

// Validates loader component controls
//
// @return: void
const loaderControlValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.loader).should('have.attr', 'show', 'true')
  cy.iframe(Locators.iframe).find(Locators.show).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.loader).should('have.attr', 'show', Locators.trueValue)
  cy.iframe(Locators.iframe).find(Locators.show).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.loader).should('have.attr', 'show', Locators.trueValue)
}

// Validates loader component overlay
//
// @return: void
const loaderOverlayValidation = () => {
  cy.get(Locators.COMPONENT_NAME).click()
  cy.get(Locators.loaderOverlay).click()
  cy.iframe(Locators.iframe).find(Locators.loaderButton).should('be.visible')
  cy.iframe(Locators.iframe).find(Locators.loaderButtonInProgress).should('be.visible')
  cy.iframe(Locators.iframe).find(Locators.loaderButtonInProgress).should('have.attr', 'show', Locators.trueValue)
  cy.iframe(Locators.iframe).find(Locators.loaderButton).invoke('text').then((text) => text.trim()).should('equal', Locators.inProgressValue);
}

// Validates loader overall component for desktop tab and mobile
//
// @parms: deviceType : string
// @return: void
const loaderValidation = (deviceType: string) => {
  loaderDefaultValidation();
  loaderOverlayValidation();
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    loaderControlValidation();
  }
}

describe('Functional Test For Loader Component', () => {
  it('Visit Loader component__storybook_JAVASCRIPT Framework_Tab-Landscape resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderOnFormLocator, DEVICE_TYPE_DESKTOP);
    loaderValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Loader component__storybook_JAVASCRIPT Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderOnFormLocator, DEVICE_TYPE_DESKTOP);
    loaderValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Loader component__storybook_JAVASCRIPT Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderOnFormLocator, DEVICE_TYPE_DESKTOP);
    loaderValidation(DEVICE_TYPE_MOBILE)
  })

  it('Visit Loader component__storybook_JAVASCRIPT Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderOnFormLocator, DEVICE_TYPE_MOBILE);
    loaderValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Loader component__storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderOnFormLocator, DEVICE_TYPE_DESKTOP);
    loaderValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Loader component__storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderOnFormLocator, DEVICE_TYPE_DESKTOP);
    loaderValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Loader component__storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderOnFormLocator, DEVICE_TYPE_DESKTOP);
    loaderValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Loader component__storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderOnFormLocator, DEVICE_TYPE_MOBILE);
    loaderValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Loader component__storybook_REACT Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderOnFormLocator, DEVICE_TYPE_DESKTOP);
    loaderValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Loader component__storybook_REACT Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderOnFormLocator, DEVICE_TYPE_DESKTOP);
    loaderValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Loader component__storybook_REACT Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderOnFormLocator, DEVICE_TYPE_DESKTOP);
    loaderValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Loader component__storybook_REACT Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.loaderOnFormLocator, DEVICE_TYPE_MOBILE);
    loaderValidation(DEVICE_TYPE_MOBILE);
  })
})
