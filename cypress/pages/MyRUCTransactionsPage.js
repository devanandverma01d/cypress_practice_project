import {webLoactorsTransactions} from '../locators/myRUCTransactionsLocators'

export class MyRUCTransactionsPage{
    
    verifyURL(url){
        cy.url().should('eq',url)
        .and('include','myaccount/ruc-transactions')
    }
    verifyTitle(title){
        cy.title().should('eq',title);
    }
    selectVehicle(){
        cy.get(webLoactorsTransactions.vehicle).click()
        cy.contains('2021 Dodge Challenger (2C3CDZAG1MH534411)').click();
    }
    selectYear(){
        cy.get(webLoactorsTransactions.year).click()
        cy.contains(' 2024 ').click();
    }
    selectMonth(){
        cy.get(webLoactorsTransactions.month).click()
        cy.contains(' April ').click();
    }
    verifyAllColumns(id,mro_id,txz_type,mileage,ruc_charge,fuel_tax_cr,ruc_balance,rule_name,date){
        cy.get(webLoactorsTransactions.id).should('have.text',id);
        cy.get(webLoactorsTransactions.mro_id).should('have.text',mro_id);
        cy.get(webLoactorsTransactions.txz_type).should('have.text',txz_type);
        cy.get(webLoactorsTransactions.mileage).should('have.text',mileage);
        cy.get(webLoactorsTransactions.ruc_charge).should('have.text',ruc_charge);
        cy.get(webLoactorsTransactions.fuel_tax_cr).should('have.text',fuel_tax_cr);
        cy.get(webLoactorsTransactions.ruc_balance).should('have.text',ruc_balance);
        cy.get(webLoactorsTransactions.rule_name).should('have.text',rule_name);
        cy.get(webLoactorsTransactions.date).should('have.text',date);
    }
    verifyPagination(pagination_10,pagination_25,pagination_50,pagination_100){
        cy.get(webLoactorsTransactions.pagination_tab).click()
        cy.get(webLoactorsTransactions.pagination_val_10).should('have.text',pagination_10)
        cy.get(webLoactorsTransactions.pagination_val_10).should('have.text',pagination_25)
        cy.get(webLoactorsTransactions.pagination_val_10).should('have.text',pagination_50)
        cy.get(webLoactorsTransactions.pagination_val_10).should('have.text',pagination_100)
    }
    
}