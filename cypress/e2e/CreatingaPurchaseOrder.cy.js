describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('CreatingaPurchaseOrder', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').type('testadmin@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('Test123!');
    cy.get('#LoginButton').click();
    cy.get('#ddlCustomer').select('828');
    cy.get('#ContinueButton').click();
    cy.get('#navProcurement').click();
    cy.get('#liPurchaseOrders').click();
    cy.get(':nth-child(2) > .btn').click();
    cy.get('#drpSupplier').select('12432');
    cy.get('#ctl00_MainContent_NewPurchaseOrderUserControl_txtPatientSearch').clear('K');
    cy.get('#ctl00_MainContent_NewPurchaseOrderUserControl_txtPatientSearch').type('Kristin Tester');
    cy.get('#btnCreatePO').click();
    cy.get('#txtQuickAdd').clear('p');
    cy.get('#txtQuickAdd').type('pen');
    cy.get('[filldata="M893828344444321"] > div > :nth-child(1) > :nth-child(3) > span').click();
    cy.get('#btnAddToOrder').click();
    cy.get('#btnPlaceOrder').click();
    /* ==== End Cypress Studio ==== */
  });
});
