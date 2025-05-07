
describe('Inventory Module Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com');
    cy.visit('https://test2.arbimed.com/inventory/inventory-management');
  });

  it('Validates inventory filters, search, columns, and edit functionality', () => {
    // Validate presence of filter fields
    const filters = [
      'Search/Scan', 'Manufacturer', 'Supplier', 'Product Group',
      'Inventory Type', 'Stock Level', 'Shelf', 'Location Tag', 'Location'
    ];
    filters.forEach(filter => {
      cy.contains(filter).should('exist');
    });

    // Apply each filter individually
    filters.forEach(filter => {
      cy.get(`[name="${filter.replace(/\s|\//g, '').toLowerCase()}"]`).select(1, { force: true });
      cy.wait(500); // Wait for inventory list to update
    });

    // Apply a combination of filters
    cy.get('[name="manufacturer"]').select(1, { force: true });
    cy.get('[name="location"]').select(1, { force: true });
    cy.get('[name="stocklevel"]').select(1, { force: true });

    // Search for a keyword/product
    cy.get('[name="search"]').type('Sample Product{enter}');
    cy.contains('Sample Product').should('exist');

    // Verify Edit Product button
    cy.contains('Edit Product').should('exist').click();
    cy.url().should('include', '/inventory/edit');

    // Verify inventory table columns
    const columns = [
      'Description', 'Manufacturer Code', 'Manufacturer', 'Product Group',
      'Location', 'Supplier', 'Cost Unit of Measure', 'Default Supplier Cost',
      'In Stock Amount', 'Total Cost'
    ];
    columns.forEach(col => {
      cy.get('table').contains('th', col).should('exist');
    });
  });

  it('Optionally cross-checks inventory data with backend', () => {
    // This step would be implemented with backend API validation or DB access
    // cy.request('/api/inventory/item/123').then((response) => {
    //   expect(response.body.name).to.eq('Sample Product');
    // });
  });
});
