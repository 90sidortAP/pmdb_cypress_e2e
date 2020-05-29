import './commands/commandsTemplates'
import './commands/commandsTemplatesState'
import './commands/commandsLogin'
import './commands/commandsGeneral'
import './commands/commandsProjectsState'
import './commands/commandsProjects'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

Cypress.Screenshot.defaults({
    screenshotOnRunFailure: false
  })