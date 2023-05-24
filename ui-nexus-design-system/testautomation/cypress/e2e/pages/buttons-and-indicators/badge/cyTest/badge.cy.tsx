import 'cypress-iframe';
import { Locators } from '../badge.constants';
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
}
  from '../../../../constants/constants';
import { selectSBFramework } from '../../../../utils/functions';

// Validates badge default state
//
// @returns: void
//
const defaultbadgeValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.badge).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.defaultText);
  cy.log('badge component availablility-validated successfully');
  cy.iframe(Locators.iframe).find(Locators.badge).should('have.css', 'background-color', Locators.defaultbgcolor);
  cy.log('badge component background color-validated successfully');
  cy.iframe(Locators.iframe).find(Locators.badge).should('have.attr', 'variant', Locators.variantDefault);
  cy.log('badge default attributes-validated successfully');
}

// Validates badge CONTROLS
//
// @returns: void
//
const badgeControlValidation = () => {
  cy.iframe(Locators.iframe).find(Locators.variant).select('error', { force: true });
  cy.iframe(Locators.iframe).find(Locators.badge).should('have.attr', 'variant', Locators.variantError);
  cy.iframe(Locators.iframe).find(Locators.badge).should('have.css', 'background-color', Locators.errorbgcolor);
  cy.iframe(Locators.iframe).find(Locators.variant).select('success', { force: true })
  cy.iframe(Locators.iframe).find(Locators.badge).should('have.attr', 'variant', Locators.variantSuccess);
  cy.iframe(Locators.iframe).find(Locators.badge).should('have.css', 'background-color', Locators.successbgcolor);
  cy.iframe(Locators.iframe).find(Locators.variant).select('warning', { force: true })
  cy.iframe(Locators.iframe).find(Locators.badge).should('have.attr', 'variant', Locators.variantWarning);
  cy.iframe(Locators.iframe).find(Locators.badge).should('have.css', 'background-color', Locators.warningbgcolor);
  cy.log('badge variants-validated successfully');
  cy.iframe(Locators.iframe)
    .find(Locators.variant)
    .find('option')
    .then((options) => {
      const actual = [...options].map((opt) => opt.value);
      expect(actual).to.deep.eq(['Choose option...', 'default', 'error', 'success', 'warning']);
    });
  cy.iframe(Locators.iframe).find(Locators.label).clear({ force: true }).type(Locators.BadgeText, { force: true });
  cy.iframe(Locators.iframe).find(Locators.badge).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.BadgeText);
  cy.iframe(Locators.iframe).find(Locators.label).clear({ force: true }).type(Locators.defaultText, { force: true });
  cy.iframe(Locators.iframe).find(Locators.badge).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.defaultText);
};

// Validates badge button overlay
//
// @returns: void
//
const badgeButtonOverlayValidation = () => {
  cy.get(Locators.COMPONENT_NAME).click()
  cy.get(Locators.buttonOverlay).click()
  cy.frameLoaded(Locators.iframe);
  cy.iframe(Locators.iframe).find(Locators.Button).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.clickText);
  cy.iframe(Locators.iframe).find(Locators.overlapBadge).should('be.visible').invoke('text').then((text) => text.trim()).should('equal', Locators.txtNew);
  cy.iframe(Locators.iframe).find(Locators.overlapBadge).should('have.attr', 'overlap', Locators.attrTrue);
};

// Validates badge Icon overlay
//
// @returns: void
//
const badgeIconOverlayValidation = () => {
  cy.get(Locators.iconOverlay).click()
  cy.iframe(Locators.iframe).find(Locators.icon).eq(0).should('be.visible');
  cy.iframe(Locators.iframe).find(Locators.errorIcon).should('have.attr', 'overlap', Locators.attrTrue);
  cy.iframe(Locators.iframe).find(Locators.errorIcon).should('have.attr', 'variant', Locators.variantError);
  cy.iframe(Locators.iframe).find(Locators.errorIcon).should('have.css', 'background-color', Locators.errorbgcolor);
  cy.iframe(Locators.iframe).find(Locators.icon).eq(1).should('be.visible');
  cy.iframe(Locators.iframe).find(Locators.successIcon).eq(0).should('have.attr', 'overlap', Locators.attrTrue);
  cy.iframe(Locators.iframe).find(Locators.successIcon).eq(0).should('have.attr', 'variant', Locators.variantSuccess);
  cy.iframe(Locators.iframe).find(Locators.successIcon).eq(0).should('have.css', 'background-color', Locators.successbgcolor);
  cy.iframe(Locators.iframe).find(Locators.icon).eq(2).should('be.visible');
  cy.iframe(Locators.iframe).find(Locators.warnIcon).should('have.attr', 'overlap', Locators.attrTrue);
  cy.iframe(Locators.iframe).find(Locators.warnIcon).should('have.attr', 'variant', Locators.variantWarning);
  cy.iframe(Locators.iframe).find(Locators.warnIcon).should('have.css', 'background-color', Locators.warningbgcolor);
  cy.iframe(Locators.iframe).find(Locators.icon).eq(3).should('be.visible');
  cy.iframe(Locators.iframe).find(Locators.defaultIcon).eq(1).should('have.attr', 'overlap', Locators.attrTrue);
  cy.iframe(Locators.iframe).find(Locators.defaultIcon).eq(1).should('have.attr', 'variant', Locators.variantDefault);
  cy.iframe(Locators.iframe).find(Locators.defaultIcon).eq(1).should('have.css', 'background-color', Locators.defaultbgcolor);
}

// Validates badge appearance
//
//  @returns: void
//
const badgeAppearanceValidation = () => {
  cy.get(Locators.appearence).click()
  cy.frameLoaded(Locators.iframe);
  cy.iframe(Locators.iframe).find(Locators.defaultBadgeLabel).eq(0).should('be.visible').should('have.text', Locators.defaultValue);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(0).should('be.visible').should('have.text', Locators.txtNumSingle);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(0).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(1).should('be.visible').should('have.text', Locators.txtNumDouble);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(2).should('be.visible').should('have.text', Locators.txtNumTriple);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(3).should('be.visible').should('have.text', Locators.txtNumTetra);
  cy.iframe(Locators.iframe).find(Locators.badgeAppearanceButton).eq(1).invoke('text').then((text) => text.trim()).should('equal', Locators.successValue);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(4).should('be.visible').should('have.text', Locators.txtNumSingle);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(5).should('be.visible').should('have.text', Locators.txtNumDouble);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(6).should('be.visible').should('have.text', Locators.txtNumTriple);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(7).should('be.visible').should('have.text', Locators.txtNumTetra);
  cy.iframe(Locators.iframe).find(Locators.badgeAppearanceButton).eq(2).invoke('text').then((text) => text.trim()).should('equal', Locators.warningValue);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(8).should('be.visible').should('have.text', Locators.txtNumSingle);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(9).should('be.visible').should('have.text', Locators.txtNumDouble);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(10).should('be.visible').should('have.text', Locators.txtNumTriple);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(11).should('be.visible').should('have.text', Locators.txtNumTetra);
  cy.iframe(Locators.iframe).find(Locators.badgeAppearanceButton).eq(3).invoke('text').then((text) => text.trim()).should('equal', Locators.dangerValue);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(12).should('be.visible').should('have.text', Locators.txtNumSingle);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(13).should('be.visible').should('have.text', Locators.txtNumDouble);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(14).should('be.visible').should('have.text', Locators.txtNumTriple);
  cy.iframe(Locators.iframe).find(Locators.defaultBadge).eq(15).should('be.visible').should('have.text', Locators.txtNumTetra);
}

// Validates badge on the whole in desktop view
//
//
// @returns: void
//
const badgeValidation = () => {
  defaultbadgeValidation();
  badgeControlValidation();
  badgeButtonOverlayValidation();
  badgeIconOverlayValidation();
  badgeAppearanceValidation();
};

// Validates badge on the whole for mobile and tab views
//
// @returns: void
//
const badgeValidationMobile = () => {
  defaultbadgeValidation();
  badgeButtonOverlayValidation();
  badgeIconOverlayValidation();
  badgeAppearanceValidation();
};

describe('Functional test of Badge', () => {
  it('Visit Badge component_storybook_Javascript Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    badgeValidation();
  });

  it('Visit Badge component_storybook_Javascript Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    badgeValidation();
  });

  it('Visit Badge component_storybook_Javascript Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    badgeValidation();
  });

  it('Visit Badge component_storybook_Javascript Framework_ in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_MOBILE);
    badgeValidationMobile();
  });

  it('Visit Badge component_storybook_Angular Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    badgeValidation();
  });

  it('Visit Badge component_storybook_Angular Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    badgeValidation();
  });

  it('Visit Badge component_storybook_Angular Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    badgeValidationMobile();
  });

  it('Visit Badge component_storybook_Angular Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_MOBILE);
    badgeValidationMobile();
  });

  it('Visit Badge component_storybook_React Framework_Desktop resolution', () => {
    cy.viewport(DESKTOP.width, DESKTOP.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    badgeValidation();
  });

  it('Visit Badge component_storybook_React Framework_Tab-Landscape resolution', () => {
    cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    badgeValidation();
  });

  it('Visit Badge component_storybook_React Framework_Tab-Portrait resolution', () => {
    cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_DESKTOP);
    badgeValidationMobile();
  });

  it('Visit Badge component_storybook_React Framework in Mobile resolution', () => {
    cy.viewport(MOBILE.width, MOBILE.height);
    selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.badgeComponentLocator, DEVICE_TYPE_MOBILE);
    badgeValidationMobile();
  });
});
