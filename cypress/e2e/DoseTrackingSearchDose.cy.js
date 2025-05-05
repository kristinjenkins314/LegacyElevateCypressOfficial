describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('DoseTrackingSearchDose', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').clear('k');
    cy.get('#UserName').type('kristin.jenkins@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('WeingartGold26!{enter}');
    cy.get('#ddlCustomer').select('855');
    cy.get('#ContinueButton').click();
    cy.get('#drpCurrentLocation').select('2419');
    cy.get('#doseMenu').click();
    cy.get('#liSearchDose').click();
    cy.get('#txtSearch').click();
    cy.get('.card-body > :nth-child(1) > .col-6').click();
    cy.get('#txtSearch').clear('B');
    cy.get('#txtSearch').type('BEO3406249');
    cy.get('#btnSearch').click();
    /* ==== End Cypress Studio ==== */
  });
})