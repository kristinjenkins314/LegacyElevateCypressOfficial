describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('CreateaProductTransfer', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').clear('k');
    cy.get('#UserName').type('kristin.jenkins@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('WeingartGold26!{enter}');
    cy.get('#ddlCustomer').select('828');
    cy.get('#ContinueButton').click();
    cy.get('#navProcurement').click();
    cy.get('#trProductTransfer').click();
    cy.get(':nth-child(1) > .form-group > .btn').click();
    cy.get('#selFacility').select('3452');
    cy.get('.col > .btn').click();
    cy.get('#searchByName').clear('l');
    cy.get('#searchByName').type('pen');
      cy.get('#navProcurement').click();
    cy.get('#trProductTransfer').click();
    /* ==== End Cypress Studio ==== */
  });
})