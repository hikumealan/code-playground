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
import { selectSBFramework, compareScreenshot, clickElementIdentifiedByLocator } from '../../../../utils/functions'

/*
 * Toggle Button checked
 * 
 * @parms: locator: string
 * @returns: void
 */
const toggleButton = (locator: string) => {
    cy.iframe(Locators.iframe).find(locator).click()
}

/*
 * validates checkbox default state visual regression
 * 
 * @parms: testname: string, deviceType = string
 * @returns: void
 */
const checkboxDefaultValidation = (testname: string) => {
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    cy.iframe(Locators.iframe).find(Locators.checkbox).should('be.visible')
    clickElementIdentifiedByLocator(CommonLocators.hide)
    clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    compareScreenshot(Locators.checkBoxVR, testname, 'Scenario_01_Checkbox_Default_State_Validation')
}

/*
 * validates checkbox control visual regression
 * 
 * @parms: testname: string, deviceType = string
 * @returns: void
 */
const checkboxControlValidation = (testname: string, deviceType: string) => {
    ['Checked', 'Unchecked', 'Disabled', 'Enabled'].forEach(
        (checkBoxStates, idx) => {
            clickElementIdentifiedByLocator(CommonLocators.canvas, false)
            if (checkBoxStates === 'Checked' || 'Unchecked') {
                clickElementIdentifiedByLocator(CommonLocators.docs, false)
                toggleButton(Locators.checkedToggle)
            }
            if (checkBoxStates === 'Disabled' || 'Enabled') {
                clickElementIdentifiedByLocator(CommonLocators.docs, false)
                toggleButton(Locators.disabledToggle)
            }
            if (deviceType != DEVICE_TYPE_MOBILE) {
                clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
            }
            compareScreenshot(Locators.checkBoxVR, testname, 'Scenario_{idx}_Checkbox_Validation' + checkBoxStates + idx)
            if (deviceType != DEVICE_TYPE_MOBILE) {
                clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
            }
        })
}

/*
 * validates checkbox check configuration visual regression
 * 
 * @parms: testname: string, deviceType = string
 * @returns: void
 */
const checkConfiguration = (testname: string, deviceType: string) => {
    cy.get(Locators.checkConfig).click()
    clickElementIdentifiedByLocator(CommonLocators.canvas, false)
    if (deviceType !== DEVICE_TYPE_MOBILE) {
        clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
    compareScreenshot(Locators.checkBoxVR, testname, 'Scenario_Checkbox_Configration_Deafult_Validation');
    [Locators.configDefault, Locators.configChecked, Locators.configIndeterminateChecked, Locators.configIndeterminateExampleChecked,
    Locators.configDisabled, Locators.configEnabled, Locators.configunchecked, Locators.configIndeterminateUnChecked,
    Locators.configDisabledChecked].forEach(
        (checkConfigurationStates, idx) => {
            cy.iframe(Locators.iframe).find(checkConfigurationStates).should('be.visible').click({ force: true })
            compareScreenshot(Locators.checkBoxVR, testname, 'Scenario_{idx}_Checkbox_Validation' + idx)
            if (checkConfigurationStates === Locators.configChecked) {
                cy.iframe(Locators.iframe).find(Locators.configIndeterminateChecked).should('be.visible').click({ force: true })
            }
            if (checkConfigurationStates === Locators.configDisabled) {
                cy.iframe(Locators.iframe).find(Locators.configIndeterminateExampleChecked).should('be.visible').click({ force: true })
                cy.iframe(Locators.iframe).find(Locators.configIndeterminateChecked).should('be.visible').click({ force: true })
            }
        }
    )
    if (deviceType !== DEVICE_TYPE_MOBILE) {
        clickElementIdentifiedByLocator(CommonLocators.showFullScreen)
    }
}

/*
 * validates checkbox component visual regression for tab mobile and desktop
 * 
 * @parms: testname: string, deviceType = string
 * @returns: void
 */
const checkboxVisualRegressionValidation = (testname: string, deviceType = 'Desktop') => {
    if (deviceType === 'Desktop') {
        checkboxDefaultValidation(testname);
        checkboxControlValidation(testname, deviceType);
    }
    else if (deviceType === DEVICE_TYPE_TAB) {
        checkboxDefaultValidation(testname);
    }
    else if (deviceType === DEVICE_TYPE_MOBILE) {
        cy.get(Locators.COMPONENT_NAME).click()
        clickElementIdentifiedByLocator(CommonLocators.canvas, false)
        compareScreenshot(Locators.checkBoxVR, testname, 'Scenario_checkbox_DefaultState_Mobile_Validation')
        cy.iframe(Locators.iframe).find(Locators.checkboxInput).should('be.visible').click({ force: true })
        compareScreenshot(Locators.checkBoxVR, testname, 'Scenario_checkbox_CheckedState_Mobile_Validation')
    }
    checkConfiguration(testname, deviceType);
}

describe('Visual Regression Test For CheckBox Component', () => {
    it('Visit Checkbox component_Visual Regression_storybook_Javascript Framework_Desktop resolution', () => {
        cy.viewport(DESKTOP.width, DESKTOP.height);
        selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
        checkboxVisualRegressionValidation("Test_01_Javascript_Desktop", DEVICE_TYPE_DESKTOP);
    })

    it('Visit Checkbox component_Visual Regression_storybook_Javascript Framework_Tab-Landscape resolution', () => {
        cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
        selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
        checkboxVisualRegressionValidation("Test_02_Javascript_TabLandscape", DEVICE_TYPE_DESKTOP);
    })

    it('Visit Checkbox component_Visual Regression_storybook_Javascript Framework_Tab-Portrait resolution', () => {
        cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
        selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
        checkboxVisualRegressionValidation("Test_03_Javascript_Tabpotrait", DEVICE_TYPE_TAB);
    })

    it('Visit Checkbox component_Visual Regression_storybook_Javascript Framework_ in Mobile resolution', () => {
        cy.viewport(MOBILE.width, MOBILE.height);
        selectSBFramework(JAVASCRIPT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_MOBILE);
        checkboxVisualRegressionValidation("Test_04_Javascript_Mobile", DEVICE_TYPE_MOBILE);
    })

    it('Visit Checkbox component__Visual Regressionstorybook_Angualar Framework_Desktop resolution', () => {
        cy.viewport(DESKTOP.width, DESKTOP.height);
        selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
        checkboxVisualRegressionValidation("Test_05_Angular_Desktop", DEVICE_TYPE_DESKTOP);
    })
    it('Visit Checkbox component_Visual Regression_storybook_Angualar Framework_Tab-Landscape resolution', () => {
        cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
        selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
        checkboxVisualRegressionValidation("Test_06_Angular_TabLandscape", DEVICE_TYPE_DESKTOP);
    })
    it('Visit Checkbox component_Visual Regression_storybook_Angualar Framework_Tab-Portrait resolution', () => {
        cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
        selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
        checkboxVisualRegressionValidation("Test_07_Angular_Tabpotrait", DEVICE_TYPE_TAB);
    })
    it('Visit Checkbox component_Visual Regression_storybook_Angualar Framework in Mobile resolution', () => {
        cy.viewport(MOBILE.width, MOBILE.height);
        selectSBFramework(ANGULAR, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_MOBILE);
        checkboxVisualRegressionValidation("Test_08_Angular_Mobile", DEVICE_TYPE_MOBILE);
    })
    it('Visit Checkbox component_Visual Regression_storybook_React Framework_Desktop resolution', () => {
        cy.viewport(DESKTOP.width, DESKTOP.height);
        selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
        checkboxVisualRegressionValidation("Test_09_React_Desktop", DEVICE_TYPE_DESKTOP);
    })
    it('Visit Checkbox component_Visual Regression_storybook_React Framework_Tab-Landscape resolution', () => {
        cy.viewport(TAB_LANDSCAPE.width, TAB_LANDSCAPE.height);
        selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
        checkboxVisualRegressionValidation("Test_10_React_TabLandscape", DEVICE_TYPE_DESKTOP);
    })
    it('Visit Checkbox component_Visual Regression_storybook_React Framework_Tab-Portrait resolution', () => {
        cy.viewport(TAB_PORTRAIT.width, TAB_PORTRAIT.height);
        selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_DESKTOP);
        checkboxVisualRegressionValidation("Test_11_React_TabPotrait", DEVICE_TYPE_TAB);
    })
    it('Visit Checkbox component_Visual Regression_storybook_React Framework in Mobile resolution', () => {
        cy.viewport(MOBILE.width, MOBILE.height);
        selectSBFramework(REACT, Locators.CATEGORY, Locators.COMPONENT_NAME, Locators.checkboxComponentLocator, DEVICE_TYPE_MOBILE);
        checkboxVisualRegressionValidation("Test_12_React_Mobile", DEVICE_TYPE_MOBILE);
    })
})