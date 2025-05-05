describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('DoseRemovalReport', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').clear();
    cy.get('#UserName').type('kristin.jenkins@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('WeingartGold26!');
    cy.get('#LoginButton').click();
    cy.get('#ddlCustomer').select('855');
    cy.get('#ContinueButton').click();
    cy.get('#doseMenu').click();
    cy.get('#liDoseRemovalReport').click();
    /* ==== End Cypress Studio ==== */
  });
})