import {MyRUCTransactionsPage} from '../../pages/MyRUCTransactionsPage'
import myRUCTransationJsonData from '../../fixtures/myRUCTransactionsJsonData.json'

const myRUCTransactionsObj = new MyRUCTransactionsPage()

describe('DashBoard-Menu- My RUC Transaction',()=>{
    beforeEach(()=>{
        cy.visit(myRUCTransationJsonData.url)
        cy.login(myRUCTransationJsonData.login.email , myRUCTransationJsonData.login.password);
        cy.navigateTo("My RUC Transactions")
    })

    it("TC1- Verify URL of My RUC Transactions",()=>{
        myRUCTransactionsObj.verifyURL(myRUCTransationJsonData.ruc_transaction_url)
    })
    it("TC2- Verify Title of My RUC Transactions",()=>{
        myRUCTransactionsObj.verifyTitle(myRUCTransationJsonData.title)
    })
    it('TC3-Verify- My RUC Transactions',()=>{
        // myRUCTransactionsObj.selectVehicle()
        // myRUCTransactionsObj.selectYear()
        // myRUCTransactionsObj.selectMonth()

        myRUCTransactionsObj.verifyAllColumns(
            myRUCTransationJsonData.id,
            myRUCTransationJsonData.mro_id,
            myRUCTransationJsonData.txz_type,
            myRUCTransationJsonData.mileage,
            myRUCTransationJsonData.ruc_charge,
            myRUCTransationJsonData.fuel_tax_cr,
            myRUCTransationJsonData.ruc_balance,
            myRUCTransationJsonData.rule_name,
            myRUCTransationJsonData.date,
        )
    })
    it("TC4- Verify Pagination of My RUC Transactions",()=>{
        myRUCTransactionsObj.verifyPagination(
            myRUCTransationJsonData.pagination_10,
            myRUCTransationJsonData.pagination_25,
            myRUCTransationJsonData.pagination_50,
            myRUCTransationJsonData.pagination_100,
        )
    })

})





