import 'cypress-iframe';
import { Locators } from '../dropdown.constants'
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

const chaiColors = require('chai-colors');
chai.use(chaiColors);


// Dropdown component default state validation
//
// @return: void
const dropdownDefaultValidation = (deviceType: string) => {
    cy.iframe(Locators.iframe).find(Locators.dropdownHeader).should('be.visible').should('have.text', Locators.header)
    cy.log('Component header availablility-validated successfully')
    cy.iframe(Locators.iframe).find(Locators.dropdownTextLoc).should('be.visible').should('include.text', Locators.dropdownText)
    cy.log('Component text availablility-validated successfully')
    const dropdownIcon = cy.iframe(Locators.iframe).find(Locators.dropdownIcon)
    dropdownIcon.should('be.visible').click({force:true})
    const dropdownList = cy.iframe(Locators.iframe).find(Locators.dropdownList)
    dropdownList.should('be.visible')

    const listoptions = ['Option 1', 'Option 2', 'Option 3'] 
    dropdownList.each(($el, index) => {
        cy.log("loop index: " + index)
        listoptions.forEach(function (listoptionsNe) {
            dropdownIcon.click({force:true})
        cy.wrap($el).contains(listoptionsNe).click({force:true})
        });
     })
}
  // Dropdown component props state validation
//
// @return: void
const dropdownPropsInputValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  const attributes = new Map([
    [Locators.height, Locators.heightValue],
    [Locators.width, Locators.widthValue]
  ]);
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.dropdownIcon).should('be.visible').should('have.attr', key, value);
    cy.log(`TC_Dropdown component height and width -  validated successfully ${key}`);
  })
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  const type = new Map([['typeBasic', Locators.typeBasicValue], ['typeSelect', Locators.typeSelectValue]]);
  type.forEach(
  (variant, idx) => {
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.dropdownTypeSelect).select(variant)
      .should('be.visible').should('have.attr', Locators.text, variant);
    cy.log(`TC_Dropdown control type - validated successfully for ${variant} ${idx}`);
  })
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlShow).check().uncheck() 
}

// Dropdown component with button default state validation
//
// @return: void
const dropdownButtonValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.withButtonPrim).should('be.visible')
    .should('have.css', 'background-color').and('be.colored', '#484a4c');
  cy.iframe(Locators.iframe).find(Locators.withButtonSec).should('be.visible')
    .should('have.css', 'background-color').and('be.colored', '#da3510');
  const primOpts = new Map([['add', Locators.addValue], ['block', Locators.blockValue]]);
  primOpts.forEach(
  (variant, idx) => {
    cy.iframe(Locators.iframe).find(Locators.primOptsList).select(variant)
    cy.iframe(Locators.iframe).find(Locators.primOptsList).should('be.visible').should('have.attr', Locators.text, variant);
    cy.log(`TC_Dropdown control with button primary Options -validated successfully for ${variant} ${idx}`);
    })
  const primOptsDisabled = new Map([['primaryOptions', Locators.primaryOptionsValue], ['delete', Locators.deleteValue]]);
  primOptsDisabled.forEach(
  (variant, idx) => {
    cy.iframe(Locators.iframe).find(Locators.primOptsList).should('be.visible').should('be.disabled');
    cy.log(`TC_Dropdown control with button primary Options disabled -validated successfully for ${variant} ${idx}`);
    })
  const secOpts = new Map([['save', Locators.saveValue], ['load', Locators.loadValue]]);
  secOpts.forEach(
  (variant, idx) => {
    cy.iframe(Locators.iframe).find(Locators.secOptsList).select(variant)
    cy.iframe(Locators.iframe).find(Locators.secOptsList).should('be.visible').should('have.attr', Locators.text, variant);
    cy.log(`TC_Dropdown control with button secondary Options -validated successfully for ${variant} ${idx}`);
    })
  const secOptsDisabled = new Map([['secondaryOptions', Locators.secondaryOptionsValue], ['edit', Locators.editValue]]);
  secOptsDisabled.forEach(
  (variant, idx) => {
    cy.iframe(Locators.iframe).find(Locators.secOptsList).should('be.visible').should('be.disabled');
    cy.log(`TC_Dropdown control with button secondary Options disabled -validated successfully for ${variant} ${idx}`);
    })
}

// Dropdown component with select default state validation
//
// @return: void
const dropdownSelectValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.dropdownTextLoc).should('be.visible').should('include.text', Locators.dropdownText)
  cy.log('Component text availablility-validated successfully')
  const dropdownIconRight = cy.iframe(Locators.iframe).find(Locators.dropdownIconRight)
  dropdownIconRight.should('be.visible').click({force:true})
  const dropdownListRight = cy.iframe(Locators.iframe).find(Locators.dropdownListRight)
  dropdownListRight.should('be.visible')
  const listoptionsRight = ['Option 1', 'Option 2', 'Option 3'] 
  dropdownListRight.each(($el, index) => {
      cy.log("loop index: " + index)
      listoptionsRight.forEach(function (listoptionsNe) {
          dropdownIconRight.click({force:true})
      cy.wrap($el).contains(listoptionsNe).click({force:true})
      });
   })
}

const dropdownValidation = (deviceType: string) => {
  dropdownDefaultValidation(deviceType);
  dropdownPropsInputValidation()
  dropdownButtonValidation()
  dropdownSelectValidation()
}

  describe('Functional Test For Input Component', () => {
    it.only('Visit Input component_storybook_Javascript Framework_Desktop resolution', () => {
      cy.viewport(DESKTOP.width, DESKTOP.height);
      selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
      dropdownValidation(DEVICE_TYPE_DESKTOP);
    })
  
    it('Visit Input component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
      cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
      selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
      dropdownDefaultValidation(DEVICE_TYPE_DESKTOP);
    })
  
    it('Visit Input component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
      cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
      selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
      dropdownDefaultValidation(DEVICE_TYPE_MOBILE);
    })
  
    it('Visit Input component_storybook_Javascript Framework_ in Mobile resolution', () => {
      cy.viewport(MOBILE.width, MOBILE.height);
      selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_MOBILE);
      dropdownDefaultValidation(DEVICE_TYPE_MOBILE);
    })
  
    it('Visit Input component_storybook_Angular Framework_Desktop resolution', () => {
      cy.viewport(DESKTOP.width, DESKTOP.height);
      selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
      dropdownDefaultValidation(DEVICE_TYPE_DESKTOP);
    })
  
    it('Visit Input component_storybook_Angular Framework_Tab-Landscape resolution', () => {
      cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
      selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
      dropdownDefaultValidation(DEVICE_TYPE_DESKTOP);
    })
  
    it('Visit Input component_storybook_Angular Framework_Tab-Portrait resolution', () => {
      cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
      selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
      dropdownDefaultValidation(DEVICE_TYPE_MOBILE);
    })
  
    it('Visit Input component_storybook_Angular Framework in Mobile resolution', () => {
      cy.viewport(MOBILE.width, MOBILE.height);
      selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_MOBILE);
      dropdownDefaultValidation(DEVICE_TYPE_MOBILE);
    })
    
  
    it('Visit Input component_storybook_React Framework_Desktop resolution', () => {
      cy.viewport(DESKTOP.width, DESKTOP.height);
      selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
      dropdownDefaultValidation(DEVICE_TYPE_DESKTOP);
    })
  
    it('Visit Input component_storybook_React Framework_Tab-Landscape resolution', () => {
      cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
      selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
      dropdownDefaultValidation(DEVICE_TYPE_DESKTOP);
    })
  
    it('Visit Input component_storybook_React Framework_Tab-Portrait resolution', () => {
      cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
      selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_DESKTOP);
      dropdownDefaultValidation(DEVICE_TYPE_MOBILE);
    })
  
    it('Visit Input component_storybook_React Framework in Mobile resolution', () => {
      cy.viewport(MOBILE.width, MOBILE.height);
      selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.dropdownComponentLocator, DEVICE_TYPE_MOBILE);
      dropdownDefaultValidation(DEVICE_TYPE_MOBILE);
    })
  })