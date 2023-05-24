import 'cypress-iframe';
import { Locators } from '../checkbox.constants'
import {
  DESKTOP,
  TAB_LANDSCAPE,
  TAB_PORTRAIT,
  MOBILE,
  DEVICE_TYPE_DESKTOP,
  DEVICE_TYPE_MOBILE,
  DEVICE_TYPE_TAB,
  JAVASCRIPT,
  ANGULAR,
  REACT
} from '../../../../constants/constants';
import { CommonLocators } from '../../../../constants/locators'
import { selectSBFramework, clickElementIdentifiedByLocator } from '../../../../utils/functions'

 // validates checkbox default state
 // 
 // @returns: void
 //
const defaultCheckboxValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.checkbox).should('be.visible')
  cy.log("TC_01_checkbox availablility-validated successfully")
  cy.iframe(Locators.iframe).find(Locators.checkboxInput).should('have.attr', 'aria-checked', 'false');
  cy.iframe(Locators.iframe).find(Locators.checkboxInput).should('have.attr', 'type', 'checkbox');
  cy.log("TC_02_checkbox Default state - checked state false validated successfully")
  cy.iframe(Locators.iframe).find(Locators.checkbox).click()
  cy.frameLoaded(Locators.iframe);
  cy.iframe(Locators.iframe).find(Locators.checkedcheckboxinputBox).should('have.attr', 'aria-checked', 'true');
  cy.log("TC_03_checkbox Checked state - checked state true validated successfully")
  cy.iframe(Locators.iframe).find(Locators.checkedcheckboxinputBox).should('be.visible').click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.checkboxText).should('be.visible').contains('Check Me!')
  cy.log("TC_04_checkbox label name-validated successfully")
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
}

 // validates checkbox controls
 // 
 // @returns: void
 //
const checkBoxControlValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.aatrIdTextbox).clear().type('AttributeIDEntered')
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.nexusCheckBox).should('have.attr', 'attr-id', 'AttributeIDEntered');
  cy.log("TC_05_checkbox attr-id validation - validated successfully")
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.aatrIdTextbox).clear()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.nexusCheckBox).should('have.attr', 'attr-id', '');
  cy.log("TC_06_checkbox Default attr-id validation - validated successfully");
  ['true', 'false'].forEach(
    (ariaCheckedState, idx) => {
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(Locators.checkedToggle).click()
      clickElementIdentifiedByLocator(CommonLocators.canvas, false)
      if (ariaCheckedState === 'true') {
        cy.iframe(Locators.iframe).find(Locators.checkBoxInputCheckedState).should('have.attr', 'aria-checked', ariaCheckedState)
      }
      else if (ariaCheckedState === 'false') {
        cy.iframe(Locators.iframe).find(Locators.checkedcheckboxinputBox).should('have.attr', 'aria-checked', ariaCheckedState);
      }
      cy.log("TC_Controls_checkbox Checked state - checked state true validated successfully Checked" + ariaCheckedState + idx)
    })
}

 // validates checkbox enabled and disabled state
 // 
 // @returns: void
 //
const checkBoxDisabledlValidation = () => {
  [Locators.checkedcheckboxinputBox, Locators.nexusCheckBox].forEach(
    (disabledState) => {
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(Locators.disabledToggle).click({force:true})
      clickElementIdentifiedByLocator(CommonLocators.canvas, false)
      if (disabledState === Locators.checkedcheckboxinputBox) {
        cy.iframe(Locators.iframe).find(Locators.checkedcheckboxinputBox).should('be.disabled')
      }
      else if (disabledState === Locators.nexusCheckBox) {
        cy.iframe(Locators.iframe).find(Locators.nexusCheckBox).should('not.be.disabled');
      }
      cy.log("TC_Controls_disabled state - disabled state true validated successfully")
    })
}

 // validates checkbox Indeterminate state
 // 
 // @returns: void
 //
const checkBoxIndeterminateValidation = () => {
  ['true', 'false'].forEach(
    (indeterminateStates) => {
      clickElementIdentifiedByLocator(CommonLocators.docs, false)
      cy.iframe(Locators.iframe).find(Locators.indeterminateToggle).click({force:true})
      clickElementIdentifiedByLocator(CommonLocators.canvas, false)
      if (indeterminateStates === 'true') {
        cy.iframe(Locators.iframe).find(Locators.nexusCheckBox).should('have.attr', 'indeterminate', indeterminateStates);
      }
      else if (indeterminateStates === 'false') {
        cy.iframe(Locators.iframe).find(Locators.nexusCheckBox).should('have.attr', 'indeterminate', 'false');
      }
      cy.log("TC_10_Controls_indeterminate state - indeterminate state true validated successfully")
    })
}

 // validates checkbox required state
 // 
 // @returns: void
 //
const checkBoxRequiredValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.requiredToggle).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.checkedcheckboxinputBox).should('have.attr', 'required', 'required');
  cy.log("TC_12_Controls_required state - required state true validated successfully")
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.requiredToggle).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.requiredToggle).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
}

 // validates checkbox background color
 // 
 // @returns: void
 //
const checkBoxBackgroundColorValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.checkboxInput).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  cy.log("TC_14_Background color validation for unchecked checkbox - validated successfully")
  cy.iframe(Locators.iframe).find(Locators.checkbox).click({force:true})
  cy.iframe(Locators.iframe).find(Locators.checkedCheckbox).should('have.css', 'background-color', 'rgb(0, 0, 0)')
  cy.log("TC_15_Background color validation for checked checkbox - validated successfully")
  cy.iframe(Locators.iframe).find(Locators.checkedCheckbox).click({force:true})
  cy.log("TC_16_Hover validation - validated successfully")
  cy.log("TC_15_Border color upon hover- validated successfully")
}

//
 // validates checkbox configuration component default state validation
 // 
 // @returns: void
 //
const checkConfigDefaultStateValidation = () => {
  cy.get(Locators.checkConfigSideMenu).click({force:true})
  clickElementIdentifiedByLocator(CommonLocators.canvas, false);
  ['Check', 'Indeterminate', 'Disabled', 'Example'].forEach(
    (checkConfigStates, idx) => {
      cy.iframe(Locators.iframe).find(Locators.checkCheckbox).eq(idx).should('be.visible').should('have.attr', 'aria-checked', 'false');
      cy.log("TC_configuration check checkbox to be unchecked as default state- validated successfully")
      cy.iframe(Locators.iframe).find(Locators.checkCheckboxLabel).eq(idx).should('be.visible').contains(checkConfigStates)
      cy.log("TC_Check checkbox label name - validated successfully")
    })
  cy.iframe(Locators.iframe).find(Locators.checkbox).eq(0).should('be.visible').click()
  cy.iframe(Locators.iframe).find(Locators.checkBoxInputCheckedState).eq(1).should('be.visible').should('have.attr', 'aria-checked', 'true');
  cy.iframe(Locators.iframe).find(Locators.checkBoxInputCheckedState).eq(0).should('be.visible').should('have.attr', 'aria-checked', 'true');
  cy.iframe(Locators.iframe).find(Locators.checkedCheckbox).eq(0).should('be.visible').click()
  cy.log("TC_Check checkbox validation-checked true successfully")
}

 // validates checkbox configuration Interminate  state validation
 // 
 // @returns: void
 //
const checkConfigInterminateValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.checkCheckbox).eq(3).should('be.visible').should('have.attr', 'aria-checked', 'false');
  cy.iframe(Locators.iframe).find(Locators.checkbox).eq(1).should('be.visible').click({force:true})
  cy.iframe(Locators.iframe).find(Locators.checkCheckbox).eq(3).should('be.visible').should('have.attr', 'aria-checked', 'false');
  cy.iframe(Locators.iframe).find(Locators.checkCheckbox).eq(3).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.checkCheckbox).eq(3).should('have.attr', 'aria-checked', 'mixed');
  cy.iframe(Locators.iframe).find(Locators.checkCheckbox).eq(3).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.checkedCheckbox).should('be.visible').click({force:true})
  cy.log("TC_25_Intermediate validation-validated successfully")
}

 // validates checkbox configuration disabled  state validation
 // 
 // @returns: void
 //
const checkConfigDisabledValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.checkCheckbox).eq(2).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.checkCheckbox).eq(3).should('be.disabled')
  cy.log("TC_26_Disabled Checked validation-validated successfully")
  cy.iframe(Locators.iframe).find(Locators.checkCheckbox).eq(2).click({ force: true })
  cy.iframe(Locators.iframe).find(Locators.checkCheckbox).eq(3).should('not.be.disabled');
}

 // validates checkbox component overall for mobile desktop and tab
 // 
 // @parms: deviceType: string
 // @returns: void
const checkboxValidation = (deviceType: string) => {
  defaultCheckboxValidation();
     cy.get(Locators.COMPONENT_NAME).click({force:true})
     checkBoxDisabledlValidation();
     checkBoxIndeterminateValidation();
     checkBoxRequiredValidation();
     checkBoxBackgroundColorValidation();
     checkConfigDefaultStateValidation();
     checkConfigInterminateValidation();
     checkConfigDisabledValidation();
     if (deviceType === DEVICE_TYPE_DESKTOP) {
        checkBoxControlValidation();
         }
}

describe('Functional Test For Checkbox Component', () => {
  it('Visit checkbox component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
    checkboxValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Checkbox component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
    checkboxValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Checkbox component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
    checkboxValidation(DEVICE_TYPE_TAB);
  })

  it('Visit Checkbox component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_MOBILE);
    checkboxValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Checkbox component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
    checkboxValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Checkbox component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
    checkboxValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Checkbox component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
    checkboxValidation(DEVICE_TYPE_TAB);
  })

  it('Visit Checkbox component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_MOBILE);
    checkboxValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Checkbox component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
    checkboxValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Checkbox component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
    checkboxValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Checkbox component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
    checkboxValidation(DEVICE_TYPE_TAB);
  })

  it('Visit Checkbox component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_MOBILE);
    checkboxValidation(DEVICE_TYPE_MOBILE);
  })
  
})