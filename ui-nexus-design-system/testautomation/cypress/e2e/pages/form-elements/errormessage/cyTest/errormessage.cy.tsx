import 'cypress-iframe';
import { Locators } from '../errormessage.constants'
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

// validates error message default state
//
// @returns: void
const errorDefaultMessageValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.errorMessage).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.EnterFirstNameValue);
  cy.log('Error message component availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.errorMessageIcon).should('have.css', 'color', Locators.redColorValue)
  cy.log('Error message component background color-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.firstNameLabel).should('be.visible')
  cy.log('first name label availability-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.errorTextBox).should('be.visible')
  cy.log('Error message textbox availability-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.errorTextBox).click()
  cy.iframe(Locators.iframe).find(Locators.errorTextBox).type(Locators.IncorrectErroressageValue)
  cy.iframe(Locators.iframe).find(Locators.errorMessage).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.EnterFirstNameValue);
  cy.log('Default error message -validated successfully')
}

// validates error message controls
//
// @returns: void
const errorMessageControlsValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.messageTextBox).clear().type(Locators.CustomisedErrorValue)
  cy.iframe(Locators.iframe).find(Locators.errorMessage).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.CustomisedErrorValue);
  cy.log('Customised error message -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.messageTextBox).clear().type('Please enter a first name.')
  cy.iframe(Locators.iframe).find(Locators.errorMessage).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.EnterFirstNameValue);
}

// validates error email component
//
// @returns: void
const errorEmailValidation = () => {
  cy.get(Locators.emailValidationSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.pleaseProvideEmailLabel).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.ProvideEmailValue)
  cy.iframe(Locators.iframe).find(Locators.enterYourEmailTextbox).should('be.visible').should('have.attr', 'placeholder', Locators.EnterEmailValue);
  cy.iframe(Locators.iframe).find(Locators.enterYourEmailTextbox).type(Locators.EmailIdValue)
  cy.iframe(Locators.iframe).find(Locators.enterYourEmailTextbox).invoke('val').should('equal', Locators.EmailIdValue);
  cy.log('Default error email message -validated successfully')
}

// validates error name component
//
// @returns: void
const errorNameValidation = () => {
  cy.get(Locators.nameValidationSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.pleaseProvideEmailLabel).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.EnterNameValue)
  cy.iframe(Locators.iframe).find(Locators.enterYourEmailTextbox).should('be.visible').should('have.attr', 'placeholder', Locators.MaxTenLettersValue);
  cy.iframe(Locators.iframe).find(Locators.enterYourEmailTextbox).should('be.visible').should('have.attr', 'maxlength', Locators.MaxLengthValue);
  cy.iframe(Locators.iframe).find(Locators.enterYourEmailTextbox).clear().type(Locators.NumericValue)
  cy.iframe(Locators.iframe).find(Locators.enterYourEmailTextbox).invoke('val').should('equal', Locators.NumericValue);
  cy.iframe(Locators.iframe).find(Locators.enterYourEmailTextbox).clear().type(Locators.NumericMaxValue)
  cy.iframe(Locators.iframe).find(Locators.enterYourEmailTextbox).invoke('val').should('equal', Locators.NumericValue);
  cy.iframe(Locators.iframe).find(Locators.enterYourEmailTextbox).invoke('val').should('have.length', 10);
  cy.log('Default error  name -validated successfully')
}

// validates error message component for desktop mobile and tab
//
// @parms: testname: string,deviceType: string
// @returns: void
const errorMessageValidation = (deviceType: string) => {
  errorDefaultMessageValidation();
  cy.get(Locators.COMPONENT_NAME).click()
  errorEmailValidation()
  errorNameValidation()
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    errorMessageControlsValidation();
  }
}

describe('Functional Test For Errormessage Component', () => {
  it('Visit errormessage component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorMessageValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit errormessage component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorMessageValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit errormessage component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorMessageValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit errormessage component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_MOBILE);
    errorMessageValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit errormessage component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorMessageValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit errormessage component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorMessageValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit errormessage component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorMessageValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit errormessage component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_MOBILE);
    errorMessageValidation(DEVICE_TYPE_MOBILE)
  })

  it('Visit errormessage component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorMessageValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit errormessage component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorMessageValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit errormessage component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_DESKTOP);
    errorMessageValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit errormessage component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.errorComponentLocator, DEVICE_TYPE_MOBILE);
    errorMessageValidation(DEVICE_TYPE_MOBILE);
  })
})
