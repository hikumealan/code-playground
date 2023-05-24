import 'cypress-iframe';
import { Locators } from '../progressbar.constants'
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

// Validates progressbar default state
//
// @returns: void
const progressBarDefaultValidation = (deviceType: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.progressbarComponent).should('be.visible').should('have.attr', 'circle', Locators.falseValue);
  const attributes = new Map([
    [Locators.indeterminateValue, Locators.falseValue],
    [Locators.errorValue, Locators.falseValue],
    [Locators.value, Locators.inputValue]
  ]);
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.progressbarComponent).should('have.attr', key, value);
  })
  cy.log('TC_01_progress bar component default state-validated successfully')
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    progressBarControlValidation();
  }
}

// Validates progressbar controls
//
// @returns: void
const progressBarControlValidation = () => {
  [Locators.circleValue, Locators.errorValue, Locators.indeterminateValue].forEach(
    (progressbarVariants, idx) => {
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(Locators.toggle).eq(idx).click()
      clickElementIdentifiedByLocator(CommonLocators.canvas, false)
      cy.iframe(Locators.iframe).find(Locators.progressbarComponent).should('have.attr', progressbarVariants, Locators.trueValue);
      if (progressbarVariants === Locators.circleValue) {
        cy.iframe(Locators.iframe).find(Locators.progressbarCircleComponent).should('be.visible').should('have.attr', 'style', Locators.transformRotateValue);
      }
      cy.log(`TC_progress bar component validated successfully ${progressbarVariants}${idx}`)
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(Locators.toggle).eq(idx).click()
    }
  )
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.progressbarValue).clear().type(Locators.valueInput)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.progressbarComponent).should('have.attr', 'value', Locators.valueInput);
  cy.log('TC_05_progress bar component value set to 100-validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.progressbarValue).clear().type(Locators.inputValue)
}

// Validates progressbar Infinte component
//
// @returns: void
const progressBarInfiniteValidation = () => {
  cy.get(Locators.COMPONENT_NAME).click()
  cy.get(Locators.progressbarInfinite).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.infiniteProgressbarComponent).should('be.visible')
  cy.frameLoaded(Locators.iframe);
  cy.iframe(Locators.iframe).find(Locators.checkETA).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.checkEtaValue);
  cy.log('TC_06_progress bar infinite default state-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.checkETA).click({ force: true })
  cy.frameLoaded(Locators.iframe);
  cy.iframe(Locators.iframe).wait(5000).find(Locators.checkETA).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.calculationEtaValue);
  cy.iframe(Locators.iframe).find(Locators.checkETA).click({ force: true })
  cy.frameLoaded(Locators.iframe);
  cy.iframe(Locators.iframe).wait(5000).find(Locators.checkETA).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.checkEtaValue);
  cy.log('TC_07_progress bar infinite check ETA state-validated successfully')
}

// Validates progressbar Reports component
//
// @returns: void
const progressBarReportsValidation = () => {
  cy.get(Locators.progressbarReports).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.reportComponent).should('be.visible')
  cy.iframe(Locators.iframe).find(Locators.systemPerformanceTitle).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.systemPerformanceValue);
  cy.iframe(Locators.iframe).find(Locators.progressComponent).eq(0).should('have.attr', 'value', Locators.circleValueOne);
  cy.iframe(Locators.iframe).find(Locators.progressComponent).eq(0).should('have.attr', 'circle', Locators.trueValue);
  cy.iframe(Locators.iframe).find(Locators.reportElement).eq(0).invoke('text').then((text) => text.trim()).should('equal', Locators.processorValue);
  cy.log('TC_08_progress bar report processor -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.reportElement).eq(2).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.memoryValue);
  cy.iframe(Locators.iframe).find(Locators.progressComponent).eq(1).should('have.attr', 'value', Locators.circleValueTwo);
  cy.iframe(Locators.iframe).find(Locators.progressComponent).eq(1).should('have.attr', 'circle', Locators.trueValue);
  cy.log('TC_08_progress bar report memory -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.reportElement).eq(4).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.graphicsValue);
  cy.iframe(Locators.iframe).find(Locators.progressComponent).eq(2).should('have.attr', 'value', Locators.circleValueThree);
  cy.iframe(Locators.iframe).find(Locators.progressComponent).eq(2).should('have.attr', 'circle', Locators.trueValue);
  cy.log('TC_08_progress bar report graphics -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.reportElement).eq(6).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.primaryHddValue);
  cy.iframe(Locators.iframe).find(Locators.progressComponent).eq(3).should('have.attr', 'value', Locators.circelValueFour);
  cy.iframe(Locators.iframe).find(Locators.progressComponent).eq(3).should('have.attr', 'circle', Locators.trueValue);
  cy.log('TC_08_progress bar report Primary HDD -validated successfully')
}

// Validates progressbar component for desktop, tab and mobile
//
// @parms: deviceType: string
// @returns: void
const progressBarValidation = (deviceType: string) => {
  progressBarDefaultValidation(deviceType);
  progressBarInfiniteValidation();
  progressBarReportsValidation();
}

describe('Functional Test For progressbar Component', () => {
  it('Visit progressbar component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressBarValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit progressbar component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressBarValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit progressbar component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressBarValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit progressbar component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_MOBILE);
    progressBarValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit progressbar component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressBarValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit progressbar component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressBarValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit progressbar component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressBarValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit progressbar component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_MOBILE);
    progressBarValidation(DEVICE_TYPE_MOBILE)
  })

  it('Visit progressbar component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressBarValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit progressbar component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressBarValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit progressbar component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_DESKTOP);
    progressBarValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit progressbar component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.progressbarComponentLocator, DEVICE_TYPE_MOBILE);
    progressBarValidation(DEVICE_TYPE_MOBILE);
  })
})
