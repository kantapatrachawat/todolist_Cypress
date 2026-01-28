export const visitTodoApp = () => {
    Cypress.on('uncaught:exception', () => false)
    cy.visit('https://abhigyank.github.io/To-Do-List/')
    cy.clearLocalStorage()
  }