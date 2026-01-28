export const addData = (todo) => {
    cy.get('#new-task').type(todo)
    cy.get('.mdl-button').click()
}

export const addButton = () => {
    cy.get('.mdl-button').click()
}

export const deleteButton = () => {
    cy.get('#incomplete-tasks li button').contains('Delete').click()
}