import 'cypress-iframe';
import { Locators } from '../formfield.constants'
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

// Validates form field default state
//
// @returns: void
const formFieldDefaultValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.formFieldInputBox).should('be.visible')
  cy.log('TC_01_form field availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.formFieldLabel).should('be.visible').should('have.text', Locators.firstNameValue)
  cy.log('TC_01_01_form field Label availablility and Label-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.formFieldInputBox).should('have.attr', 'type', 'text');
  cy.log('TC_02_form field Default state - form field as a text box validated successfully')
  cy.iframe(Locators.iframe).find(Locators.formFieldInputBox).click().should('have.css', 'border-color', Locators.borderColorValue)
  cy.log('TC_03_focus state click and focus -  validated successfully');
}

// Validates form field with different input combinations - numeric , alphanumeric, special characters , min and max length values
//
// @returns: void
const formInputCombinationValidation = () => {
  const inputCombinations = new Map([
    [Locators.numericVariant, Locators.numericValue],
    [Locators.alphabetVariant, Locators.alphabeticValue],
    [Locators.lowerCaseVariant, Locators.lowerCaseValue],
    [Locators.upperCaseVariant, Locators.upperCsseValue],
    [Locators.alphanumericVariant, Locators.alphanumericValue],
    [Locators.specialCharactersVariant, Locators.specialCharactersValue],
    [Locators.minimumValueVariant, Locators.minimumValue],
    [Locators.maximumValueVariant, Locators.maximumValue]
  ]);
  inputCombinations.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.formFieldInputBox).clear().type(value)
    cy.iframe(Locators.iframe).find(Locators.formFieldInputBox).invoke('val').should('equal', value);
    cy.log(`TC_ form field -  validated successfully for ${key}`);
  })
}

// Validates form field disabled component
//
// @returns: void
const formFieldDisabledValidation = () => {
  cy.get(Locators.disabledSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.formFieldDisabledLabel).should('be.visible').should('have.text', Locators.disabledModalValue)
  cy.log('TC_01_form field Label availablility and Label-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.formFieldDisabledInputBox).should('be.visible').should('have.value', 'Value')
  cy.log('TC_02_Disabled form field value -  validated successfully')
  cy.iframe(Locators.iframe).find(Locators.formFieldDisabledInputBox).should('have.attr', Locators.disabledValue)
  cy.log('TC_03_Disabled form field_disabled state - disabled state true validated successfully')
}

// Validates form field with message component
//
// @returns: void
const formFieldWithMessageValidation = () => {
  cy.get(Locators.withMessageSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.formFieldWithMessage).should('be.visible')
  cy.log('TC_01_Form field message textbox availability -  validated successfully')
  cy.iframe(Locators.iframe).find(Locators.formFieldWithMessageLabel).should('be.visible').should('have.text', Locators.firstNameValue)
  cy.log('TC_02_01_form field Label availablility and Label-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.formFieldMessage).should('be.visible').should('have.text', Locators.customMessageValue)
  cy.log('TC_03_Form field message  availability and label text -  validated successfully')
  cy.iframe(Locators.iframe).find(Locators.formFieldInputBox).clear().type(Locators.alphanumericValue)
  cy.iframe(Locators.iframe).find(Locators.formFieldInputBox).should('have.value', Locators.alphanumericValue)
  cy.log('TC_04_Form field message text box input -  validated successfully')
}

// Validates form field with error component
//
// @returns: void
const formFieldWithErrorValidation = () => {
  cy.get('#component-form-elements-form-field--d-with-error').click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.formFieldErrorMessageTextbox).should('be.visible')
  cy.log('TC_01_Form field message textbox availability -  validated successfully')
  cy.iframe(Locators.iframe).find(Locators.formFieldWithErrorLabel).should('be.visible').should('have.text', Locators.firstNameValue)
  cy.log('TC_02_form field Label availablility and Label-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.formFieldErrorMessage).should('be.visible').should('have.text', Locators.ErrorMessageError)
  cy.log('TC_03_Form field message  availability and label text -  validated successfully')
  cy.iframe(Locators.iframe).find(Locators.formFieldErrorMessageTextbox).type(Locators.alphanumericValue)
}

// Validates formfield component for desktop, tab and mobile
//
// @parms: deviceType: string
// @returns: void
const formFieldValidation = () => {
  formFieldDefaultValidation()
  formInputCombinationValidation()
  cy.get(Locators.COMPONENT_NAME).click({ force: true })
  formFieldDisabledValidation()
  formFieldWithMessageValidation()
  formFieldWithErrorValidation()
}

describe('Functional Test For Formfield Component', () => {
  it('Visit formfield component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldValidation();
  })

  it('Visit formfield component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldValidation();
  })

  it('Visit formfield component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldValidation();
  })

  it('Visit formfield component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_MOBILE);
    formFieldValidation();
  })

  it('Visit formfield component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldValidation();
  })

  it('Visit formfield component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldValidation();
  })

  it('Visit formfield component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldValidation();
  })

  it('Visit formfield component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_MOBILE);
    formFieldValidation();
  })

  it('Visit formfield component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldValidation();
  })

  it('Visit formfield component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldValidation();
  })

  it('Visit formfield component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_DESKTOP);
    formFieldValidation();
  })

  it('Visit formfield component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.formfieldComponentLocator, DEVICE_TYPE_MOBILE);
    formFieldValidation();
  })
})
