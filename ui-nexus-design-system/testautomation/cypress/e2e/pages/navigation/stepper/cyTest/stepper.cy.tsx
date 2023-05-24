import 'cypress-iframe';
import { Locators } from '../stepper.constants'
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

//Validates Stepper Component icons
//
//// @returns: void
const stepperIconValidation = () => {
    const iconattributes = new Map([
        [Locators.cxAttribute, Locators.circleValue],
        [Locators.cyAttribute, Locators.circleValue],
        [Locators.rAttribute, Locators.circleValue],
        [Locators.fallAttribute, Locators.GreenValue],
      ]);
      
      iconattributes.forEach((value, key) => {
        cy.iframe(Locators.iframe).find(Locators.stepperComponentCircleIcon).eq(0).should('be.visible').should('have.attr', key, value);
        cy.log(`TC_Stepper Component icon-validated successfully for ${key}`)
      })  
      cy.iframe(Locators.iframe).find(Locators.stepperComponentIcon).eq(0).should('be.visible').should('have.attr', 'title', Locators.stepperCompleted);
}


// Validates Stepper Component default state,background color
//
// @returns: void
const stepperDefaultValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.stepperComponent).should('be.visible')
  cy.log('TC_01_Stepper Component availability -validated successfully')
  const attributes = new Map([
    [Locators.stepperStatusAttribute, Locators.stepperWarning],
    [Locators.stepperStatusAttribute, Locators.stepperActive],
    [Locators.stepperStatusAttribute, Locators.stepperDefault],
    [Locators.stepperStatusAttribute, Locators.stepperComplete],
  ]);
  let idx;
  idx = 0;
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.stepperIndividualComponent).eq(idx).should('be.visible').should('have.attr', key, value);
    cy.log(`TC_02_Stepper Component attributes-validated successfully for ${key}  ${value}`)
    idx++;
  })  
  cy.iframe(Locators.iframe).find(Locators.stepperIndividualComponent).eq(4).should('be.visible')
  stepperIconValidation();
  cy.iframe(Locators.iframe).find(Locators.stepperComponentIcon).eq(1).should('be.visible').should('have.attr', 'title', Locators.stepperWarning);
  cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(0).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.sourceDataLabel);
  cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(1).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.dataExplorationLabel);
  cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(3).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.testAnalysisLabel);
  cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(2).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.trainingLabel);
  cy.iframe(Locators.iframe).find(Locators.featureSetComponentLabel).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.featureSetsLabel);
  cy.iframe(Locators.iframe).find(Locators.stepperIconComponent).eq(0).should('be.visible').should('have.attr', 'title', Locators.dataExplorationTitle);
  cy.iframe(Locators.iframe).find(Locators.stepperIconComponent).eq(1).should('be.visible').should('have.attr', 'title', Locators.featureSetsTitle);
  cy.iframe(Locators.iframe).find(Locators.stepperIconComponent).eq(2).should('be.visible').should('have.attr', 'title', Locators.testAnalysisTitle);
  cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(0).should('be.visible').should('have.attr', 'aria-label', Locators.stepCountOne);
  cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(1).should('be.visible').should('have.attr', 'aria-current', Locators.stepCountTwo);
  cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(2).should('be.visible').should('have.attr', 'aria-label', Locators.stepCountFour);
  cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(3).should('be.visible').should('have.attr', 'aria-label', Locators.stepCountFive);
  cy.iframe(Locators.iframe).find(Locators.featureSetComponentLabel).should('be.visible').should('have.attr', 'aria-label', Locators.stepCountThree);
  cy.log(`TC_04_Stepper Component innertexts-validated successfully`)
}

// Validates  stepper component controls validation
//
// @returns: void
const stepperControlsValidation = () => {
    cy.get(Locators.stepperSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.stepperComponent).should('be.visible').invoke('attr', 'steppertype').should('eq', Locators.defaultStepperType)
    cy.log(`TC_05_Stepper Component default stepper type-validated successfully`)
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.stepperTypeSelectBox).select(Locators.columnLabel, { force: true });
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.stepperComponent).should('be.visible').invoke('attr', 'steppertype').should('eq', Locators.columnLabel)
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.stepperTypeSelectBox).select(Locators.rowLabel, { force: true });
}

// Validates Stepper Component status default state,background color
//
// @returns: void
const stepperStatusValidation = () => {
    cy.get(Locators.statusSideMenu).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false);
    cy.iframe(Locators.iframe).find(Locators.stepperComponent).should('be.visible')
    cy.log('TC_01_Stepper Component availability -validated successfully')
    const attributes = new Map([
        [Locators.stepperStatusAttribute, Locators.stepperDefault],
        [Locators.stepperStatusAttribute, Locators.stepperError],
      [Locators.stepperStatusAttribute, Locators.stepperActive],
      [Locators.stepperStatusAttribute, Locators.stepperComplete],
      [Locators.stepperStatusAttribute, Locators.stepperComplete],
    ]);
    let idx;
    idx = 0;
    attributes.forEach((value, key) => {
      cy.iframe(Locators.iframe).find(Locators.stepperIndividualComponent).eq(idx).should('be.visible').should('have.attr', key, value);
      cy.log(`TC_06_Stepper status Component attributes-validated successfully for ${key}  ${value}`)
      idx++;
    })  
    stepperIconValidation();
    const journeyattributes = new Map([
        [Locators.cxAttribute, Locators.circleValue],
        [Locators.cyAttribute, Locators.circleValue],
        [Locators.rAttribute, Locators.circleValue],
        [Locators.fallAttribute, Locators.GreenValue],
      ]);
      journeyattributes.forEach((value, key) => {
        cy.iframe(Locators.iframe).find(Locators.stepperComponentCircleIcon).eq(1).should('be.visible').should('have.attr', key, value);
        cy.log(`TC_08_Stepper add journey step Component icon-validated successfully for ${key}`)
      }) 
      cy.iframe(Locators.iframe).find(Locators.stepperComponentIcon).eq(1).should('be.visible').should('have.attr', 'title', Locators.stepperCompleted);
      const bindactionattributes = new Map([
        [Locators.cxAttribute, Locators.circleValue],
        [Locators.cyAttribute, Locators.circleValue],
        [Locators.rAttribute, Locators.circleValue],
      ]);
      bindactionattributes.forEach((value, key) => {
        cy.iframe(Locators.iframe).find(Locators.stepperComponentCircleIcon).eq(2).should('be.visible').should('have.attr', key, value);
        cy.log(`TC_09_Stepper status bind actions to activity icon-validated successfully for ${key}`)
      })  
      cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(0).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.createJourneyLabel);
      cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(1).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.addedJourneyLabel);
      cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(2).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.bindActionsToActivityLabel);
      cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(3).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.activateLabel);
      cy.iframe(Locators.iframe).find(Locators.featureSetComponentLabel).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.linkActivityToJourneyStepLabel);
    cy.iframe(Locators.iframe).find(Locators.stepperComponentIcon).eq(0).should('be.visible').should('have.attr', 'title', Locators.stepperCompleted);
    cy.iframe(Locators.iframe).find(Locators.stepperComponentIcon).eq(1).should('be.visible').should('have.attr', 'title', Locators.stepperCompleted);
    cy.iframe(Locators.iframe).find(Locators.stepperComponentIcon).eq(2).should('be.visible').should('have.attr', 'title', Locators.stepperError);
    cy.iframe(Locators.iframe).find(Locators.stepperIconComponent).eq(0).should('be.visible').should('have.attr', 'title', Locators.featureSetsTitle);
    cy.iframe(Locators.iframe).find(Locators.stepperIconComponent).eq(1).should('be.visible').should('have.attr', 'title', Locators.testAnalysisTitle);
    cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(0).should('be.visible').should('have.attr', 'aria-label', Locators.stepCountOne);
    cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(1).should('be.visible').should('have.attr', 'aria-current', Locators.stepCountTwo);
    cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(2).should('be.visible').should('have.attr', 'aria-label', Locators.stepCountFour);
    cy.iframe(Locators.iframe).find(Locators.stepperComponentLabel).eq(3).should('be.visible').should('have.attr', 'aria-label', Locators.stepCountFive);
    cy.iframe(Locators.iframe).find(Locators.featureSetComponentLabel).should('be.visible').should('have.attr', 'aria-label', Locators.stepCountThree);
    cy.log(`TC_10_Stepper status Component innertexts-validated successfully`)
  }

// Validates stepper Component overall validation for desktop, mobile and tab
//
// @returns: void
const stepperValidation = (deviceType: string) => {
    stepperDefaultValidation()
    stepperStatusValidation()
    if (deviceType === DEVICE_TYPE_DESKTOP) {
        stepperControlsValidation()
      }
}

describe('Functional Test For Stepper component', () => {
  it('Visit Stepper Component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Stepper Component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Stepper Component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Stepper Component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_MOBILE);
    stepperValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Stepper Component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Stepper Component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Stepper Component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Stepper Component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_MOBILE);
    stepperValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Stepper Component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Stepper Component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Stepper Component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_DESKTOP);
    stepperValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Stepper Component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.stepperComponentLocator, DEVICE_TYPE_MOBILE);
    stepperValidation(DEVICE_TYPE_MOBILE);
  })

})
