import {CustomerSupport} from '../../pages/CustomerSupportPage'
import customerSupportJsonData from '../../fixtures/customerSupportJsonData.json'

const CustomerSupportObj = new CustomerSupport()

describe('Dashboard-Menu- Customer Support',()=>{
    beforeEach(()=>{
        cy.visit(customerSupportJsonData.url)
        cy.login(customerSupportJsonData.login.email , customerSupportJsonData.login.password)
        cy.customWait()
        cy.navigateTo('Customer Support');
    })
    it("TC1- Verify- URL of Customer Support Menu",()=>{
        CustomerSupportObj.verifyURL(customerSupportJsonData.customer_support_url)
    })
    it("TC2- Verify- URL of Customer Support Menu",()=>{
        CustomerSupportObj.verifyTitle(customerSupportJsonData.title)
    })
    it('TC3-Verify- Customer Support Menu in Sidebar',()=>{
        CustomerSupportObj.clickOnClickHereButton()
        CustomerSupportObj.selectIssueCategoryDropdown()
        CustomerSupportObj.selectIssueSubCategoryDropdown()
        CustomerSupportObj.enterQuestionTextArea(customerSupportJsonData.question)
        CustomerSupportObj.searchByCaseId()
        CustomerSupportObj.viewMyCaseDetailsByClickingOnViewButton()
        CustomerSupportObj.clickOnReplyButton()
        CustomerSupportObj.clickOnCancelButton()
        CustomerSupportObj.clickOnReplyButton()
        CustomerSupportObj.enterMessageInTextArea(customerSupportJsonData.message)
        CustomerSupportObj.clickOnSendReplyButton()
        CustomerSupportObj.clickOnCloseButton()
    })
})