import { MyCases } from '../../pages/MyCasesPage';
import myCasesJsonData from '../../fixtures/myCasesJsonData.json'

const myCasesObj= new MyCases()

describe('DashBoard-Menu- My Cases',()=>{
    beforeEach(()=>{
        cy.visit(myCasesJsonData.url)
        cy.login(myCasesJsonData.login.email , myCasesJsonData.login.password);
        cy.navigateTo('My Cases')
    })
    it("TC1- Verify- URL of My Cases",()=>{
        myCasesObj.verifyURL(myCasesJsonData.my_cases_url)
    })
    it("TC2- Verify- Title of My Cases",()=>{
        myCasesObj.verifyTitle(myCasesJsonData.title)
    })
    it('TC3- Verify- My Cases Menu in Sidebar',()=>{
        myCasesObj.verifyAllColumns(
            myCasesJsonData.caseId,
            myCasesJsonData.issueType,
            myCasesJsonData.subCategory,
            myCasesJsonData.status,
            myCasesJsonData.dateCreated,
            myCasesJsonData.lastUpdated,
            myCasesJsonData.actions
        )

    })
    it("TC4- Verify- Pagination of My Cases",()=>{
        myCasesObj.verifyPagination(
            myCasesJsonData.pagination_10,
            myCasesJsonData.pagination_25,
            myCasesJsonData.pagination_50,
            myCasesJsonData.pagination_100,
        )
    })
})