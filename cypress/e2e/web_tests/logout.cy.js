import loginPageJsonData from '../../fixtures/loginPageJsonData.json'


describe.only('DashBoard-Menu- Logout',()=>{
  before(()=>{
    cy.visit(loginPageJsonData.url)
    cy.login(loginPageJsonData.email , loginPageJsonData.password)
    cy.customWait()
  })
    it('Verify- Logout Menu in Sidebar', () => {
        cy.navigateTo('Logout');
        
      });
})