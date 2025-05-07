describe('Product List Management', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/product/list'); // Update with actual path
  });

  it('Loads product list and verifies filters and columns', () => {
    const filters = ['Search', 'UPC', 'Manufacturer', 'Product Group'];
    filters.forEach(filter => {
      cy.get('[data-cy=filters]').should('contain', filter);
    });

    const columns = ['Mf Code', 'Manufacturer', 'Description'];
    columns.forEach(column => {
      cy.get('[data-cy=product-table]').should('contain', column);
    });

    cy.contains('Add to This Location').should('exist');
    cy.contains('Edit').should('exist');
  });

  it('Adds a product to this location', () => {
    cy.contains('Add to This Location').first().click();

    cy.on('window:alert', (text) => {
      expect(text).to.contain('The specified product was added to your inventory');
    });

    ['Edit', 'Go to Product', 'Remove'].forEach(button => {
      cy.contains(button).should('exist');
    });
  });

  it('Navigates to product edit page', () => {
    cy.contains('Go to Product').click();
    cy.url().should('include', '/inventory/edit-product');
  });

  it('Removes product from inventory and handles warnings', () => {
    cy.contains('Remove').click();

    cy.on('window:confirm', (text) => {
      expect(text).to.include('This product will be deleted from all locations!');
      return true;
    });

    cy.on('window:alert', (text) => {
      expect(text).to.include('make sure inventory quantity is zero');
    });
  });

});
