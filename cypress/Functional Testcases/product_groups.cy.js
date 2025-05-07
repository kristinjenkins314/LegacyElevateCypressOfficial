describe('Product Group Management', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/Views/Practice/Product/Product-Group.aspx'); // Update with actual path
  });

  it('Loads product groups page and displays UI elements', () => {
    cy.contains('New').should('exist');
    cy.contains('Edit').should('exist');
    cy.contains('Delete').should('exist');
  });

  it('Creates a new product group', () => {
    cy.contains('New').click();
    cy.get('[data-cy=product-group-name]').type('Test Group');
    cy.contains('Submit').click();

    cy.get('[data-cy=product-group-list]').should('contain', 'Test Group');
  });

});
