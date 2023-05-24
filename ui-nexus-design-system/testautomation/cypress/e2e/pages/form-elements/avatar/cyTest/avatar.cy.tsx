import 'cypress-iframe';
import { Locators } from '../avatar.constants'
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

// Avatar component default state validation
//
// @return: void
const avatarDefaultValidation = () => {
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.avatarComponent).should('be.visible')
  cy.log('TC_01_Avatar component  availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.avtarIcon).should('be.visible').should('have.text', Locators.avatarNNValue)
  cy.log('TC_02_Avatar component logo and text availablility-validated successfully')
  cy.iframe(Locators.iframe).find(Locators.avtarLabel).should('be.visible').should('have.text', Locators.avatarNoNameValue)
  cy.log('TC_03_Avatar component label-validated successfully')
  const attributes = new Map([
    [Locators.avatarSizeValue, Locators.avatarMDValue],
    [Locators.avatarDarkValue, Locators.falseValue],
    [Locators.avatarNameDisplayValue, Locators.trueValue],
    [Locators.userNameValue, Locators.avatarNoNameValue]
  ]);
  attributes.forEach((value, key) => {
    cy.iframe(Locators.iframe).find(Locators.avatarComponent).should('be.visible').should('have.attr', key, value);
    cy.log('TC_Avatar component size, darkstate, display name username-validated successfully')
  })
}

// Avatar component controls validation
//
// @return: void
const avatarControlValidation = () => {
  cy.get(Locators.avatarSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controltoggle).eq(1).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.avatarComponent).should('be.visible').should('have.attr', Locators.avatarDarkValue, Locators.trueValue);
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controltoggle).eq(1).click()
  cy.log('TC_25_Avatar control avatar dark -validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controltoggle).eq(4).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.avatarComponent).should('be.visible').should('have.attr', Locators.avatarNameDisplayValue, Locators.falseValue);
  cy.log('TC_28_Avatar control avatar name display -validated successfully')
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.controltoggle).eq(4).click()
  const variant = new Map([
    [Locators.avatarClassNameValue, Locators.classNameValue],
    [Locators.avatarImgValue, Locators.imageValue],
    [Locators.avatarLogoValue, Locators.logoValue],
    [Locators.avatarNotificationValue, Locators.testValue],
    [Locators.avatarSizeValue, Locators.avatarLGValue],
    [Locators.avatarStatusValue, Locators.statusValue],
    [Locators.userNameValue, Locators.newNameValue]
  ]);
  let idx;
  idx = 0;
  variant.forEach((value, key) => {
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.iframe(Locators.iframe).find(Locators.control).eq(idx).clear().type(value)
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.avatarComponent).should('be.visible').should('have.attr', key, value);
    clickElementIdentifiedByLocator(CommonLocators.docs, false)
    cy.log(`TC_input control-validated successfully ${key}`);
    idx++;
  })
  clickElementIdentifiedByLocator(CommonLocators.docs, false)
  cy.iframe(Locators.iframe).find(Locators.control).eq(6).clear().type(Locators.avatarNoNameValue)
}

// Avatar component size validation
//
// @return: void
const avatarSizeValidation = () => {
  cy.get(Locators.avatarSizeSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  const size = new Map([
    [Locators.avatarClassNameValue, Locators.avatarXSValue],
    [Locators.avatarImgValue, Locators.avatarSMValue],
    [Locators.avatarLogoValue, Locators.avatarMDValue],
    [Locators.avatarNotificationValue, Locators.avatarLGValue],
    [Locators.avatarSizeValue, Locators.avatarXLValue]
  ]);
  let idx;
  idx = 0;
  size.forEach(
    (sizeVariant) => {
      cy.iframe(Locators.iframe).find(Locators.avatarSizeLabel).eq(idx).should('be.visible').should('have.text', sizeVariant)
      cy.iframe(Locators.iframe).find(Locators.avatarSizeIcon).eq(idx).should('have.attr', 'avatar-name-display', 'false');
      cy.iframe(Locators.iframe).find(Locators.avatarSizeIcon).eq(idx).should('have.attr', 'avatar-size', sizeVariant);
      idx++
    }
  )
}

// Avatar component status validation
//
// @return: void
const avatarStatusValidation = () => {
  cy.get(Locators.avatarStatusSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.avatarStatusLabel).should('be.visible').should('have.text', Locators.avatarWithStatusValue)
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIcon).should('be.visible').should('have.attr', Locators.avatarSizeValue, Locators.avatarLGValue);
  cy.log('TC_12_Avatar status size -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIcon).should('be.visible').should('have.attr', Locators.avatarStatusValue, Locators.onlineValue);
  cy.log('TC_13_Avatar status online -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIcon).should('be.visible').should('have.attr', Locators.avatarNameDisplayValue, Locators.falseValue);
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIconLabel).should('be.visible').should('have.text', Locators.JBValue)
  cy.log('TC_15_Avatar status icon and online background color -validated successfully')
}

// Avatar image name component default state validation
//
// @return: void
const avatarImageNameValidation = () => {
  cy.get(Locators.avatarImageNameSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.avatarStatusLabel).should('be.visible').should('have.text', Locators.avatarImageNameValue)
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIcon).should('be.visible').should('have.attr', Locators.avatarSizeValue, Locators.avatarLGValue);
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIcon).should('be.visible').should('have.attr', Locators.userNameValue, Locators.avatarJBValue);
  cy.log('TC_16_Avatar Image and name size and username -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.avatarImage).should('be.visible')
  cy.log('TC_17_Avatar Image availability -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.avatarImageName).should('be.visible').should('have.text', Locators.avatarJBValue)
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIconLabel).should('be.visible').should('have.text', Locators.JBValue)
}

// Avatar initial name component default state validation
//
// @return: void
const avatarInitialNameValidation = () => {
  cy.get(Locators.avatarInitialNameSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.avatarStatusLabel).should('be.visible').should('have.text', Locators.avatarInitialsNameValue)
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIcon).should('be.visible').should('have.attr', Locators.avatarSizeValue, Locators.avatarLGValue);
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIcon).should('be.visible').should('have.attr', Locators.userNameValue, Locators.avatarJBValue);
  cy.log('TC_18_Avatar Initial and name size and username -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIconLabel).should('have.text', Locators.JBValue)
  cy.iframe(Locators.iframe).find(Locators.avatarImageName).should('be.visible').should('have.text', Locators.avatarJBValue)
  cy.log('TC_19_Avatar Initial and name availability -validated successfully')
}

// Avatar  intial name notification component default state validation
//
// @return: void
const avatarInitialNameNotificationValidation = () => {
  cy.get(Locators.avatarInitialNameNotifSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.avatarStatusLabel).should('be.visible').should('have.text', Locators.avatarInitialNameNotificationValue)
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIcon).should('be.visible').should('have.attr', Locators.avatarSizeValue, Locators.avatarLGValue);
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIcon).should('be.visible').should('have.attr', Locators.userNameValue, Locators.avatarJBValue);
  cy.log('TC_20_Avatar Initial and name notifications size and username -validated successfully')
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIconLabel).should('have.text', Locators.JBValue)
  cy.iframe(Locators.iframe).find(Locators.avatarImageName).should('be.visible').should('have.text', Locators.avatarJBValue)
  cy.iframe(Locators.iframe).find(Locators.avatarNotifications).should('have.text', Locators.avatarNumericValue)
  cy.log('TC_21_Avatar notification availability and background color and innertext -validated successfully')
}

// Avatar initials component default state validation
//
// @return: void
const avatarInitialsValidation = () => {
  cy.get(Locators.avatarInitialSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.avatarStatusLabel).should('be.visible').should('have.text', Locators.avatarWithInitialsValue)
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIcon).should('be.visible').should('have.attr', Locators.avatarSizeValue, Locators.avatarLGValue);
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIcon).should('be.visible').should('have.attr', Locators.userNameValue, Locators.avatarJBValue);
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIconLabel).should('have.text', 'JB')
  cy.log('TC_22_Avatar Initials -validated successfully')
}

// Avatar logo name component default state validation
//
// @return: void
const avatarLogoNameValidation = () => {
  cy.get(Locators.avatrLogoNameSideMenu).click()
  clickElementIdentifiedByLocator(CommonLocators.canvas, false)
  cy.iframe(Locators.iframe).find(Locators.avatarStatusLabel).should('be.visible').should('have.text', Locators.avatarLogoNameValue)
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIcon).should('be.visible').should('have.attr', Locators.avatarSizeValue, Locators.avatarLGValue);
  cy.iframe(Locators.iframe).find(Locators.avatarStatusIcon).should('be.visible').should('have.attr', Locators.userNameValue, Locators.avatarJBValue);
  cy.iframe(Locators.iframe).find(Locators.avatarNexusIcon).should('be.visible')
  cy.iframe(Locators.iframe).find(Locators.avatarImageName).should('be.visible').should('have.text', Locators.avatarJBValue)
  cy.log('TC_23_Avatar Logo and name -validated successfully')
}

// Avatar component  validation for tab mobile and desktop
//
// @return: void
const avatarValidation = (deviceType: string) => {
  avatarDefaultValidation()
  cy.get(Locators.COMPONENT_NAME).click()
  avatarSizeValidation()
  avatarStatusValidation()
  avatarImageNameValidation()
  avatarInitialNameValidation()
  avatarInitialNameNotificationValidation()
  avatarInitialsValidation()
  avatarLogoNameValidation()
  if (deviceType === DEVICE_TYPE_DESKTOP) {
    avatarControlValidation()
  }
}

describe('Functional Test For Avatar Component', () => {
  it('Visit Avatar component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Avatar component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Avatar component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Avatar component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_MOBILE);
    avatarValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Avatar component_storybook_Angualar Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Avatar component_storybook_Angualar Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Avatar component_storybook_Angualar Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Avatar component_storybook_Angualar Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_MOBILE);
    avatarValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Avatar component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Avatar component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarValidation(DEVICE_TYPE_DESKTOP);
  })

  it('Visit Avatar component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_DESKTOP);
    avatarValidation(DEVICE_TYPE_MOBILE);
  })

  it('Visit Avatar component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.avatarComponentLocator, DEVICE_TYPE_MOBILE);
    avatarValidation(DEVICE_TYPE_MOBILE);
  })
})
