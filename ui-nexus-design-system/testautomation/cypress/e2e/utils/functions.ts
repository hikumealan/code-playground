/* eslint-disable max-params */

import { CommonLocators } from '../constants/locators'
import { DEV_URL, DEVICE_TYPE_DESKTOP } from '../constants/constants'
// Launch storybook dev URL storybook identifiers
//
//
// @returns: void
export const storybookLaunch = () => {
  cy.visit(DEV_URL);
};
export const frameworksValidation = () => {
  const frameworks = ['Angular', 'React']

  frameworks.forEach((framework) => {
    cy.get(CommonLocators.frameworkSel).select(framework)
    cy.url().should('include', framework.toLowerCase().replace('.', '_'))

    cy.get(CommonLocators.frameworkSel).select('Javascript')
  })
};
// Select the framework using storybook identifiers
//
// @params: framework: string
// @params: category: string
// @params: componentName: string
// @params: componentLocator: string
// @params: deviceType: string
//
// @returns: void
export const frameworkSelection = (framework: string, category: string, componentName: string, componentLocator: string, deviceType = DEVICE_TYPE_DESKTOP) => {
  const frameworkIndexPos = {
    Javascript: 0,
    Angular: 1,
    React: 2
  }
  storybookLaunch();
  if (deviceType !== DEVICE_TYPE_DESKTOP) {
    cy.get(CommonLocators.sideNavbar).eq(0).click()
  }
  cy.get(CommonLocators.frameworkSel).each(($opt, index, _$lis) => {
    if (index === frameworkIndexPos[framework]) {
      cy.wrap($opt).select(index);
    }
  });
  cy.wait(25000);
  componentSelection(category, componentName)
  cy.get(componentLocator).click()
};
// Select the framework for mobile view or desktop view using storybook identifiers
//
// @params: framework: string
// @params: category: string
// @params: componentName: string
// @params: componentLocator: string
// @params: deviceType: string
//
// @returns: void
export const selectSBFramework = (framework: string, category: string, componentName: string, componentLocator: string, deviceType = DEVICE_TYPE_DESKTOP) => {
  const frameworkIndexPos = {
    Javascript: 0,
    Angular: 1,
    React: 2
  }
  storybookLaunch();
  if (deviceType !== DEVICE_TYPE_DESKTOP) {
    cy.get(CommonLocators.sideNavbar).eq(0).click({ force: true })
  }
  cy.get(CommonLocators.frameworkSel).each(($opt, index, _$lis) => {
    if (index === frameworkIndexPos[framework]) {
      cy.wrap($opt).select(index);
    }
  });
  componentSelection(category, componentName)
  cy.get(componentLocator).click({ force: true })
};
export const componentSelection = (section: string, component: string) => {
  cy.get(CommonLocators.componentsHeader).click({ force: true })
  cy.get(section).click({ force: true })
  cy.get(component).click({ force: true })
};
// Explicit cypress wait before taking screenshot.
//
// @parms: timeout: number
// @return: void
export const compareScreenshot = (
  locator: string,
  testname: string,
  scenario: string
): void => {
  cy.wait(CommonLocators.timeout);
  cy.get(locator).compareSnapshot(testname + scenario, 0.0);
}
// Explicit cypress wait before taking screenshot.
//
// @parms: locator: 'hide' | 'fullScreenOpen
// @return: void
export const clickElementIdentifiedByLocator = (locator: string, exactMatch = true) => {
  const locators = {
    hide: {
      name: CommonLocators.hideAddOn,
      message: 'Hide Addon clicked successfully!!'
    },
    fullScreenOpen: {
      name: CommonLocators.goToFullScreen,
      message: 'FullScreen clicked successfully!!'
    },
    Docs: {
      name: CommonLocators.docs,
      message: 'Docs Tab clicked successfully!!'
    },
    Canvas: {
      name: CommonLocators.canvas,
      message: 'Canvas Tab clicked successfully!!'
    }
  }
  if (exactMatch) {
    cy.get(locators[locator].name).eq(1).click({ force: true })
  }
  else {
    cy.contains(locators[locator].name).click({ force: true })
  }
  cy.log(locators[locator].message)
}
