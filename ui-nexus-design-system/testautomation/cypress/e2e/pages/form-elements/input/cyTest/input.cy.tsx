import 'cypress-iframe';
import { Locators } from '../input.constants'
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

// Validates input component default state
//
// @returns: void
const inputDefaultValidation = (deviceType: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.inputLabel).should('be.visible').should('have.text', Locators.firstNameValue)
  cy.log('TC_01_Input component label availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('be.visible')
  cy.log('TC_02_Input component availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).click().should('have.css', 'border-color', Locators.whiteColorValue)
  cy.log('TC_03_Input component click and focus -  validated successfully')
  const attributes = new Map([
    [Locators.typeValue, Locators.textValue],
    [Locators.requiredValue, Locators.requiredValue],
    [Locators.minLengthValue, ''],
    [Locators.maxLengthValue, Locators.lengthValue],
    [Locators.disabledValue, Locators.disabledValue]
  ]);
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('be.visible').should('have.attr', key, value);
    cy.log(`TC_Input component type -  validated successfully ${key}`);
  })
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).should('be.visible').should('have.attr', 'minlength', Locators.minInputValue);
  cy.log('TC_06_Input component minimum length -  validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).should('be.visible').should('have.attr', 'maxlength', Locators.lengthValue);
  cy.log('TC_07_Input component maximum length -  validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).type(Locators.maxInputValue).click({ force: true })
  cy.log('TC_08_Input component input values -  validated successfully')
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    inputControlValidation();
  }
}

// Validates input component controls
//
// @returns: void
const inputControlValidation = () => {
  // cy.get(Locators.inputSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.inputLabel).should('be.visible').should('have.text', Locators.firstNameValue)
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('be.visible')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.control).eq(0).type(Locators.attributeIdValue)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('be.visible').should('have.attr', 'attrid', Locators.attributeIdValue);
  cy.log('TC_56_input control attribute id -validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controltoggle).eq(1).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('have.attr', Locators.disabledValue, Locators.disabledValue)
  cy.log('TC_57_input control disabled state -validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controltoggle).eq(1).click()
  cy.iframe(Locators.iframe).find(Locators.control).eq(1).clear().type(Locators.maximumValue)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).should('be.visible').should('have.attr', 'maxlength', Locators.maximumValue);
  cy.log('TC_58_input control max length -validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.control).eq(1).clear().type(Locators.placeHolderValue)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.log('TC_59_input control placeholder -validated successfully')
  const type = new Map([['variantdate', Locators.dateValue], ['variantEmail', Locators.emailValue], ['variantNumber', Locators.numberValue],
    ['variantPassword', Locators.passwordValue], ['variantTel', Locators.telValue], ['variantText', Locators.textValue]]);
  type.forEach(
    (variant, idx) => {
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(Locators.controlSelect).select(variant)
      clickElementIdentifiedByLocator(CommonLocators.canvas, false)
      cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).should('be.visible').should('have.attr', Locators.typeValue, variant);
      cy.log(`TC_input control type -validated successfully for ${variant} ${idx}`);
    }
  )
}

// Validates max length component default state
//
// @returns: void
const maxLengthValidation = () => {
  cy.get(Locators.inputMaxLength).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.inputLabel).should('be.visible').should('have.text', Locators.inputFieldLabelValue)
  cy.log('TC_10_Max length label availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('be.visible').should('have.attr', 'placeholder', 'Value');
  cy.log('TC_12_Max length component placeholder-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).should('be.visible').should('have.attr', 'maxlength', Locators.NumericInputValue);
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).type(Locators.NumericCombinationValue)
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInvalid).invoke('val').its('length').should('eq', 20);
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInvalid).clear().type(Locators.MinimumLengthValue)
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInvalid).invoke('val').its('length').should('eq', 10);
  cy.log('TC_13_Max length component maximum length attribute-validated successfully')
}

// Validates input component with various input combinations
//
// @returns: void
const inputCombinationValidation = () => {
  cy.get(Locators.inputComponentLocator).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  const attributes = new Map([
    [Locators.numericValue, Locators.numericVariantValue],
    [Locators.alphabetValue, Locators.alphabetInputValue],
    [Locators.lowerCaseValue, Locators.alphabetInputValue],
    [Locators.upperCaseValue, Locators.upperCaseInputValue],
    [Locators.alphanumericValue, Locators.alphanumericInputValue],
    [Locators.specialCharactersValue, Locators.specialCharacterInputValue],
    [Locators.minValue, Locators.singleValue],
    [Locators.maxValue, Locators.numericCombinationInput]
  ]);
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).clear().type(value)
    cy.log(`TC_Max length component Numeric Input -  validated successfully for the combination ${key}`);
  })
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).type(Locators.numericValueCombination)
  cy.log('TC_Max length component Numeric Input -  validated successfully')
}

// Validates input with password component
//
// @returns: void
const inputWithPasswordValidation = () => {
  cy.get(Locators.inputPasswordSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.inputLabel).should('be.visible').should('have.text', Locators.passwordFieldExampleValue)
  cy.log('TC_22_With password label availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('be.visible')
  cy.log('TC_23_With password component availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('be.visible').should('have.attr', 'placeholder', Locators.yourPasswordValue);
  cy.log('TC_24_With password component placeholder-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('be.visible').should('have.attr', Locators.typeValue, Locators.passwordLabelValue);
  cy.log('TC_25_With password component  text box type password-  validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).type(Locators.passwordInputValue)
  cy.log('TC_26_With password component password validation-  validated successfully')
  cy.log('TC_27_Max length component click and focus -  validated successfully')
}

// Validates input with password component
//
// @returns: void
const inputWithNumberValidation = () => {
  cy.get(Locators.inputWithNumberSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.inputLabel).should('be.visible').should('have.text', Locators.onlyNumbersAllowedValue)
  cy.log('TC_28_with number label availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('be.visible')
  cy.log('TC_29_With number component availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('be.visible').should('have.attr', 'placeholder', Locators.valueLabel);
  cy.log('TC_30_With number component placeholder-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('be.visible').should('have.attr', Locators.typeValue, Locators.numberValue);
  cy.log('TC_31_With number component  text box type password-  validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).type(Locators.MinimumLengthValue)
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).type(Locators.decimalCombinationValue)
}

// Validates input with date component
//
// @returns: void
const inputWithDateValidation = () => {
  cy.get(Locators.inputWithDateSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.inputLabel).should('be.visible').should('have.text', Locators.datefieldLabel)
  cy.log('TC_37_With date label availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('be.visible')
  cy.log('TC_38_With date component availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).should('be.visible').should('have.attr', 'min', Locators.inputDate);
  cy.log('TC_39_With date component minimum value-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('be.visible').should('have.attr', Locators.typeValue, Locators.dateValue);
  cy.log('TC_40_With date component  text box type password-  validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).should('be.visible').should('have.attr', 'max', Locators.inputDateCombination);
  cy.log('TC_41_With date component maximum value-validated successfully')
  cy.log('TC_42_With date component click and focus -  validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).type(Locators.dateCombination)
}

// Validates input with read only component
//
// @returns: void
const inputWithReadOnlyValidation = () => {
  cy.get(Locators.inputWithReadOnlySideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.inputLabel).should('be.visible').should('have.text', Locators.readyOnlyLabel)
  cy.log('TC_44_Read only label availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('be.visible')
  cy.log('TC_45_Read only component availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('be.visible').should('have.attr', 'value', Locators.readOnlyPlaceholder);
  cy.log('TC_46_Read only component placeholder-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxInput).should('be.visible').should('have.attr', Locators.typeValue, Locators.textValue);
  cy.log('TC_47_Read only component default type-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBox).should('have.attr', Locators.readOnlyvalue, Locators.readOnlyvalue)
  cy.log('TC_48_Read only component-validated successfully')
  cy.log('TC_49_Read only component click and focus -  validated successfully')
}

// Validates input with disabled component
//
// @returns: void
const inputWithDisabledValidation = () => {
  cy.get(Locators.inputWithDisabledSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.inputLabel).should('be.visible').should('have.text', Locators.disabledLabelValue)
  cy.log('TC_50_disabled label availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxDisabled).should('be.visible')
  cy.log('TC_51_disabled component availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxDisabled).should('be.visible').should('have.attr', 'value', Locators.FieldDisabledValue);
  cy.log('TC_52_disabled component placeholder-validated successfully')
  cy.log('TC_53_disabled component click and focus -  validated successfully')
  cy.iframe(Locators.iframe).find(Locators.inputTextBoxDisabled).should('have.attr', Locators.disabledValue)
  cy.log('TC_54_disabled component-validated successfully')
}

const inputValidation = (deviceType: string) => {
  inputDefaultValidation(deviceType);
  cy.get(Locators.COMPONENT_NAME).click()
  inputCombinationValidation()
  cy.get(Locators.COMPONENT_NAME).click()
  maxLengthValidation()
  inputWithPasswordValidation()
  inputWithNumberValidation()
  inputWithDateValidation()
  inputWithReadOnlyValidation()
  inputWithDisabledValidation()
}

describe('Functional Test For Input Component', () => {
  it('Visit Input component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    inputValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Input component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    inputValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Input component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    inputValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Input component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_MOBILE);
    inputValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Input component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    inputValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Input component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    inputValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Input component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    inputValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Input component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_MOBILE);
    inputValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Input component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    inputValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Input component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    inputValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Input component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_DESKTOP);
    inputValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Input component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.inputComponentLocator, DEVICE_TYPE_MOBILE);
    inputValidation(DEVICE_TYPE_MOBILE);
  })
})
