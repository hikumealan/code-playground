import 'cypress-iframe';
import { Locators } from '../pagination.constants'
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

// Pagination component default state
//
// @return: void
const defaultPaginationValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.paginationComponent).should('be.visible').should('have.attr', 'current', Locators.minValue);
  cy.iframe(Locators.iframe).find(Locators.paginationComponent).should('have.attr', 'max', Locators.maxValue);
  cy.log('TC_01_pagination component default state-validated successfully');
  [Locators.firstPageValue, Locators.previousPageValue, Locators.nextPageValue, Locators.lastPageValue].forEach(
    (PaginationPages, idx) => {
      cy.iframe(Locators.iframe).find(Locators.paginationButton).eq(idx).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', PaginationPages);
      cy.log(`TC_pagination component -validated successfully for ${PaginationPages}`);
    }
  )
}

// Pagination component disabled state
//
// @return: void
const disabledPaginationValidation = () => {
  cy.wait(1000)
  cy.iframe(Locators.iframe).find(Locators.paginationButton).eq(3).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.paginationButton).eq(2).should('be.disabled')
  cy.iframe(Locators.iframe).find(Locators.paginationButton).eq(3).should('be.disabled')
  cy.iframe(Locators.iframe).find(Locators.paginationButton).eq(0).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.paginationButton).eq(0).should('be.disabled')
  cy.iframe(Locators.iframe).find(Locators.paginationButton).eq(1).should('be.disabled')
}

// Pagination component controls validation
//
// @return: void
const paginationControlValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.currentTextBox).clear().type(Locators.minimumValue)
  cy.iframe(Locators.iframe).find(Locators.maxTextBox).clear().type(Locators.maximumValue)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.paginationCountInput).should('have.attr', 'min', Locators.minimumValue);
  cy.iframe(Locators.iframe).find(Locators.paginationCountInput).should('have.attr', 'max', Locators.maximumValue);
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.currentTextBox).clear().type(Locators.minValue)
  cy.iframe(Locators.iframe).find(Locators.maxTextBox).clear().type(Locators.maxValue)
}

// Pagination component overall validation for tab desktop and mobile
//
// @parms: deviceType: string
// @return: void
const paginationValidation = (deviceType: string) => {
  defaultPaginationValidation();
  disabledPaginationValidation();
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    paginationControlValidation();
  }
}

describe('Functional Test for pagination component', () => {
  it('Visit Pagination component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationValidation(DEVICE_TYPE_DESKTOP)
  })

  it('Visit Pagination component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationValidation(DEVICE_TYPE_DESKTOP)
  })

  it('Visit Pagination component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationValidation(DEVICE_TYPE_MOBILE)
  })

  it('Visit Pagination component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_MOBILE);
    paginationValidation(DEVICE_TYPE_MOBILE)
  })

  it('Visit Pagination component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationValidation(DEVICE_TYPE_DESKTOP)
  })

  it('Visit Pagination component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationValidation(DEVICE_TYPE_DESKTOP)
  })

  it('Visit Pagination component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationValidation(DEVICE_TYPE_MOBILE)
  })

  it('Visit Pagination component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_MOBILE);
    paginationValidation(DEVICE_TYPE_MOBILE)
  })

  it('Visit Pagination component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationValidation(DEVICE_TYPE_DESKTOP)
  })

  it('Visit Pagination component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationValidation(DEVICE_TYPE_DESKTOP)
  })

  it('Visit Pagination component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_DESKTOP);
    paginationValidation(DEVICE_TYPE_MOBILE)
  })

  it('Visit Pagination component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.paginationComponentLocator, DEVICE_TYPE_MOBILE);
    paginationValidation(DEVICE_TYPE_MOBILE)
  })
})
