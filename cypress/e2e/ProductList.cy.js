describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Product List', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('test2.arbimed.com');
    
    cy.get('#UserName').type('testadmin@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('Test123!{enter}');
    cy.get('#ddlCustomer').select('828');
    cy.get('#ContinueButton').click();
    cy.get('#navInventoryManagement').click();
    cy.get('#liProductList').click();
    cy.get(':nth-child(2) > :nth-child(4) > #lnkGoToCustomerProduct').click();
    cy.get('#navInventoryManagement').click();
    cy.get('#liProductList').click();
    /* ==== End Cypress Studio ==== */
  });
})