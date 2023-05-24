// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin';
// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) =>
// returning false here prevents Cypress from
// failing the test
  false)

after(() => {
  cy.task('generateReport')
})
// load and register the grep feature using "require" function
// https://github.com/bahmutov/cy-grep
const registerCypressGrep = require('@bahmutov/cy-grep')
registerCypressGrep()

