import 'cypress-iframe';
import { Locators } from '../pinentry.constants'
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

// Validates pinentry default state
//
// @returns: void
const pinentryDefaultValidation = (deviceType: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  const attributes = new Map([
    [Locators.AttributeTypeValue, Locators.AttributeTextValue],
    [Locators.AttributeLengthValue, Locators.lengthMidInputValue]
  ]);
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.pinentryComponent).should('be.visible').should('have.attr', key, value);
    cy.log(`TC_01_default state of pin entry-validated successfully for attribute ${key}`);
  })
  for (let idx = 0; idx < 3; idx++) {
    cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idx).should('have.attr', Locators.AttributeMaxLengthValue, Locators.lengthMinInputValue);
    cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idx).should('have.attr', Locators.AttributeTypeValue, Locators.AttributeTextValue);
    cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idx).type(Locators.lengthMinInputValue)
    cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idx).should('be.visible').invoke('val').should('equal', Locators.lengthMinInputValue);
    cy.log('TC_default state of pin entry text boxes-validated successfully')
  }
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    pinentryControlValidation()
  }
}

// Validates pinentry controls
//
// @returns: void
const pinentryControlValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.toggle).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.pinentryComponent).should('have.attr', 'disabled');
  cy.log('TC_03_disabled state of pin entry text boxes-validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.toggle).click()
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.lengthTextbox).clear().type(Locators.lengthMaxInputValue)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.pinentryComponent).should('have.attr', Locators.AttributeLengthValue, Locators.lengthMaxInputValue);
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.lengthTextbox).clear().type(Locators.lengthMidInputValue)
  cy.log('TC_04_Length of pin entry text boxes-validated successfully');
  const variant = new Map([['Varianttext', Locators.AttributeTextValue], ['Variantpassword', Locators.AttributePasswordValue], ['Varianttel', Locators.AttributeTelValue]]);
  variant.forEach(
    (pinentryTypes, idx) => {
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(Locators.type).select(pinentryTypes)
      clickElementIdentifiedByLocator(CommonLocators.canvas, false)
      cy.iframe(Locators.iframe).find(Locators.pinentryComponent).should('have.attr', Locators.AttributeTypeValue, pinentryTypes);
      for (let idxPos = 0; idxPos < 3; idxPos++) {
        cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idxPos).type(Locators.lengthMinInputValue)
        cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idxPos).should('be.visible').invoke('val').should('equal', Locators.lengthMinInputValue);
      }
      cy.log(`TC_Type  of pin entry text boxes-validated successfully ${pinentryTypes}${idx}`)
    }
  )
}

// Validates pinentry disabled component
//
// @returns: void
const pinentryDisabledValidation = () => {
  cy.get(Locators.COMPONENT_NAME).click()
  cy.get(Locators.disabledSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  for (let idx = 0; idx <= 3; idx++) {
    cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idx).should('be.disabled')
  }
  cy.iframe(Locators.iframe).find(Locators.pinentryComponent).should('be.visible').should('have.attr', 'disabled', 'disabled');
  cy.log('TC_08_disabled pin entry-validated successfully')
}

// Validates pinentry disabled component
//
// @returns: void
const pinentryCustomLengthValidation = () => {
  cy.get(Locators.withLengthSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.pinentryComponent).should('be.visible').should('have.attr', Locators.AttributeLengthValue, Locators.lengthInputValue);
  cy.log('TC_09_Custom length pin entry-validated successfully')
  for (let idx = 0; idx < 6; idx++) {
    cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idx).type(Locators.lengthMinInputValue)
    cy.iframe(Locators.iframe).find(Locators.pinentryInput).eq(idx).should('be.visible').invoke('val').should('equal', Locators.lengthMinInputValue);
  }
}

// Validates pinentry component for tab mobile and desktop
//
// @parms: testname: string,deviceType: string
// @returns: void
const pinentryValidation = (deviceType: string) => {
  pinentryDefaultValidation(deviceType)
  pinentryDisabledValidation()
  pinentryCustomLengthValidation()
}

describe('Functional Test For Pin Entry', () => {
  it('Visit pinentry component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit pinentry component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit pinentry component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit pinentry component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_MOBILE);
    pinentryValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit pinentry component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit pinentry component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit pinentry component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit pinentry component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_MOBILE);
    pinentryValidation(DEVICE_TYPE_MOBILE)
  })

  it('Visit pinentry component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit pinentry component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit pinentry component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_DESKTOP);
    pinentryValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit pinentry component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.radioComponentLocator, DEVICE_TYPE_MOBILE);
    pinentryValidation(DEVICE_TYPE_MOBILE);
  })
})
