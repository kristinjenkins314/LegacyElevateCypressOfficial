describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')

  })

  /* ==== Test Created with Cypress Studio ==== */
  it('ReceivingaProductTransfer', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').clear();
    cy.get('#UserName').type('testadmin@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('Test123!');
    cy.get('#LoginButton').click();
    cy.get('#ddlCustomer').select('828');
    cy.get('#ContinueButton').click();
    cy.get('#navProcurement').click();
    cy.get('#trProductTransfer').click();
    cy.get(':nth-child(10) > .btn-success').click();
    cy.get('#quantity_328698 > .form-control').clear('1');
    cy.get('#quantity_328698 > .form-control').type('1');
    cy.get('#\\33 28698_location > .k-widget > .k-dropdown-wrap > .k-select > .k-icon').click();
    cy.get('#\\33 28698_lot > .form-control').click();
    cy.get('#btnApprove').click();
    /* ==== End Cypress Studio ==== */
  });
})