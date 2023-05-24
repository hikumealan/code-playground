import 'cypress-iframe';
import { Locators } from '../accordion.constants'
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

//Validates accordion Component icons
//
//// @returns: void
const accordionIconValidation = () => {
    const iconattributes = new Map([
        [Locators.cxAttribute, Locators.circleValue],
        [Locators.cyAttribute, Locators.circleValue],
        [Locators.rAttribute, Locators.circleValue],
        [Locators.fallAttribute, Locators.GreenValue],
      ]);

      iconattributes.forEach((value, key) => {
        cy.iframe(Locators.iframe).find(Locators.accordionComponentCircleIcon).eq(0).should('be.visible').should('have.attr', key, value);
        cy.log(`TC_accordion Component icon-validated successfully for ${key}`)
      })
      cy.iframe(Locators.iframe).find(Locators.accordionComponentIcon).eq(0).should('be.visible').should('have.attr', 'title', Locators.accordionCompleted);
}


// Validates accordion Component default state,background color
//
// @returns: void
const accordionDefaultValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.accordionComponent).should('be.visible')
  cy.log('TC_01_accordion Component availability -validated successfully')
    cy.iframe(Locators.iframe).find(Locators.accordionIndividualComponent).should('be.visible')
    cy.iframe(Locators.iframe).find(Locators.accordionIndividualComponent).click().should('be.visible')
     .should('have.text',Locators.accordionText)
    cy.log(`TC_02_accordion Component attributes-validated successfully`)
}

// Validates  accordion component controls validation
//
// @returns: void
const accordionControlsValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.accordionComponent).should('be.visible')
  cy.log('TC_01_accordion Component availability -validated successfully')
  const size = new Map([
    [Locators.accordionSize, Locators.accordionLG],
    [Locators.accordionSize, Locators.accordionMD],
    [Locators.accordionSize, Locators.accordionSM],
    [Locators.accordionSize, Locators.accordionXL],
    [Locators.accordionSize, Locators.accordionXS],
  ]);
  let idx;
  idx = 0;
  size.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.accordionIndividualComponent).eq(idx).should('be.visible').should('have.attr', key, value);
    cy.log(`TC_02_accordion Component attributes-validated successfully for ${key}  ${value}`)
    idx++;
  })
  const attributes = new Map([
    [Locators.accordionalign, Locators.alignText]
  ]);
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.accordionIndividualComponent).eq(idx).should('be.visible').should('have.attr', key, value);
    cy.log(`TC_03_accordion Component attributes-validated successfully for ${key}  ${value}`)
  })
}

// Validates accordion Component with alignement default state
//
// @returns: void
const accordionAlignmentValidation = () => {
    cy.iframe(Locators.iframe).find(Locators.alignmentAcc).should('be.visible')
    cy.log('TC_04_accordion alignement Component availability -validated successfully')
    cy.iframe(Locators.iframe).find(Locators.startAlign).click().should('have.text', Locators.accordionText)
    cy.iframe(Locators.iframe).find(Locators.centerAlign).click().should('have.text', Locators.accordionText)
    cy.iframe(Locators.iframe).find(Locators.EndAlign).click().should('have.text', Locators.accordionText)
    accordionIconValidation();
    cy.log(`TC_05_accordion alignment Component innertexts-validated successfully`)
  }

  // Validates accordion Component with card inside accordion default state
// @returns: void
const accordionCardValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.cardAccIcon).should('be.visible')
  cy.log('TC_06_accordion within card Component availability -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.cardAccIcon).click().should('have.text', Locators.accordionText)
    .should('have.attr', Locators.cardAccIcon)
    cy.iframe(Locators.iframe).find(Locators.cardAcc).click().should('have.class', 'disabled')

  accordionIconValidation();
  cy.log(`TC_07_accordion within card  Component innertexts-validated successfully`)
}

  // Validates accordion Component group accordion default state
// @returns: void
const accordionGroupValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.GroupAccIcon).should('be.visible')
  cy.log('TC_08_accordion group Component availability -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.cardAccIcon).click().should('have.text', Locators.accordionText)
    .should('have.attr', Locators.cardAccIcon)
  cy.iframe(Locators.iframe).find(Locators.cardAcc).click().should('have.class', 'disabled')
  cy.iframe(Locators.iframe).find(Locators.doneIcon).click().should('have.attr', Locators.DoneText)
  cy.iframe(Locators.iframe).find(Locators.settingsIcon).click().should('have.attr', Locators.SettingsText)
  cy.iframe(Locators.iframe).find(Locators.copyIcon).click().should('have.attr', Locators.CopyText)
  cy.iframe(Locators.iframe).find(Locators.deleteIcon).click().should('have.attr', Locators.DeleteText)

  accordionIconValidation();
  cy.log(`TC_09_accordion group Component innertexts-validated successfully`)
}

  // Validates accordion Component group accordion default state
// @returns: void
const accordionGroupTableValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.GroupTableAccIcon).should('be.visible')
  cy.log('TC_08_accordion group Component availability -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.TableAccIcon).click().should('have.text', Locators.accordionTableText)
    .should('have.attr', Locators.cardAccIcon)

  accordionIconValidation();
  cy.log(`TC_09_accordion group Component innertexts-validated successfully`)
}

// Validates accordion Component overall validation for desktop, mobile and tab
//
// @returns: void
const accordionValidation = (deviceType: string) => {
    accordionDefaultValidation()
    accordionAlignmentValidation()
    accordionCardValidation()
    accordionGroupValidation()
    accordionGroupTableValidation()
    if (deviceType === DEVICE_TYPE_DESKTOP) {
        accordionControlsValidation()
      }
}

describe('Functional Test For accordion component', () => {
  it('Visit accordion Component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit accordion Component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit accordion Component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit accordion Component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_MOBILE);
    accordionValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit accordion Component_storybook_Angular Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit accordion Component_storybook_Angular Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit accordion Component_storybook_Angular Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit accordion Component_storybook_Angular Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_MOBILE);
    accordionValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit accordion Component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit accordion Component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit accordion Component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_DESKTOP);
    accordionValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit accordion Component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.accordionComponentLocator, DEVICE_TYPE_MOBILE);
    accordionValidation(DEVICE_TYPE_MOBILE);
  })

})
