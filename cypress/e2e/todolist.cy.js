import { addData, addButton, deleteButton } from "../utils/function.cy";
import { visitTodoApp } from "../utils/setup.cy";
import { selectors } from "../utils/selector.cy";

describe('To-Do List - Cypress', () => {

    beforeEach(() => {
      visitTodoApp()
    })
  
    it('TC01: Should add a new task', () => {
      addData("Do Exam")
      cy.get(selectors.taskItem).should('contain.text', 'Do Exam')
    })
  
    it('TC02: Should not add empty task', () => {
        addButton();
        cy.get(selectors.taskItem).should('not.exist')
    })
  
    it('TC03: Should mark task as completed', () => {
      addData("Read Book")
      cy.get(selectors.incompleteCheckbox).check()
      cy.get(selectors.completedItem).should('contain.text', 'Read Book')
    })
  
    it('TC04: Should delete a task', () => {
        addData("Exercise")
        deleteButton();
        cy.get(selectors.taskItem).should('have.length', 0)
    })
  
  })