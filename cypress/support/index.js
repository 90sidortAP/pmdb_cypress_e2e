import './commands/commandsTemplates'
import './commands/commandsTemplatesState'
import './commands/commandsLogin'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  Cypress.Screenshot.defaults({
    screenshotOnRunFailure: false
  })