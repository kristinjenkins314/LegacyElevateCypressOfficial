describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Create New Patient', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').type('testadmin@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('Test123!');
    cy.get('#LoginButton').click();
    cy.get('#ddlCustomer').select('828');
    cy.get('#ContinueButton').click();
    cy.get('div > .nav-link').click();
    cy.get(':nth-child(1) > .form-group > .btn').click();
    cy.get('.fancybox-slide').click();
    cy.get('#text-first-name').type('kristin',{ force: true });
    cy.get(':nth-child(7) > .form-group > .btn').click({ force: true });
    cy.get('[href="Details.aspx?Id=398573112&NoHeaderr=1"]').click({ force: true });
    /* ==== End Cypress Studio ==== */
  });
})