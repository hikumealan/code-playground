import 'cypress-iframe';
import { Locators } from '../textarea.constants'
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

// Validates textarea component default state
//
// @returns: void
const defaultTextareaValidation = () => {
  cy.contains('Canvas').click({ force: true });
  cy.iframe(Locators.iframe).find(Locators.textareaLabel).should('be.visible').should('have.text', Locators.textAreaPlaceholderName)
  cy.log('TC_01_textarea component label availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).should('be.visible')
  cy.log('TC_02_textarea component label availablility-validated successfully')
  const attributes = new Map([
    [Locators.disabledValue, Locators.disabledValue],
    [Locators.requiredValue, Locators.requiredValue],
    [Locators.rowsValue, Locators.minInputValue],
    [Locators.colsValue, Locators.maxInputValue],
    ['max-length', ''],
    ['min-length', '']
  ]);
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.textareaComponent).should('be.visible').should('have.attr', key, value);
    cy.log(`TC_textarea component component type -  validated successfully for attribute ${key}`);
  })
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).should('have.css', 'border-color', 'rgb(0, 0, 0)')
  cy.log('TC_09_textarea component border color-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).click()
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  cy.log('TC_11_textarea component background color-validated successfully')
}

// Validates texarea component controls
//
// @returns: void
const textareaControlValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlAttrId).clear().type(Locators.attributeIdValue)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).should('be.visible').should('have.attr', 'attrid', Locators.attributeIdValue);
  cy.log('TC_12_textarea component attribute id-validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlAttrId).clear()
  cy.iframe(Locators.iframe).find(Locators.controlcols).clear().type(Locators.maximumValueInput)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).should('be.visible').should('have.attr', 'cols', Locators.maximumValueInput);
  cy.log('TC_13_textarea component cols attribute-validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlcols).clear().type(Locators.maxInputValue)
  cy.iframe(Locators.iframe).find(Locators.controlDisabled).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).should('be.visible').should('have.attr', Locators.disabledValue);
  cy.log('TC_14_textarea component disabled attribute-validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlDisabled).click()
  cy.iframe(Locators.iframe).find(Locators.controlMaxlength).clear().type(Locators.numericInputVal)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).should('be.visible').should('have.attr', 'max-length', Locators.numericInputVal);
  cy.log('TC_15_textarea component maxlength attribute-validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlMaxlength).clear().type(Locators.nullValue)
  cy.iframe(Locators.iframe).find(Locators.controlMinlength).clear().type(Locators.numericInputVal)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).should('be.visible').should('have.attr', 'min-length', Locators.numericInputVal);
  cy.log('TC_16_textarea component minlength attribute-validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlMaxlength).clear().type(Locators.nullValue)
  cy.iframe(Locators.iframe).find(Locators.controlPlaceholder).clear().type(Locators.placeHolderValue)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).should('be.visible').should('have.attr', 'placeholder', Locators.placeHolderValue);
  cy.log('TC_17_textarea component placeholder attribute-validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlPlaceholder).clear()
  cy.iframe(Locators.iframe).find(Locators.controlRows).clear().type(Locators.numericInputVal)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).should('be.visible').should('have.attr', 'rows', Locators.numericInputVal);
  cy.log('TC_18_textarea component rows attribute-validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlRows).clear().type(Locators.minInputValue)
}

// Validates texarea component input combinations generic methhod
//
// @returns: void
const textareaInputValidation = (inputvalue:any) => {
  cy.iframe(Locators.iframe).find(Locators.textareaComponentTextArea).clear().type(inputvalue)
  cy.iframe(Locators.iframe).find(Locators.textareaComponentTextArea).invoke('val').should('equal', inputvalue);
}

// Validates texarea component input with various input combinations
//
// @returns: void
const textareaInputCombination = () => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  textareaInputValidation(Locators.numericValueCombination)
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).invoke('val').should('match', /^[0-9]*$/)
  cy.log('TC_19_textarea component numeric-validated successfully')
  textareaInputValidation(Locators.lowerLetterInputValue)
  cy.log('TC_20_lowercase letters -validated successfully')
  textareaInputValidation(Locators.upperLetterInputValue)
  cy.log('TC_21_upper case letter -validated successfully')
  textareaInputValidation(Locators.alphanumericInputValue)
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).invoke('val').should('match', /^[a-zA-Z0-9_]*$/)
  cy.log('TC_22_textarea  component alphanumeric input-validated successfully')
  textareaInputValidation(Locators.specialCharacterInputValue)
  cy.iframe(Locators.iframe).find(Locators.textareaComponent).invoke('val').should('match', /^[^a-z]*$/)
  cy.log('TC_23_textarea  component special characters input-validated successfully')
  textareaInputValidation(Locators.singleValue)
  cy.log('TC_24_textarea  component minimum characters input-validated successfully')
  textareaInputValidation(Locators.maxNumericInputValue)
  cy.log('TC_25_textarea  component maximum characters input-validated successfully')
}

// Validates texarea component overall scenarios for mobile desktop and tab
// @returns: void
const textAreaValidation = (deviceType: string) => {
  defaultTextareaValidation();
  cy.get(Locators.COMPONENT_NAME).click()
  textareaInputCombination()
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    textareaControlValidation();
  }
}

describe('Functional Test For Textarea Component', () => {
  it('Visit Textarea component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Textarea component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Textarea component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Textarea component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_MOBILE);
    textAreaValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Textarea component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Textarea component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Textarea component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Textarea component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_MOBILE);
    textAreaValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Textarea component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Textarea component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Textarea component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_DESKTOP);
    textAreaValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Textarea component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.textareaComponentLocator, DEVICE_TYPE_MOBILE);
    textAreaValidation(DEVICE_TYPE_MOBILE);
  })
})
