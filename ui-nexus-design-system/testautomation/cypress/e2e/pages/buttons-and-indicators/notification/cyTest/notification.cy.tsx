import 'cypress-iframe';
import { Locators } from '../notification.constants'
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

// Notification component default state validation
// Validates default display label text , background color and default variant
//
// @parms: deviceType: string
// @return: void
const defaultNotificationValidation = (deviceType: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.notificationComponent).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.notificationMessageValue);
  cy.iframe(Locators.iframe).find(Locators.notificationIcon).should('be.visible')
  cy.iframe(Locators.iframe).find(Locators.notificationComponent).should('have.css', 'background-color', Locators.notificationBgColorValue)
  cy.log('TC_01_notification component availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.notificationComponentDefault).should('have.attr', 'variant', Locators.infoValue);
  cy.log('TC_02_default variant-validated successfully')
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    notificationControlValidation();
  }
}

// Validates Notification control variants
// Validates states like error , success, warning and info
//
// @return: void
const notificationControlValidation = () => {
  const variant = new Map([
    [Locators.errorValue, Locators.notificationError],
    [Locators.successValue, Locators.notificationSuccess],
    [Locators.warningValue, Locators.notificationWarning],
    [Locators.infoValue, Locators.notificationComponent]
  ]);
  variant.forEach((value, key, idx) => {
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.variant).select(key)
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(value).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.notificationMessageValue);
    cy.iframe(Locators.iframe).find(Locators.notificationComponentDefault).should('have.attr', 'variant', key);
    cy.log(`TC_notification  variant-validated successfully ${key} ${idx}`);
  })
}

// Validates Notification overlay component availability, default state and inner label texts
//
// @return: void
const notificationOverlayValidation = () => {
  cy.get(Locators.COMPONENT_NAME).click()
  cy.get(Locators.notificationOverlay).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.notificationCard).should('be.visible').should('have.attr', 'clickable', Locators.falseValue);
  cy.iframe(Locators.iframe).find(Locators.notificationCardImage).should('be.visible')
  cy.iframe(Locators.iframe).find(Locators.notificationCardImg).should('be.visible')
  cy.iframe(Locators.iframe).find(Locators.notificationImageTitle).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.notificationNameValue);
  cy.iframe(Locators.iframe).find(Locators.notificationImageButton).should('be.visible')
  cy.log('TC_06_notification overlay-validated successfully')
}

// Validates notification variant component
// Vlaidates notofication variants - info, success, warning and error
//
// @return: void
const notificationVariantValidation = () => {
  cy.get(Locators.notificationVariants).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false);
  [Locators.notificationInfoText, Locators.notificationSuccessText, Locators.notificationWarningText, Locators.notificationErrorText].forEach(
    (notificationMessageState, idx) => {
      cy.iframe(Locators.iframe).find(Locators.notificationVariant).eq(idx).should('be.visible')
      cy.iframe(Locators.iframe).find(Locators.notificationVariant).eq(idx).invoke('text').then((text) => text.trim()).should('equal', notificationMessageState);
      cy.iframe(Locators.iframe).find(Locators.notificationVariantIcon).eq(idx).should('be.visible')
      cy.log(`TC_notification variant information-validated successfully ${notificationMessageState} ${idx}`);
    }
  )
}

// Notification component overall validation for desktop mobile and tab
//
// @parms: deviceType: string
// @return: void
const notificationValidation = (deviceType: string) => {
  defaultNotificationValidation(deviceType);
  notificationOverlayValidation();
  notificationVariantValidation();
}

describe('Functional Test For Notification Component', () => {
  it('Visit Notification component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationValidation(DEVICE_TYPE_DESKTOP);
  })
  it('Visit Notification component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationValidation(DEVICE_TYPE_DESKTOP);
  })
  it('Visit Notification component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationValidation(DEVICE_TYPE_MOBILE);
  })
  it('Visit Notification component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_MOBILE);
    notificationValidation(DEVICE_TYPE_MOBILE);
  })
  it('Visit Notification component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationValidation(DEVICE_TYPE_DESKTOP);
  })
  it('Visit Notification component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationValidation(DEVICE_TYPE_DESKTOP);
  })
  it('Visit Notification component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationValidation(DEVICE_TYPE_MOBILE);
  })
  it('Visit Notification component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_MOBILE);
    notificationValidation(DEVICE_TYPE_MOBILE);
  })
  it('Visit Notification component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationValidation(DEVICE_TYPE_DESKTOP);
  })
  it('Visit Notification component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationValidation(DEVICE_TYPE_DESKTOP);
  })
  it('Visit Notification component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_DESKTOP);
    notificationValidation(DEVICE_TYPE_MOBILE);
  })
  it('Visit Notification component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.notificationComponentLocator, DEVICE_TYPE_MOBILE);
    notificationValidation(DEVICE_TYPE_MOBILE);
  })
})
