describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('DoseTransactions', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').clear('kr');
    cy.get('#UserName').type('kristin.jenkins@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('WeingartGold26!');
    cy.get('#LoginButton').click();
    cy.get('#ddlCustomer').select('855');
    cy.get('#ContinueButton > .fas').click();
    cy.get('#drpCurrentLocation').select('2419');
    cy.get('#doseMenu').click();
    cy.get('#liDoseTransactions').click();
    cy.get(':nth-child(2) > .card-body > :nth-child(1)').click();
    cy.get('#txtStart').clear();
    cy.get('#txtStart').type('02/05/2024');
    cy.get('#btnSearch').click();
    /* ==== End Cypress Studio ==== */
  });
})