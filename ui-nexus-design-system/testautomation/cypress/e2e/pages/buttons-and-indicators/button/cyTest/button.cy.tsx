import 'cypress-iframe';
import { Locators } from '../button.constants'
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

// Validates Button  Component Default State
//
// @return: void
const buttonDefaultValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.button).eq(0).should('be.visible')
  cy.log('button component availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.buttonComponent).eq(2).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.clickMeValue);
  cy.log('button component inner text-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.buttonComponent).eq(2).should('have.css', 'background-color', Locators.blackColorValue)
  cy.log('button component background color-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.buttonComponent).eq(2).click()
  cy.iframe(Locators.iframe).find(Locators.buttonComponent).eq(2).invoke('show').click();
  cy.log('button component mousehover-validated successfully')
}

// Validates Button size component
//
// @return: void
const buttonSizeValidation = () => {
  const size = new Map([
    [Locators.mediumButtonValue, Locators.mediumButton],
    [Locators.largeButtonValue, Locators.largeButton],
    [Locators.fluidButtonValue, Locators.fluidButton],
    [Locators.linkValue, Locators.link]
  ]);
  size.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(value).eq(0).should('be.visible').should('have.text', key)
  })
  const BgColor = new Map([
    [Locators.mediumButton, Locators.blackColorValue],
    [Locators.largeButton, Locators.blackVariantColorValue],
    [Locators.fluidButton, Locators.blackColorValue]
  ]);
  BgColor.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(key).eq(0).should('have.css', 'background-color', value)
  })
}

// Validates Button state component
//
// @return: void
const buttonStateValidation = () => {
  const state = new Map([
    [Locators.defaultValue, Locators.defaultButton],
    [Locators.primaryValue, Locators.primaryButton],
    [Locators.warnValue, Locators.warnButton],
    [Locators.linkValue, Locators.link]
  ]);
  state.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(value).eq(0).should('be.visible').should('have.text', key)
  })
  const BgColor = new Map([
    [Locators.defaultButton, Locators.blackColorValue],
    [Locators.primaryButton, Locators.blackVariantColorValue],
    [Locators.warnButton, Locators.redColorValue]
  ]);
  BgColor.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(key).should('have.css', 'background-color', value)
  })
}

// Validates Button dark theme component
//
// @return: void
const buttonDarkThemeValidation = () => {
  const darktheme = new Map([
    [Locators.defaultValue, Locators.defaultButton],
    [Locators.linkValue, Locators.darkThemeLink],
    [Locators.dangerValue, Locators.darkThemeDanger],
    [Locators.primaryValue, Locators.darkThemePrimary]
  ]);
  darktheme.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(value).eq(0).should('be.visible').should('have.text', key)
  })
  const BgColor = new Map([
    [Locators.defaultButton, Locators.blackColorValue],
    [Locators.darkThemeDanger, Locators.redColorValue],
    [Locators.darkThemePrimary, Locators.whiteColorValue]
  ]);
  BgColor.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(key).eq(0).should('have.css', 'background-color', value)
  })
  cy.iframe(Locators.iframe).find(Locators.darkThemeLink).should('have.attr', 'href', './?path=/docs/component-buttons-and-indicators-button--d-dark-theme')
}

// Validates Button disabled component
//
// @return: void
const buttonDisabledValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.disabledButton).should('be.visible').should('have.text', Locators.disabledButtonValue)
  cy.iframe(Locators.iframe).find(Locators.disabledButton).should('be.disabled')
}

// Validates Button floating component
//
// @return: void
const buttonFloatingValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.settingsIcon).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.settingsValue);
  cy.iframe(Locators.iframe).find(Locators.settingsFloatingIcon).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.settingsValue);
}

// Validates Button tabbed component
//
// @return: void
const buttonTabbedValidation = () => {
  cy.get(Locators.COMPONENT_NAME).click()
  cy.get(Locators.tabbedSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  const tabbed = new Map([
    [Locators.showValue, Locators.hideButton],
    [Locators.hideValue, Locators.hideButton]
  ]);
  const idx = 0
  tabbed.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(value).eq(idx).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', key);
    cy.iframe(Locators.iframe).find(Locators.hideButtonSize).eq(idx).should('have.attr', 'size', Locators.sizeValue)
  })
  const Buttons = new Map([
    [Locators.onValue, Locators.onButton],
    [Locators.offValue, Locators.onButton]
  ]);
  let size;
  size = 0
  Buttons.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(value).eq(size).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', key);
    cy.iframe(Locators.iframe).find(Locators.onButtonSize).eq(size).should('have.attr', 'size', Locators.sizeValue)
    size++
  })
  const backgrouncolor = new Map([
    [Locators.hideButton, Locators.redColorValue],
    [Locators.hideButton, Locators.greenColorValue]
  ]);
  let index;
  index = 0
  backgrouncolor.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(key).eq(index).should('have.css', 'background-color', value)
    index++;
  });
  const bgcolor = new Map([
    [Locators.onButton, Locators.blackColorValue],
    [Locators.onButton, Locators.blackVariantColorValue]
  ]);
  let id;
  id = 0
  bgcolor.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(key).eq(id).should('have.css', 'background-color', value)
    id++
  })
}

// Validates Button  component  for desktop mobile and tab
//
// @returns: void
const buttonValidation = () => {
  buttonDefaultValidation()
  buttonSizeValidation()
  buttonStateValidation()
  buttonDarkThemeValidation()
  buttonDisabledValidation()
  buttonFloatingValidation()
  buttonTabbedValidation()
};

describe('Functional Test For Button Component', () => {
  it('Visit Button component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonComponentLocator, DEVICE_TYPE_DESKTOP);
    buttonValidation();
  })

  it('Visit Button component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonComponentLocator, DEVICE_TYPE_DESKTOP);
    buttonValidation();
  })

  it('Visit Button component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonComponentLocator, DEVICE_TYPE_DESKTOP);
    buttonValidation();
  })

  it('Visit Button component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonComponentLocator, DEVICE_TYPE_MOBILE);
    buttonValidation();
  })

  it('Visit Button component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonComponentLocator, DEVICE_TYPE_DESKTOP);
    buttonValidation();
  })

  it('Visit Button component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonComponentLocator, DEVICE_TYPE_DESKTOP);
    buttonValidation();
  })

  it('Visit Button component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonComponentLocator, DEVICE_TYPE_DESKTOP);
    buttonValidation();
  })

  it('Visit Button component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonComponentLocator, DEVICE_TYPE_MOBILE);
    buttonValidation();
  })

  it('Visit Button component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonComponentLocator, DEVICE_TYPE_DESKTOP);
    buttonValidation();
  })

  it('Visit Button component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonComponentLocator, DEVICE_TYPE_DESKTOP);
    buttonValidation();
  })

  it('Visit Button component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonComponentLocator, DEVICE_TYPE_DESKTOP);
    buttonValidation();
  })

  it('Visit Button component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.buttonComponentLocator, DEVICE_TYPE_MOBILE);
    buttonValidation();
  })
})
