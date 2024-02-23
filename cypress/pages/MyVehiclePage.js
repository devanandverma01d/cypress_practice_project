import {webLocatorsVehicles} from '../locators/myVehicleLocators'


export class MyVehiclesPage{
    // Write methods and actions
    
    verifyURL(url){
        cy.url().should('eq',url)
        .and('include','myaccount/vehicles')
    }
    verfyTitle(title){
        cy.title().should('eq', title);
    }
    verifyQADODGE(text){
        cy.get(webLocatorsVehicles.QA_DODGE).should('have.text', text);
    }
    verifyGEOTOLL(text){
        cy.get(webLocatorsVehicles.geoToll).should('have.text', text);
    }
    verifyAvailable(text){
        cy.get(webLocatorsVehicles.available).should('have.text', text);
    }
    verifyPending(text){
        cy.get(webLocatorsVehicles.pending).should('have.text', text);
    }
    verifySmartApp(text){
        cy.get(webLocatorsVehicles.Smart_App).should('have.text', text);
    }
    verifySearch(id){
        cy.get(webLocatorsVehicles.inputSearch).type(id);
        cy.get(webLocatorsVehicles.inputSearch).should('have.value',id);
        cy.get(webLocatorsVehicles.searchIcon).click();
    }
    verifySortingTable(){
        cy.get('.cdk-column-id > .mat-sort-header-container > .mat-sort-header-arrow').click()
        cy.customWait()
        cy.get('.cdk-column-id > .mat-sort-header-container > .mat-sort-header-arrow').click()
    }
    verifypagination(pagination_0,pagination_1,pagination_2,pagination_3,){
        cy.get(webLocatorsVehicles.pagination).click();
        cy.get(webLocatorsVehicles.pagination_Val_0).should('have.text',pagination_0)
        cy.get(webLocatorsVehicles.pagination_Val_1).should('have.text',pagination_1)
        cy.get(webLocatorsVehicles.pagination_Val_2).should('have.text',pagination_2)
        cy.get(webLocatorsVehicles.pagination_Val_3).should('have.text',pagination_3)
    }
}