describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('BuyandBillMenuOptions', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://test2.arbimed.com/Account/Login.aspx');
    cy.get('#UserName').clear('k');
    cy.get('#UserName').type('kristin.jenkins@elevateht.com');
    cy.get('#Password').clear();
    cy.get('#Password').type('WeingartGold26!{enter}');
    cy.get('#ddlCustomer').select('828');
    cy.get('#ContinueButton').click();
    cy.get('#BuyAndBillMenu').click();
    cy.get('#liBuyAndBillAssign').click();
    cy.get('#BuyAndBillMenu').click();
    cy.get('#liBuyAndBillSearch').click();
    cy.get('#BuyAndBillMenu').click();
    cy.get('#liBuyAndBillInShelves').click();
    cy.get('#BuyAndBillMenu').click();
    cy.get('#liBuyAndBillInventory').click();
    cy.get('#BuyAndBillMenu').click();
    cy.get('#liBuyAndBillTransaction').click();
    cy.get('#BuyAndBillMenu').click();
    cy.get('#liBuyAndBillRemoval').click();
    cy.get('#BuyAndBillMenu').click();
    cy.get('#liBuyAndBillAccuracy').click();
    cy.get('#BuyAndBillMenu').click();
    cy.get('#liBuyAndBillRevenue').click();
    /* ==== End Cypress Studio ==== */
  });
})