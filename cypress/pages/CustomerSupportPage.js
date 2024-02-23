import {webLocatorsCustomerSupport} from '../locators/cutomerSupportLocators'

export class CustomerSupport{

    verifyURL(url){
        cy.url().should('eq',url)
        .and('include','myaccount/contact-us');
    }
    verifyTitle(title){
        cy.title().should('eq', title);
    }
    clickOnClickHereButton(){
        cy.get(webLocatorsCustomerSupport.click_here_button).click({force:true});
    }

    //This is for submit
    selectIssueCategoryDropdown(){
        cy.get(webLocatorsCustomerSupport.issue_category_dropdown).click();
        cy.contains(' Billing / Transaction Issues ').click();
    }
    selectIssueSubCategoryDropdown(){
        cy.get(webLocatorsCustomerSupport.issue_Sub_category_dropdown).click();
        cy.contains(' Other Billing Question ').click();
    }
    enterQuestionTextArea(question){
        cy.get(webLocatorsCustomerSupport.question_text_area).type(question);
        cy.xpath("(//span[normalize-space()='Submit'])[1]").click();
    }
    searchByCaseId(){
        cy.get(webLocatorsCustomerSupport.case_id).type(576);
    }
    viewMyCaseDetailsByClickingOnViewButton(){
        cy.xpath("(//span[contains(text(),'View')])[1]").click();
    }
    clickOnReplyButton(){
        cy.xpath("(//span[normalize-space()='Reply'])[1]").click();
    }
    clickOnCancelButton(){
        cy.xpath("(//span[normalize-space()='Cancel'])[1]").click()
    }
    enterMessageInTextArea(message){
        cy.get(webLocatorsCustomerSupport.message_text_area).type(message);
        cy.xpath("(//span[normalize-space()='Reset'])[1]").click();
        cy.wait(2000)
        cy.get(webLocatorsCustomerSupport.message_text_area).type(message);
    }
    clickOnSendReplyButton(){
        cy.xpath("(//span[normalize-space()='Send Reply'])[1]").click();
    }
    clickOnCloseButton(){
        cy.xpath("//span[normalize-space()='Close']").click();
    }
}