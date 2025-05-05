describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Patient Search', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').clear('kr');
    cy.get('#UserName').type('kristin.jenkins@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('WeingartGold26!');
    cy.get('#LoginButton').click();
    cy.get('#ddlCustomer').select('828');
    cy.get('#ContinueButton').click();
    cy.get('div > .nav-link').click();
    cy.get('#text-first-name').clear('t');
    cy.get('#text-first-name').type('thomas');
    cy.get(':nth-child(7) > .form-group > .btn').click();
    cy.get('[href="Details.aspx?Id=398573079&NoHeaderr=1"]').click();
    /* ==== End Cypress Studio ==== */
  });
})
