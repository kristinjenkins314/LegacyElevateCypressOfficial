describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('CurrentDoseInventory', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').type('testadmin@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('Test123!');
    cy.get('#LoginButton').click();
    cy.get('#ddlCustomer').select('855');
    cy.get('#ContinueButton').click();
    cy.get('#doseMenu').click();
    cy.get('#liCurrentDoseInventory').click();
    /* ==== End Cypress Studio ==== */
  });
})