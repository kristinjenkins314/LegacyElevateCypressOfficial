describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('PurchaseOrderHomeScreen', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').type('testadmin@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('WTest123!');
    cy.get('#LoginButton > .fas').click();
    cy.get('#ddlCustomer').select('828');
    cy.get('#ContinueButton').click();
    cy.get('#navProcurement').click();
    cy.get('#liPurchaseOrders').click();
    cy.get('#navProcurement').click();
    cy.get('#liPurchaseOrders').click();
    /* ==== End Cypress Studio ==== */
  });
})