describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('BuyandBillRemoval', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').type('testadmin@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('Test123!');
    cy.get('#LoginButton').click();
    cy.get('#ddlCustomer').select('828');
    cy.get('#ContinueButton > .fas').click();
    cy.get('#drpCurrentLocation').select('3475');
    cy.get('#BuyAndBillMenu').click();
    cy.get('#liBuyAndBillRemoval').click();
    cy.get('.col-12').click();
    cy.get('#txtStartDate').clear();
    cy.get('#txtStartDate').type('8/1/2024');
    cy.get('#btnSearch').click();
    /* ==== End Cypress Studio ==== */
  });
})