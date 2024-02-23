import {webLocatorsCases} from '../locators/myCasesLocators'
export class MyCases{
    
    verifyURL(url){
        cy.url().should('eq',url)
        .and('include','myaccount/cases')
    }
    verifyTitle(title){
        cy.title().should('eq', title);
    }
    verifyAllColumns(caseId,issueType,subCategory,status,dateCreated,lastUpdated,actions){
        cy.get(webLocatorsCases.case_id).should('have.text',caseId);
        cy.get(webLocatorsCases.issue_type).should('have.text',issueType);
        cy.get(webLocatorsCases.sub_category).should('have.text',subCategory);
        cy.get(webLocatorsCases.status).should('have.text',status);
        cy.get(webLocatorsCases.date_created).should('have.text',dateCreated);
        cy.get(webLocatorsCases.last_updated).should('have.text',lastUpdated);
        cy.get(webLocatorsCases.actions).should('have.text',actions);
    }
    verifyPagination(pagination_10,pagination_25,pagination_50,pagination_100){
        cy.get(webLocatorsCases.pagination_tab).click()
        cy.get(webLocatorsCases.pagination_val_10).should('have.text',pagination_10)
        cy.get(webLocatorsCases.pagination_val_25).should('have.text',pagination_25)
        cy.get(webLocatorsCases.pagination_val_50).should('have.text',pagination_50)
        cy.get(webLocatorsCases.pagination_val_100).should('have.text',pagination_100)
    }
    
}