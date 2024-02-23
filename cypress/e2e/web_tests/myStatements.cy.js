import { MyStatementsPage } from '../../pages/MyStatementsPage';
import myStatementJsonData from '../../fixtures/myStatementsJsonData.json'

const myStatementsObj = new MyStatementsPage()

describe("DashBoard-Menu- My Statements",()=>{
    beforeEach(()=>{
        cy.visit(myStatementJsonData.url)
        cy.login(myStatementJsonData.login.email , myStatementJsonData.login.password)
        cy.customWait()
        cy.navigateTo('My Statements')
    })

    it("TC1- Verify URL",()=>{
        myStatementsObj.verifyURL(myStatementJsonData.statements_url)
    })
    

    it('TC2- Verify- My Statements',()=>{
        myStatementsObj.verfyTitle(myStatementJsonData.title)
    })

    it("TC3- Verify Pagination Dropdown at Account Statements",()=>{
        myStatementsObj.verifyPaginationDropdown(
            myStatementJsonData.pagination_val_10,
            myStatementJsonData.pagination_val_25,
            myStatementJsonData.pagination_val_50,
            myStatementJsonData.pagination_val_100,
        )
    })
})