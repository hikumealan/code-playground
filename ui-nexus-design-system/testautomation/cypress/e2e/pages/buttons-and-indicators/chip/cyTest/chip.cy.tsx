import 'cypress-iframe';
import { Locators } from '../chip.constants'
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

// Validates chip default state component
//
// @parms: deviceType: string
// @return: void
const chipDefaultValidation = (deviceType: string) => {
  cy.iframe(Locators.iframe).find(Locators.chip).eq(0).should('be.visible')
  cy.log('chip component availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.chip).eq(0).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.chipTextValue);
  cy.log('chip component inner text-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.chip).eq(0).should('have.css', 'background-color', Locators.blackColorValue)
  cy.log('chip component background color-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.chip).eq(0).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.chip).eq(0).invoke('show').click({ force: true });
  const attribute = new Map([['Varianterror', 'error'], ['Variantsuccess', 'success'], ['Variantremovable', 'removable']]);
  attribute.forEach(
    (variant) => {
      cy.iframe(Locators.iframe).find(Locators.chipButton).should('have.attr', variant, Locators.falseValue)
    }
  )
  cy.iframe(Locators.iframe).find(Locators.chipButton).should('have.attr', 'disabled')
  cy.iframe(Locators.iframe).find(Locators.chipButton).should('not.be.disabled')
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    chipControlValidation();
  }
}

// Validates chip component controls
//
// @return: void
const chipControlValidation = () => {
  const chipDisabled = new Map([
    ['be.disabled', Locators.whiteColorValue],
    ['not.be.disabled', Locators.blackColorValue]
  ]);
  chipDisabled.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.chipDisabled).click()
    cy.iframe(Locators.iframe).find(Locators.chip).eq(0).should(key)
    cy.iframe(Locators.iframe).find(Locators.chip).eq(0).should('have.css', 'background-color', value)
  })
  const chipError = new Map([
    [Locators.falseValue, Locators.blackColorValue],
    [Locators.trueValue, Locators.blackColorValue]
  ]);
  chipError.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.chipButton).should('have.attr', 'error', key)
    cy.iframe(Locators.iframe).find(Locators.chip).eq(0).should('have.css', 'background-color', value)
    cy.iframe(Locators.iframe).find(Locators.chipButton).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.chipTextValue);
    cy.iframe(Locators.iframe).find(Locators.chipError).click()
  })
  cy.iframe(Locators.iframe).find(Locators.chipButton).should('have.attr', 'removable', Locators.falseValue)
  cy.iframe(Locators.iframe).find(Locators.chipRemovable).click()
  cy.iframe(Locators.iframe).find(Locators.chipButton).should('have.attr', 'removable', Locators.trueValue)
  cy.iframe(Locators.iframe).find(Locators.chip).eq(0).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.chipTextValue);
  cy.iframe(Locators.iframe).find(Locators.chipCloseIcon).eq(0).should('be.visible')
  cy.iframe(Locators.iframe).find(Locators.chipRemovable).click()
  cy.iframe(Locators.iframe).find(Locators.chipButton).should('have.attr', 'success', Locators.falseValue)
  cy.iframe(Locators.iframe).find(Locators.chipSuccess).click()
  cy.iframe(Locators.iframe).find(Locators.chipButton).should('have.attr', 'success', Locators.trueValue)
  cy.iframe(Locators.iframe).find(Locators.chipButton).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.chipTextValue);
  cy.iframe(Locators.iframe).find(Locators.chipText).clear().type('Chip Sample Text')
  cy.iframe(Locators.iframe).find(Locators.chipButton).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.chipSampleValue);
  cy.iframe(Locators.iframe).find(Locators.chipText).clear().type(Locators.chipTextValue)
  cy.iframe(Locators.iframe).find(Locators.chipButton).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.chipTextValue);
}

// Validates chip Group component
//
// @return: void
const chipGroupValidation = () => {
  cy.get(Locators.chipGroupSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.chipGroup).eq(0).should('be.visible')
  const chipGroup = new Map([
    [Locators.chipOneValue, Locators.blackColorValue],
    [Locators.chipTwoValue, Locators.blackColorValue],
    [Locators.chipThreeValue, Locators.blackColorValue]
  ]);
  let idx;
  idx = 0;
  chipGroup.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.chip).eq(idx).should('be.visible').should('have.text', key)
    cy.iframe(Locators.iframe).find(Locators.chip).eq(idx).should('have.css', 'background-color', value)
    idx++;
  })
}

// Validates chip variant component
//
// @return: void
const chipVariantValidation = () => {
  cy.get(Locators.chipVariantSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  const chipVariant = new Map([
    [Locators.defaultValue, Locators.blackColorValue],
    [Locators.disabledValue, Locators.whiteColorValue]
  ]);
  let idx;
  idx = 0;
  chipVariant.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.chip).eq(idx).should('be.visible').should('have.text', key)
    cy.iframe(Locators.iframe).find(Locators.chip).eq(idx).should('have.css', 'background-color', value)
    idx++;
  })
  cy.iframe(Locators.iframe).contains(Locators.chipErrorLocator).eq(0).should('be.visible').should('have.text', Locators.errorValue)
  cy.iframe(Locators.iframe).contains(Locators.chipErrorLocator).eq(0).should('have.css', 'background-color', Locators.redColorValue)
  cy.iframe(Locators.iframe).contains(Locators.chipSuccessLocator).eq(0).should('be.visible').should('have.text', Locators.successValue)
  cy.iframe(Locators.iframe).contains(Locators.chipSuccessLocator).eq(0).should('have.css', 'background-color', Locators.greenColorValue)
}

// Validates chip dark theme component
//
// @return: void
const chipDarkThemeValidation = () => {
  cy.get(Locators.chipDarkThemeSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.chip).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.chipOnDarkThemeValue);
  cy.iframe(Locators.iframe).find(Locators.chipCloseIcon).should('be.visible')
  cy.iframe(Locators.iframe).find(Locators.chip).should('have.css', 'background-color', Locators.whiteColorValue)
}

// Validates chip removable component
//
// @return: void
const chipRemovableValidation = () => {
  cy.get(Locators.chipRemovableSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.removableCheckboxChecked).should('be.visible')
  cy.iframe(Locators.iframe).find(Locators.removableCheckboxInput).should('have.attr', 'aria-checked', Locators.trueValue)
  cy.iframe(Locators.iframe).find(Locators.removableCheckboxInput).should('have.attr', 'type', 'checkbox')
  cy.iframe(Locators.iframe).find(Locators.chip).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.itemValueLocator);
  cy.iframe(Locators.iframe).find(Locators.chipCloseIcon).should('be.visible')
  cy.iframe(Locators.iframe).find(Locators.chip).should('have.css', 'background-color', Locators.blackColorValue)
  cy.iframe(Locators.iframe).find(Locators.removableCheckboxChecked).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.removableCheckboxInput).should('have.attr', 'aria-checked', Locators.falseValue)
  cy.iframe(Locators.iframe).find(Locators.removableCheckboxChecked).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.removableCheckboxInput).should('have.attr', 'aria-checked', Locators.trueValue)
  cy.iframe(Locators.iframe).find(Locators.chip).should('have.css', 'background-color', Locators.blackColorValue)
  cy.iframe(Locators.iframe).find(Locators.chip).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.itemValueLocator);
  cy.iframe(Locators.iframe).find(Locators.chipCloseIcon).should('be.visible')
}

// Validates chip component overall validation for desktop, mobile and tab
//
// @parms: deviceType: string
// @return: void
const chipValidation = (deviceType: string) => {
  chipDefaultValidation(deviceType);
  cy.get(Locators.COMPONENT_NAME).click()
  chipGroupValidation();
  chipVariantValidation();
  chipDarkThemeValidation();
  chipRemovableValidation();
}

describe('Functional Test For Chip Component', () => {
  it('Visit Chip component__storybook_JAVASCRIPT Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Chip component__storybook_JAVASCRIPT Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Chip component__storybook_JAVASCRIPT Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipValidation(DEVICE_TYPE_MOBILE)
  })

  it('Visit Chip component__storybook_JAVASCRIPT Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_MOBILE);
    chipValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Chip component__storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Chip component__storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Chip component__storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Chip component__storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_MOBILE);
    chipValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Chip component__storybook_REACT Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Chip component__storybook_REACT Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Chip component__storybook_REACT Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_DESKTOP);
    chipValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Chip component__storybook_REACT Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.chipComponentLocator, DEVICE_TYPE_MOBILE);
    chipValidation(DEVICE_TYPE_MOBILE);
  })
})
