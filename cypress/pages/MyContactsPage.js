import { webLocatorsContacts } from '../locators/myContactLocators';


export class MyContactsPage{
    //Methods and actions-
    verifyURL(url){
        cy.url().should('eq',url)
        .and('include','myaccount/contacts')
    }
    verfyTitle(title){
        cy.title().should('eq', title);
    }

    verifyAllColoumnsofHomeSearch(c_id,f_name,l_name,email,role,pin,p_phone,status,d_created,action){
        cy.get(webLocatorsContacts.contact_id).should('have.text',c_id)
        cy.get(webLocatorsContacts.first_name).should('have.text',f_name)
        cy.get(webLocatorsContacts.last_name).should('have.text',l_name)
        cy.get(webLocatorsContacts.email).should('have.text',email)
        cy.get(webLocatorsContacts.role).should('have.text',role)
        cy.get(webLocatorsContacts.pin).should('have.text',pin)
        cy.get(webLocatorsContacts.primary_phone).should('have.text',p_phone)
        cy.get(webLocatorsContacts.status).should('have.text',status)
        cy.get(webLocatorsContacts.date_created).should('have.text',d_created)
        cy.get(webLocatorsContacts.action).should('have.text',action)
    }

    verifySearchAndFilterAtHomeSearch(){
        cy.get(webLocatorsContacts.search).type('999100096')
    }
    verifyActionAtSearchHome(){
        cy.get(webLocatorsContacts.action_contact).click()
        cy.customWait()
    }
    verifyPaginationDropdown(pagination_10,pagination_25,pagination_50,pagination_100){
        cy.get(webLocatorsContacts.pagination_dropdown_tab).click()
        cy.customWait()
        cy.get(webLocatorsContacts.pagination_val_10).should('have.text',pagination_10)
        cy.get(webLocatorsContacts.pagination_val_25).should('have.text',pagination_25)
        cy.get(webLocatorsContacts.pagination_val_50).should('have.text',pagination_50)
        cy.get(webLocatorsContacts.pagination_val_100).should('have.text',pagination_100)
    }

    verifyActionAtContactAddresses(){
        cy.get(webLocatorsContacts.action_contact_address).click()
        cy.get(webLocatorsContacts.delete).click()
        // cy.xpath("(//div[@class='mat-mdc-form-field-infix ng-tns-c3899553609-78'])[1]").click();
        // cy.contains(' Do not use this address anymore ').click();
    }
    
    clickAddContactButton(){
        cy.get(webLocatorsContacts.addContact).click();
    }

    enterSelectContact(){
        cy.get(webLocatorsContacts.selectContact).click({ force: true });
        cy.contains(' Last, QAFirst ').click();
    }

    enterAddressType(){
        cy.get(webLocatorsContacts.addressType).click({ force: true });
        cy.contains(' Residential ').click();
    }

    enterAddressOne(address1){
        cy.get(webLocatorsContacts.address_one).type(address1);
    }
    enterAddressTwo(address2){
        cy.get(webLocatorsContacts.address_two).type(address2);
    }
    
    enterCityName(city){
        cy.get(webLocatorsContacts.city).type(city)
    }

    enterStateName(){
        cy.get(webLocatorsContacts.state).click()
        cy.contains(' Alaska ').click();
    }

    enterZipCode(zip) {
        cy.get(webLocatorsContacts.zipCode + ' input').type(zip, { force: true });
    }
    selectCheckBox(){
        cy.get(webLocatorsContacts.checkBox, { timeout: 10000 }).should('exist').check();
    }
    clickAddAddress(){
        cy.get(webLocatorsContacts.addContactbutton).click()
    }
}