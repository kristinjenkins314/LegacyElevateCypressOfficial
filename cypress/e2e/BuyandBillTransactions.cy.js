describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('BuyandBillTransactions', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').type('testadmin@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('Test123!{enter}');
    cy.get('#ddlCustomer').select('828');
    cy.get('#ContinueButton').click();
    cy.get('#BuyAndBillMenu').click();
    cy.get('#liBuyAndBillTransaction').click();
    cy.get(':nth-child(1) > .form-group > .k-widget > .k-picker-wrap > .k-select > .k-icon').click();
    cy.get('.k-nav-prev > .k-icon').click({force: true});
    cy.get('.k-nav-prev > .k-icon').click();
    cy.get('.k-nav-prev > .k-icon').click();
    cy.get(':nth-child(1) > :nth-child(4) > .k-link').first().click();
    cy.get('#btnSearch').click();
    /* ==== End Cypress Studio ==== */
  });
})