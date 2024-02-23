import {webLocatorsStatements} from '../locators/myStatementLocators'

export class MyStatementsPage{
  
    verifyURL(url){
        cy.url().should('eq',url)
        .and('include','myaccount/statements')
    }
    verfyTitle(title){
        cy.title().should('eq', title);
    }
    verifyPaginationDropdown(pagination_val_10,pagination_val_25,pagination_val_50,pagination_val_100){
        cy.get(webLocatorsStatements.pagination_dropdown_tab).click()
        cy.get(webLocatorsStatements.pagination_10).should('have.text',pagination_val_10)
        cy.get(webLocatorsStatements.pagination_25).should('have.text',pagination_val_25)
        cy.get(webLocatorsStatements.pagination_50).should('have.text',pagination_val_50)
        cy.get(webLocatorsStatements.pagination_100).should('have.text',pagination_val_100)
    }
    
}