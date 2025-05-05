describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('StockroomAdd', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').clear('k');
    cy.get('#UserName').type('kristin.jenkins@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('WeingartGold26!');
    cy.get('#LoginButton').click();
    cy.get('#ddlCustomer').select('828');
    cy.get('#ContinueButton').click();
    cy.get('#lnkStockRoom > .nav-link').click();
    cy.get('#rdlOperation_0').check();
    cy.get('#txtUPC').clear('b');
    cy.get('#txtUPC').type('bags');
    cy.get(':nth-child(3) > span > b').click();
    cy.get('#txtAddQuantity').clear('10');
    cy.get('#txtAddQuantity').type('100');
    cy.get('#btnGoAdd').click();
    /* ==== End Cypress Studio ==== */
  });
});
