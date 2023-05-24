import 'cypress-iframe';
import { Locators } from '../footer.constants'
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
import { selectSBFramework} from '../../../../utils/functions'

const chaiColors = require('chai-colors');
chai.use(chaiColors);


// footer component default state validation
//
// @return: void
const footerValidation = (deviceType: string) => {
    cy.iframe(Locators.iframe).find(Locators.footerHeader).should('be.visible').should('have.text', Locators.footerHeaderText);;
    cy.log('Component header availablility-validated successfully')
    cy.iframe(Locators.iframe).find(Locators.footerText).should('be.visible').should('have.text', Locators.footerText);
    cy.log('Component footer text availablility-validated successfully')
    cy.iframe(Locators.iframe).find(Locators.footerTextLoc).should('be.visible').should('include.text', Locators.footerDescText)
    cy.log('Component text availablility-validated successfully')
  }

  describe('Functional Test For Input Component', () => {
    it.only('Visit Input component_storybook_Javascript Framework_Desktop resolution', () => {
      cy.viewport(DESKTOP.width, DESKTOP.height);
      selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
      footerValidation(DEVICE_TYPE_DESKTOP);
    })
  
    it('Visit Input component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
      cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
      selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
      footerValidation(DEVICE_TYPE_DESKTOP);
    })
  
    it('Visit Input component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
      cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
      selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
      footerValidation(DEVICE_TYPE_MOBILE);
    })
  
    it('Visit Input component_storybook_Javascript Framework_ in Mobile resolution', () => {
      cy.viewport(MOBILE.width, MOBILE.height);
      selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_MOBILE);
      footerValidation(DEVICE_TYPE_MOBILE);
    })
  
    it('Visit Input component_storybook_Angular Framework_Desktop resolution', () => {
      cy.viewport(DESKTOP.width, DESKTOP.height);
      selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
      footerValidation(DEVICE_TYPE_DESKTOP);
    })
  
    it('Visit Input component_storybook_Angular Framework_Tab-Landscape resolution', () => {
      cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
      selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
      footerValidation(DEVICE_TYPE_DESKTOP);
    })
  
    it('Visit Input component_storybook_Angular Framework_Tab-Portrait resolution', () => {
      cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
      selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
      footerValidation(DEVICE_TYPE_MOBILE);
    })
  
    it('Visit Input component_storybook_Angular Framework in Mobile resolution', () => {
      cy.viewport(MOBILE.width, MOBILE.height);
      selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_MOBILE);
      footerValidation(DEVICE_TYPE_MOBILE);
    })
    
  
    it('Visit Input component_storybook_React Framework_Desktop resolution', () => {
      cy.viewport(DESKTOP.width, DESKTOP.height);
      selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
    footerValidation(DEVICE_TYPE_DESKTOP);
    })
  
    it('Visit Input component_storybook_React Framework_Tab-Landscape resolution', () => {
      cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
      selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
      footerValidation(DEVICE_TYPE_DESKTOP);
    })
  
    it('Visit Input component_storybook_React Framework_Tab-Portrait resolution', () => {
      cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
      selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_DESKTOP);
      footerValidation(DEVICE_TYPE_MOBILE);
    })
  
    it('Visit Input component_storybook_React Framework in Mobile resolution', () => {
      cy.viewport(MOBILE.width, MOBILE.height);
      selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.footerComponentLocator, DEVICE_TYPE_MOBILE);
      footerValidation(DEVICE_TYPE_MOBILE);
    })
  })