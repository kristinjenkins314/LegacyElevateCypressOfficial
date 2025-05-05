describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')
  
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('StockroomReserve', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').type('testadmin@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('Test123!{enter}');
    cy.get('#ddlCustomer').select('828');
    cy.get('#ContinueButton').click();
    cy.get('#drpCurrentLocation').select('3456');
    cy.get('#lnkStockRoom > .nav-link').click();
    cy.get('#rdlOperation_2').check();
    cy.get('#txtUPC').clear('p');
    cy.get('#txtUPC').type('porous');
    cy.get('[filldata="MS988AB80MS"] > div > :nth-child(1) > :nth-child(3) > span').click();
    cy.get('#ddlReserveDepartment').select('1232');
    cy.get(':nth-child(3) > :nth-child(8) > #txtReserveQuantity').clear('1');
    cy.get(':nth-child(3) > :nth-child(8) > #txtReserveQuantity').type('1');
    cy.get('#btnGoReserve').click();
    /* ==== End Cypress Studio ==== */
  });
});
