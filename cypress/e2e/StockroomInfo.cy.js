describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('StockroomInfo', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').type('testadmin@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('Test123!');
    cy.get('#LoginButton').click();
    cy.get('#ddlCustomer').select('828');
    cy.get('#ContinueButton').click();
    cy.get('#lnkStockRoom > .nav-link').click();
    cy.get('#txtUPC').clear('t');
    cy.get('#txtUPC').type('tape');
    cy.get('[filldata="MS555BCF7MS"] > div').click();
    /* ==== End Cypress Studio ==== */
  });
})