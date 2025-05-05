describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('SearchBuyandBillProducts', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').clear('k');
    cy.get('#UserName').type('kristin.jenkins@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('WeingartGold26!');
    cy.get('#LoginButton').click();
    cy.get('#ddlCustomer').select('828');
    cy.get('#ContinueButton > .fas').click();
    cy.get('#BuyAndBillMenu').click();
    cy.get('#liBuyAndBillSearch').click();
    cy.get('#txtSearch').clear();
    cy.get('#txtSearch').type('ARB10004488652');
    cy.get('#btnSearch').click();
    /* ==== End Cypress Studio ==== */
  });
})