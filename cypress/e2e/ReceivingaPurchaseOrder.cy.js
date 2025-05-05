describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')

  })


  /* ==== Test Created with Cypress Studio ==== */
  it('ReceivingaPurchaseOrder', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').clear();
    cy.get('#UserName').type('testadmin@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('Test123!');
    cy.get('#LoginButton').click();
    cy.get('#ddlCustomer').select('828');
    cy.get('#ContinueButton').click();
    cy.get('#drpCurrentLocation').select('3452');
    cy.get('#navProcurement').click();
    cy.get('#liPurchaseOrders').click();
    cy.get(':nth-child(3) > :nth-child(17) > #btnReceive').click();
    cy.get('.col-1.p-1 input.form-control[tabindex$=02]').type('300');
    cy.get('#btnApprove').click();
    /* ==== End Cypress Studio ==== */
  });
});