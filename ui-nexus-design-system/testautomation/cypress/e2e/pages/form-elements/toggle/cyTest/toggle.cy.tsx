import 'cypress-iframe';
import { Locators } from '../toggle.constants'
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

// Validates toggle component default state,background color and clickable state
//
// @parms: deviceType: string
// @returns: void
const toggleDefaultValidation = (deviceType: string) => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.toggleSlider).should('be.visible')
  cy.log('TC_01_Toggle Component availability -validated successfully')
  const attributes = new Map([
    [Locators.size, Locators.sizeValue],
    [Locators.toggled, Locators.toggledValue],
    [Locators.type, Locators.typeValue]
  ]);
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.toggle).should('be.visible').should('have.attr', key, value);
    cy.log(`TC_Toggle Component attributes-validated successfully for ${key}`)
  })
  cy.iframe(Locators.iframe).find(Locators.toggleSlider).should('have.css', 'background-color', Locators.defaultBackgroundColor)
  cy.log('TC_03_Toggle Component background color -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.toggleSlider).should('not.be.checked')
  cy.iframe(Locators.iframe).find(Locators.toggleSlider).click()
  cy.iframe(Locators.iframe).find(Locators.toggleSlider).should('have.css', 'background-color', Locators.orangeBackgroundColor)
  cy.log('TC_04_Toggle Component checked and unchecked state -validated successfully')
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    toggleControlValidation()
  }
}

// Validates toggle Disabled component default state
//
//
// @returns: void
const toggleDisabledValidation = () => {
  cy.get(Locators.toggleDisabledSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false);
  const attributes = new Map([
    [Locators.type, Locators.typeInputValue],
    [Locators.disabledValue, Locators.disabledValue],
    [Locators.ariaChecked, Locators.false]
  ]);
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.toggleInput).should('have.attr', key, value);
    cy.log(`TC_Toggle Disabled Component attributes-validated successfully for ${key}`)
  })
  cy.iframe(Locators.iframe).find(Locators.toggleInput).should('have.attr', 'disabled')
  cy.log('TC_05_Toggle disabled availability and disable state -validated successfully')
}

// Validates toggle with label component default state
//
// @returns: void
const toggleWithLabelValidation = () => {
  cy.get(Locators.toggleWithLabelSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false);
  cy.iframe(Locators.iframe).find(Locators.toggleSlider).should('be.visible')
  const attributes = new Map([
    [Locators.type, Locators.typeInputValue],
    [Locators.ariaChecked, Locators.false]
  ]);
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.toggleInput).should('have.attr', key, value);
    cy.log(`TC_Toggle Disabled Component attributes-validated successfully for ${key}`)
  })
  cy.iframe(Locators.iframe).find(Locators.toggleSlider).should('have.css', 'background-color', Locators.defaultBackgroundColor)
  cy.log('TC_06_Toggle with label availability-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.toggleIcon).eq(0).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.labelInActiveValue);
  cy.iframe(Locators.iframe).find(Locators.toggleIcon).eq(1).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.labelActiveValue);
  cy.log('TC_07_Toggle with label label names availability-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.toggleSlider).click()
  cy.iframe(Locators.iframe).find(Locators.toggleInput).should('have.attr', Locators.ariaChecked, Locators.true);
  cy.iframe(Locators.iframe).find(Locators.toggleInput).should('be.checked')
  cy.iframe(Locators.iframe).find(Locators.toggleSlider).should('have.css', 'background-color', Locators.orangeBackgroundColor)
  cy.log('TC_08_Toggle with label checked state-validated successfully')
}

// Validates toggle type button component default state
//
// @returns: void
const toggleTypeButtonValidation = () => {
  cy.get(Locators.toggleButtonSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false);
  cy.iframe(Locators.iframe).find(Locators.toggleButtonLabel).eq(0).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.labelInActiveValue);
  cy.iframe(Locators.iframe).find(Locators.toggleButtonLabel).eq(1).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.labelActiveValue);
  cy.iframe(Locators.iframe).find(Locators.toggleButtonInput).should('have.attr', Locators.ariaChecked, Locators.false);
  cy.iframe(Locators.iframe).find(Locators.toggleButtonInput).should('have.attr', Locators.type, Locators.typeInputValue);
  const attributes = new Map([
    [Locators.labelInActive, Locators.labelInActiveValue],
    [Locators.labelActive, Locators.labelActiveValue],
    [Locators.size, Locators.smallValue]
  ]);
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.toggleButton).should('be.visible').should('have.attr', key, value);
    cy.log(`TC_Toggle with button attributes-validated successfully for ${key}`)
  })
  cy.iframe(Locators.iframe).find(Locators.toggleButtonLabel).eq(0).should('have.attr', 'class', 'nexus-toggle-labels nexus-toggle-label-left nexus-toggle-label-selected nexus-toggle-button-sm');
  cy.log('TC_09_Toggle with button availability-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.toggleButton).click()
  cy.iframe(Locators.iframe).find(Locators.toggleButtonLabel).should('have.attr', 'class', 'nexus-toggle-labels nexus-toggle-label-left nexus-toggle-button-sm');
  cy.iframe(Locators.iframe).find(Locators.toggleButtonInput).should('have.attr', Locators.ariaChecked, Locators.true);
  cy.log('TC_10_Toggle with button clickability-validated successfully')
}

// Validates toggle switch size component default state
//
//
// @returns: void
const toggleSwitchSizeValidation = () => {
  cy.get(Locators.toggleSwitchSizeSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false);
  const size = new Map([
    [Locators.size, Locators.extraLargeValue],
    [Locators.size, Locators.smallValue],
    [Locators.size, Locators.mediumValue],
    [Locators.size, Locators.smallValue],
    [Locators.size, Locators.extraSmallvalue]
  ]);
  let idx;
  idx = 0;
  size.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.toggleButton).eq(idx).should('be.visible').should('have.attr', key, value);
    cy.log(`TC_Toggle with switch sizes-validated successfully for ${value}`)
    idx++;
  })
  for (let index = 0; index <= 4; index++) {
    cy.iframe(Locators.iframe).find(Locators.toggleInput).eq(index).should('have.attr', Locators.ariaChecked, Locators.false);
    cy.iframe(Locators.iframe).find(Locators.toggleInput).eq(index).should('have.attr', Locators.type, Locators.typeInputValue);
    cy.log('TC_Toggle with switch unchecked state-validated successfully')
  }
  for (let id = 0; id <= 4; id++) {
    cy.iframe(Locators.iframe).find(Locators.toggleSlider).eq(id).click()
    cy.iframe(Locators.iframe).find(Locators.toggleInput).eq(id).should('have.attr', Locators.ariaChecked, Locators.true);
    cy.iframe(Locators.iframe).find(Locators.toggleInput).eq(id).should('be.checked')
  }
}

// Validates toggle button size component default state
//
// @returns: void
const toggleButtonSizeValidation = () => {
  cy.get(Locators.toggleButtonSizeSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false);
  const size = new Map([
    [Locators.size, Locators.extraLargeValue],
    [Locators.size, Locators.largeValue],
    [Locators.size, Locators.mediumValue],
    [Locators.size, Locators.smallValue],
    [Locators.size, Locators.extraSmallvalue]
  ]);
  let idx;
  idx = 0;
  size.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.toggleButton).eq(idx).should('be.visible').should('have.attr', key, value);
    cy.log(`TC_Toggle with switch sizes-validated successfully for ${value}`)
    idx++;
  })
  for (let index = 0; index <= 4; index++) {
    cy.iframe(Locators.iframe).find(Locators.toggleButton).eq(index).should('be.visible').should('have.attr', Locators.labelInActive, Locators.labelInActiveValue);
    cy.iframe(Locators.iframe).find(Locators.toggleButton).eq(index).should('be.visible').should('have.attr', Locators.labelActive, Locators.labelActiveValue);
    cy.iframe(Locators.iframe).find(Locators.toggleButtonInput).eq(index).should('have.attr', Locators.ariaChecked, Locators.false);
    cy.iframe(Locators.iframe).find(Locators.toggleButtonInput).eq(index).should('have.attr', Locators.type, Locators.typeInputValue);
  }
  cy.log('TC_Toggle with switch sizes-validated successfully')
  cy.log('TC_Toggle with switch unchecked state-validated successfully')
  for (let id = 0; id <= 4; id++) {
    cy.iframe(Locators.iframe).find(Locators.toggleButtonSlider).eq(id).click({ force: true })
    cy.iframe(Locators.iframe).find(Locators.toggleButtonInput).eq(id).should('have.attr', Locators.ariaChecked, Locators.true);
    cy.iframe(Locators.iframe).find(Locators.toggleButtonInput).eq(id).should('be.checked')
  }
}

// Validates toggle components control
//
// @returns: void
const toggleControlValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.toggleSlider).should('be.visible')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlAttrID).type(Locators.attributeIdValue)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.toggle).should('be.visible').should('have.attr', 'attrid', Locators.attributeIdValue);
  cy.log('TC_Toggle control attribute id -validated successfully ')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlAttrID).clear()
  cy.iframe(Locators.iframe).find(Locators.controlDisabled).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.toggle).should('have.attr', Locators.disabledValue)
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlDisabled).click()
  cy.iframe(Locators.iframe).find(Locators.controlLabelActive).type(Locators.labelActiveLabel)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.toggleLabel).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.labelActiveLabel);
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlLabelActive).clear()
  cy.iframe(Locators.iframe).find(Locators.controlLabelInActive).type(Locators.labelInactiveLabel)
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.toggleInActive).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.labelInactiveLabel);
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlLabelInActive).clear()
  cy.iframe(Locators.iframe).find(Locators.controlRequired).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.toggle).should('be.visible').should('have.attr', Locators.required, Locators.required);
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlRequired).click()
  const size = new Map([
    [Locators.smallLabel, Locators.smallValue],
    [Locators.mediumLabel, Locators.mediumValue],
    [Locators.largeLabel, Locators.largeValue],
    [Locators.extraLargeLabel, Locators.extraLargeValue],
    [Locators.extraSmallLabel, Locators.extraSmallvalue]
  ]);
  size.forEach((value, key) => {
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.controlSize).select(value)
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.toggle).should('be.visible').should('have.attr', Locators.size, value);
    cy.log(`TC_Toggle control size -validated successfully for ${key}`)
  })
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlToggled).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.toggle).should('be.visible').should('have.attr', Locators.toggled, Locators.true);
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controlToggled).click()
  const type = new Map([
    [Locators.typeSwitchLabel, Locators.switchValue],
    [Locators.typeButtonLabel, Locators.buttonValue]
  ]);
  type.forEach((value, key) => {
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.controlType).select(value)
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.toggle).should('be.visible').should('have.attr', Locators.type, value);
    cy.log(`TC_Toggle control type -validated successfully for ${key}`)
  })
}

// Validates toggle component overall validation for desktop, mobile and tab
//
// @parms: deviceType: string
// @returns: void
const radioValidation = (deviceType: string) => {
  toggleDefaultValidation(deviceType)
  cy.get(Locators.COMPONENT_NAME).click()
  toggleDisabledValidation()
  toggleWithLabelValidation()
  toggleTypeButtonValidation()
  toggleSwitchSizeValidation()
  toggleButtonSizeValidation()
}

describe('Functional Test For Toggle Component', () => {
  it('Visit Toggle component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toggle component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toggle component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Toggle component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_MOBILE);
    radioValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Toggle component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toggle component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toggle component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Toggle component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_MOBILE);
    radioValidation(DEVICE_TYPE_MOBILE)
  })

  it('Visit Toggle component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toggle component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Toggle component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_DESKTOP);
    radioValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Toggle component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.toggleComponentLocator, DEVICE_TYPE_MOBILE);
    radioValidation(DEVICE_TYPE_MOBILE);
  })
})
