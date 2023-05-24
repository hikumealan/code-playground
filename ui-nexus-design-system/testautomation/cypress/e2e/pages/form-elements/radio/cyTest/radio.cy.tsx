import 'cypress-iframe';
import { Locators } from '../radio.constants'
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

// Validates radio component default state
//
// @returns: void
const radioDefaultValidation = (deviceType: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  const radioOptions = new Map([[Locators.optionOneValue, Locators.firstOptionValue], [Locators.optionTwoValue, Locators.secondOptionValue]]);
  let idx;
  idx = 0;
  radioOptions.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.radioOption).eq(idx).should('be.visible').should('have.attr', 'value', value);
    cy.log('TC_01_Radio component availablility-validated successfully')
    cy.iframe(Locators.iframe).find(Locators.radioOption).eq(idx).should('be.visible').should('have.attr', Locators.checkedValue, Locators.checkedValue);
    cy.iframe(Locators.iframe).find(Locators.radioOption).eq(idx).should('not.be.checked')
    cy.log('TC_04_Radio component checked attribute set to false-validated successfully')
    cy.iframe(Locators.iframe).find(Locators.radioOption).eq(idx).should('be.visible').should('have.attr', Locators.disabledValue, Locators.disabledValue);
    cy.iframe(Locators.iframe).find(Locators.radioOption).eq(idx).should('not.be.disabled')
    cy.log('TC_05_Radio component disabled attribute set to false-validated successfully')
    cy.iframe(Locators.iframe).find(Locators.radioOption).eq(idx).should('be.visible').should('have.attr', Locators.requiredValue, Locators.requiredValue);
    cy.log('TC_06_Radio component required attribute set to false-validated successfully')
    cy.iframe(Locators.iframe).find(Locators.radioOptionRadioButton).eq(idx).should('be.visible').should('have.attr', 'type', Locators.radioValue);
    cy.log(`TC_07_Radio component radio component text -validated successfully for ${key}`)
    cy.iframe(Locators.iframe).find(Locators.radioOptionRadioButton).eq(idx).should('be.visible').should('have.attr', 'value', value);
    idx++
  })
  cy.iframe(Locators.iframe).find(Locators.radioOptionText).eq(0).should('have.text', Locators.optionOneValue)
  cy.iframe(Locators.iframe).find(Locators.radioOptionText).eq(1).should('have.text', Locators.optionTwoValue)
  cy.iframe(Locators.iframe).find(Locators.radioOptionRadioButton).eq(0).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.radioOptionRadioButton).eq(0).should('be.checked')
  cy.iframe(Locators.iframe).find(Locators.radioOptionRadioButton).eq(1).should('not.be.checked')
  cy.iframe(Locators.iframe).find(Locators.radioOptionRadioButton).eq(1).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.radioOptionRadioButton).eq(1).should('be.checked')
  cy.iframe(Locators.iframe).find(Locators.radioOptionRadioButton).eq(0).should('be.checked')
  cy.log('TC_08_Radio button checked and unchecked state -validated successfully')
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    radioControlValidation()
  }
}

// Validates radio group component default state
//
//
// @returns: void
const radioGroupValidation = () => {
  cy.get(Locators.radioGroupSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false);
  const radioVariant = new Map([['FrameworkReact', Locators.reactValue], ['FrameworkAngular', Locators.angularValue], ['FrameworkVue', Locators.vueValue]]);
  let idx;
  idx = 0;
  radioVariant.forEach(
    (groupVariants) => {
      cy.iframe(Locators.iframe).find(Locators.groupOption).eq(idx).should('be.visible')
      cy.log('TC_09_Group component availablility-validated successfully')
      cy.iframe(Locators.iframe).find(Locators.groupOption).eq(idx).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', groupVariants);
      cy.log('TC_10_Group components values attribute-validated successfully')
      cy.iframe(Locators.iframe).find(Locators.groupOption).eq(idx).should('not.be.disabled')
      cy.log('TC_11_Group components disabled attribute true-validated successfully')
      cy.iframe(Locators.iframe).find(Locators.groupRadioButton).eq(idx).should('be.visible').should('have.attr', 'type', Locators.radioValue);
      cy.log('TC_12_Group components radio type attribute-validated successfully')
      cy.iframe(Locators.iframe).find(Locators.groupText).eq(idx).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', groupVariants);
      cy.log('TC_13_Group components inner text labels-validated successfully')
      cy.iframe(Locators.iframe).find(Locators.groupRadioButton).eq(idx).click({ force: true })
      cy.iframe(Locators.iframe).find(Locators.groupRadioButton).eq(idx).should('be.checked')
      cy.log('TC_15_Group components checked state -validated successfully')
      idx++
    }
  )
  cy.iframe(Locators.iframe).find(Locators.selectFrameworkLabel).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.selectFraneworkValue);
  cy.log('TC_16_Group select framework label -validated successfully')
}

// Validates radio icon component default state
//
// @returns: void
const radioIconValidation = () => {
  cy.get(Locators.radioWithIconSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false);
  const variant = new Map([['variantAcceptTerm', Locators.acceptTermsValue], ['VariantDontAcceptTerm', Locators.donotAcceptTermsValue]]);
  let idx;
  idx = 0;
  variant.forEach(
    (radioIconVariants) => {
      cy.iframe(Locators.iframe).find(Locators.withIconOption).eq(idx).should('be.visible')
      cy.log('TC_17_With Icon component availablility-validated successfully')
      cy.iframe(Locators.iframe).find(Locators.withIconOption).eq(idx).should('be.visible').should('have.attr', 'name', Locators.withIconValue);
      cy.log('TC_18_With Icon radio type attribute-validated successfully')
      cy.iframe(Locators.iframe).find(Locators.withIconText).eq(idx).invoke('text').then((text) => text.trim()).should('equal', radioIconVariants);
      cy.log('TC_19_With Icon label value-validated successfully')
      idx++
    }
  )
  cy.iframe(Locators.iframe).find(Locators.agreementLabel).invoke('text').then((text) => text.trim()).should('equal', Locators.acceptTermsInnerTextValue);
  cy.log('TC_21_With Icon Radio component texts and labels-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.withIconRadioButton).eq(0).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.withIconRadioButton).eq(0).should('be.checked')
  cy.iframe(Locators.iframe).find(Locators.withIconRadioButton).eq(1).should('not.be.checked')
  cy.iframe(Locators.iframe).find(Locators.withIconRadioButton).eq(1).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.withIconRadioButton).eq(1).should('be.checked')
  cy.iframe(Locators.iframe).find(Locators.withIconRadioButton).eq(0).should('not.be.checked')
  cy.log('TC_22_With Icon Radio component checked and unchecked state -validated successfully')
}

// Validates radio variant component default state
//
// @returns: void
const radioVariantValidation = () => {
  cy.get(Locators.radioVariantsSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false);
  const variant = new Map([['VariantDefault', Locators.defaultValue], ['VariantChecked', Locators.checkedValueOption], ['VariantDisabled', Locators.disabledValueOption], ['VariantCheckedDisabled', Locators.checkedAndDisabledValue]]);
  let idx;
  idx = 0;
  variant.forEach(
    (radioVariantOptions) => {
      cy.iframe(Locators.iframe).find(Locators.variantsOption).eq(idx).should('be.visible')
      cy.log('TC_23_Variant component availablility-validated successfully')
      cy.iframe(Locators.iframe).find(Locators.variantsOption).eq(idx).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', radioVariantOptions);
      cy.log('TC_24_Variant components values attribute-validated successfully')
      cy.iframe(Locators.iframe).find(Locators.variantsOptionRadioButton).eq(idx).should('be.visible').should('have.attr', 'type', Locators.radioValue);
      cy.log('TC_26_Variant components radio type attribute-validated successfully')
      cy.iframe(Locators.iframe).find(Locators.variantsOptionText).eq(idx).invoke('text').then((text) => text.trim()).should('equal', radioVariantOptions);
      cy.log('TC_27_Variant components inner text labels-validated successfully')
      idx++
    }
  )
  cy.iframe(Locators.iframe).find(Locators.variantsOption).eq(0).should('not.be.disabled')
  cy.iframe(Locators.iframe).find(Locators.variantsOption).eq(1).should('not.be.disabled')
  cy.iframe(Locators.iframe).find(Locators.variantsOption).eq(2).should('be.visible').should('have.attr', 'name', 'variantDisabled');
  cy.iframe(Locators.iframe).find(Locators.variantsOption).eq(3).should('be.visible').should('have.attr', 'name', 'variantDisabled');
  cy.log('TC_25_Variant components disabled Enabled states-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.variantsOptionRadioButton).eq(1).should('be.checked')
  cy.log('TC_28_Variant checked by default -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.variantsOptionRadioButton).eq(3).should('be.checked')
  cy.log('TC_29_Variant checked and disabled by default -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.variantsOptionRadioButton).eq(0).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.variantsOptionRadioButton).eq(0).should('be.checked')
  cy.iframe(Locators.iframe).find(Locators.variantsOptionRadioButton).eq(1).should('not.be.checked')
  cy.iframe(Locators.iframe).find(Locators.variantsOptionRadioButton).eq(1).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.variantsOptionRadioButton).eq(1).should('be.checked')
  cy.iframe(Locators.iframe).find(Locators.variantsOptionRadioButton).eq(0).should('not.be.checked')
  cy.iframe(Locators.iframe).find(Locators.variantsOptionRadioButton).eq(2).should('be.disabled')
  cy.iframe(Locators.iframe).find(Locators.variantsOptionRadioButton).eq(2).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.variantsOptionRadioButton).eq(3).should('be.disabled')
  cy.iframe(Locators.iframe).find(Locators.variantsOptionRadioButton).eq(3).click({ force: true })
}

// Validates radio group disabled component default state
//
// @returns: void
const radioGroupDisabledValidation = () => {
  cy.get(Locators.radioGroupDisabledSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false);
  const variant = new Map([[Locators.thirdOption, Locators.firstOptionTextValue], [Locators.secondOption, Locators.secondOptionTextValue], [Locators.firstOption, Locators.thirdOptionTextValue]]);
  let idx;
  idx = 0;
  variant.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.groupDisabledOption).eq(idx).should('be.visible')
    cy.log('TC_31_Group Disabled component availablility-validated successfully')
    cy.iframe(Locators.iframe).find(Locators.groupDisabledOption).eq(idx).should('be.visible').should('have.attr', 'name', 'group1');
    cy.iframe(Locators.iframe).find(Locators.groupDisabledOption).eq(idx).should('be.visible').should('have.attr', 'value', value.toLowerCase());
    cy.log('TC_32_Group Disabled components values attribute-validated successfully')
    cy.iframe(Locators.iframe).find(Locators.groupDisabledOptionRadioButton).eq(idx).should('be.disabled')
    cy.log('TC_33_Group Disabled components disabled Enabled states-validated successfully')
    cy.iframe(Locators.iframe).find(Locators.groupDisabledOption).eq(idx).click({ force: true })
    cy.iframe(Locators.iframe).find(Locators.groupDisabledOptionRadioButton).eq(idx).should('not.be.checked')
    cy.log('TC_34_Group Disabled components checked unchecked states-validated successfully')
    cy.iframe(Locators.iframe).find(Locators.groupDisabledOptionText).eq(idx).should('have.text', key)
    idx++;
  })
}

// Validates radio group disabled component default state
//
// @returns: void
const radioGroupDisabledSelectedValidation = () => {
  cy.get(Locators.radioDisabledSelectedSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false);
  const variant = new Map([[Locators.optionOneValue, Locators.firstOptionTextValue], [Locators.optionTwoValue, Locators.secondOptionTextValue], [Locators.optionThreeValue, Locators.thirdOptionTextValue]]);
  let idx;
  idx = 0;
  variant.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.disabledSelectedOption).eq(idx).should('be.visible')
    cy.log('TC_36_ Disabled selected option component availablility-validated successfully')
    cy.iframe(Locators.iframe).find(Locators.disabledSelectedOption).eq(idx).should('be.visible').should('have.attr', 'name', 'group2');
    cy.iframe(Locators.iframe).find(Locators.disabledSelectedOption).eq(idx).should('be.visible').should('have.attr', 'value', value.toLowerCase());
    cy.iframe(Locators.iframe).find(Locators.disabledSelectedOptionRadioButton).eq(idx).should('be.visible').should('have.attr', 'type', Locators.radioValue);
    cy.log('TC_37_Disabled selected components values attribute-validated successfully')
    cy.iframe(Locators.iframe).find(Locators.disabledSelectedOptionRadioButton).eq(idx).should('be.disabled')
    cy.log('TC_38_Disabled selected components disabled Enabled states-validated successfully')
    cy.iframe(Locators.iframe).find(Locators.disabledSelectedOption).eq(idx).click({ force: true })
    cy.log('TC_39_Disabled selected components checked unchecked states-validated successfully')
    cy.iframe(Locators.iframe).find(Locators.disabledSelectedOptionText).eq(idx).should('have.text', key)
    cy.log('TC_40_Disabled selected components inner text labels-validated successfully')
    idx++;
  })
  cy.iframe(Locators.iframe).find(Locators.disabledSelectedOptionRadioButton).eq(0).should('be.checked')
  cy.iframe(Locators.iframe).find(Locators.disabledSelectedOptionRadioButton).eq(1).should('not.be.checked')
  cy.iframe(Locators.iframe).find(Locators.disabledSelectedOptionRadioButton).eq(2).should('not.be.checked')
}

// Validates radio components control
//
// @returns: void
const radioControlValidation = () => {
  for (let idx = 0; idx <= 1; idx++) {
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.radioOption).eq(idx).should('be.visible')
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.attrIdTextbox).type(Locators.attributeIdValue)
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.radioOption).eq(idx).should('be.visible').should('have.attr', 'attrid', Locators.attributeIdValue);
    cy.log('TC_Radio control attribute id -validated successfully ')
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.attrIdTextbox).clear()
  }
  cy.iframe(Locators.iframe).find(Locators.ToggleButton).eq(0).click()
  cy.iframe(Locators.iframe).find(Locators.ToggleButton).eq(0).click()
  cy.iframe(Locators.iframe).find(Locators.ToggleButton).eq(0).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.radioOption).eq(0).should('be.visible').should('have.attr', Locators.checkedValue, Locators.checkedValue);
  cy.log('TC_41_Radio control checked state -validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.ToggleButton).eq(0).click()
  cy.iframe(Locators.iframe).find(Locators.ToggleButton).eq(1).click()
  for (let idxPos = 0; idxPos <= 1; idxPos++) {
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.radioOption).eq(idxPos).should('be.visible').should('have.attr', Locators.disabledValue, Locators.disabledValue);
    cy.log('TC_42_Radio control disabled state -validated successfully ')
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
  }
  cy.iframe(Locators.iframe).find(Locators.ToggleButton).eq(1).click()
  cy.iframe(Locators.iframe).find(Locators.nameTextbox).eq(0).type('group3')
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.radioOption).eq(0).should('be.visible').should('have.attr', 'name', Locators.simpleRadioValueOptionOne);
  cy.iframe(Locators.iframe).find(Locators.radioOption).eq(1).should('be.visible').should('have.attr', 'name', Locators.simpleRadioValueOptionTwo);
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.nameTextbox).eq(0).clear().type('group2')
  cy.log('TC_43_Radio control name attribute -validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.radioOption).eq(0).should('be.visible').should('have.attr', Locators.requiredValue, Locators.requiredValue);
  cy.iframe(Locators.iframe).find(Locators.radioOption).eq(1).should('be.visible').should('have.attr', Locators.requiredValue, Locators.requiredValue);
  cy.log('TC_44_Radio control required attribute -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.radioOption).eq(0).should('be.visible').should('have.attr', 'value', Locators.firstOptionValue);
  cy.iframe(Locators.iframe).find(Locators.radioOption).eq(1).should('be.visible').should('have.attr', 'value', Locators.secondOptionValue);
  cy.log('TC_45_Radio control required attribute -validated successfully')
}

// Validates radio component overall validation for desktop. mobile and tab
//
// * @parms: deviceType: string
// @returns: void
const radioValidation = (deviceType: string) => {
  radioDefaultValidation(deviceType)
  cy.get(Locators.COMPONENT_NAME).click()
  radioGroupValidation()
  radioIconValidation()
  radioVariantValidation()
  radioGroupDisabledValidation()
  radioGroupDisabledSelectedValidation()
}

describe('Functional Test For Radio Component', () => {
  it('Visit radio component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit radio component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit radio component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit radio component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_MOBILE);
    radioValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit radio component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit radio component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit radio component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit radio component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_MOBILE);
    radioValidation(DEVICE_TYPE_MOBILE)
  })

  it('Visit radio component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit radio component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit radio component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit radio component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_MOBILE);
    radioValidation(DEVICE_TYPE_MOBILE);
  })
})
