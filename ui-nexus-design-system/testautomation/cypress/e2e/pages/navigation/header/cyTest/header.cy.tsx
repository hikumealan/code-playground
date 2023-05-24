import 'cypress-iframe';
import { Locators } from '../header.constants'
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

// Validates header component default state,background color and clickable state
//
// @returns: void
const headerDefaultValidation = () => {
  cy.wait(10000)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.headerComponent).should('be.visible')
  cy.log('TC_01_Header Component availability -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.headerLogo).should('be.visible')
  cy.log('TC_02_Header Logo Component availability -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.headerNexusLabel).invoke('text').should('equal', Locators.nexusLabel);
  const attributes = new Map([
    [Locators.fontSizeLabel, Locators.fontSizeValue],
    [Locators.fontfamilyLabel, Locators.fontfamilyValue],
    [Locators.fontWeightLabel, Locators.fontWeightValue],
    [Locators.letterSpacingLabel, Locators.letterSpacingValue]
  ]);
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.headerNexusIconSymbol).should('be.visible').should('have.attr', key, value);
    cy.log(`TC_Header Component attributes-validated successfully for ${key}`)
  })
}

// Validates header menu default validation
//
// @returns: void
const headerMenuValidation = (deviceType: string) => {
  if (deviceType !== DEVICE_TYPE_DESKTOP) {
  cy.iframe(Locators.iframe).find(Locators.headercomponentMobile).click({force:true})  
  }
  cy.iframe(Locators.iframe).find(Locators.headerMenuList).should('be.visible')
  cy.iframe(Locators.iframe).find(Locators.headerMenuItem).eq(0).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.itemOneValue);
  cy.iframe(Locators.iframe).find(Locators.headerMenuItem).eq(1).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.itemTwoValue);
  cy.iframe(Locators.iframe).find(Locators.headerMenuItem).eq(2).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.itemThreeValue);
  cy.log('TC_04_Header Component inner texts -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.headerMenuItem).eq(0).invoke('attr', 'href').should('eq', Locators.headerLinkValue)
  cy.iframe(Locators.iframe).find(Locators.headerMenuItem).eq(1).invoke('attr', 'href').should('eq', Locators.headerLinkValue)
  cy.iframe(Locators.iframe).find(Locators.headerMenuItem).eq(2).invoke('attr', 'href').should('eq', Locators.headerLinkValue)
}

// Validates header with avtar default state
//
// @returns: void
const headerWithAvatarValidation = (deviceType: string) => {
    cy.get(Locators.headerWithAvatarSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false);
    headerDefaultValidation()
    if (deviceType !== DEVICE_TYPE_DESKTOP) {
        cy.iframe(Locators.iframe).find(Locators.headercomponentMobile).click({force:true})  
        }
    cy.iframe(Locators.iframe).find(Locators.headerMenuList).should('be.visible')
    cy.iframe(Locators.iframe).find(Locators.headerMenuItem).eq(0).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.homeHeader);
    cy.iframe(Locators.iframe).find(Locators.headerMenuItem).eq(1).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.dashboardHeader);
    cy.iframe(Locators.iframe).find(Locators.headerMenuItem).eq(0).invoke('attr', 'href').should('eq', Locators.headerLinkValue)
    cy.iframe(Locators.iframe).find(Locators.headerMenuItem).eq(1).invoke('attr', 'href').should('eq', Locators.headerLinkValue)
    cy.iframe(Locators.iframe).find(Locators.headerWithAvatar).should('be.visible')
    cy.iframe(Locators.iframe).find(Locators.avatarImg).invoke('attr', 'src').should('eq', Locators.avatarSrc)
    cy.iframe(Locators.iframe).find(Locators.avatarImg).invoke('attr', 'class').should('eq', Locators.avatarClass)
    cy.iframe(Locators.iframe).find(Locators.avatarImgIntials).invoke('text').then((text) => text.trim()).should('equal', Locators.avatarInitialsLabel);
    cy.iframe(Locators.iframe).find(Locators.avatarImgStatus).invoke('attr', 'class').should('eq', Locators.avatarStatusClass)
    cy.iframe(Locators.iframe).find(Locators.avatarImgStatus).should('have.css', 'background-color', Locators.backgroundGreenColor)
    cy.iframe(Locators.iframe).find(Locators.avatarImgName).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.avatarValue);  
}

// Validates header component overall validation for desktop, mobile and tab
//
// @returns: void
const headerValidation = (deviceType: string) => {
    headerDefaultValidation()
    headerMenuValidation(deviceType)
    headerWithAvatarValidation(deviceType)
}

describe('Functional Test For Header component', () => {
  it('Visit Header component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Header component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Header component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Header component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_MOBILE);
    headerValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Header component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Header component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Header component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Header component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_MOBILE);
    headerValidation(DEVICE_TYPE_MOBILE)
  })

  it('Visit Header component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Header component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Header component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_DESKTOP);
    headerValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Header component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.headerComponentLocator, DEVICE_TYPE_MOBILE);
    headerValidation(DEVICE_TYPE_MOBILE);
  })

})
