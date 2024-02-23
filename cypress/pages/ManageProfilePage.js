import {webLocatorsManageProfile} from '../locators/manageProfileLocators'

export class ManageProfile{

    verifyURL(url){
        cy.url().should('eq',url)
        .and('include',"myaccount/profile")
    }
    verfyTitle(title){
        cy.title().should('eq', title);
    }
    enterCurrentPassword(currentPass){
        cy.get(webLocatorsManageProfile.current_password).click({force:true}).type(currentPass)
    }
    enterNewPassword(newPass){
        cy.get(webLocatorsManageProfile.new_password).click({force:true}).type(newPass)
    }
    reEnterNewPassword(re_newPass){
        cy.get(webLocatorsManageProfile.re_new_password).type(re_newPass) 
    }
}