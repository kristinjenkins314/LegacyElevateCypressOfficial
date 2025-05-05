describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('StockroomDispense', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').type('testadmin@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('Test123!');
    cy.get('#LoginButton').click();
    cy.get('#ddlCustomer').select('805');
    cy.get('#ContinueButton').click();
    cy.get('#drpCurrentLocation').select('1368');
    cy.get('#lnkStockRoom > .nav-link').click();
    cy.get('#rdlOperation_1').check();
    cy.get('#txtUPC').clear('1');
    cy.get('#txtUPC').type('1cc');
    cy.get('[filldata="MS89AC7C7MS"] > div > :nth-child(1) > :nth-child(3) > span > b').click();
    cy.get('tr > :nth-child(1) > .locRadio').check();
    cy.get('#btnGoScanOut').click();
    /* ==== End Cypress Studio ==== */
  });
})