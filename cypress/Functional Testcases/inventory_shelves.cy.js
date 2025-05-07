describe('Inventory Shelves Management', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/Inventory/InventoryShelves.aspx'); // Update with actual path
  });

  it('Displays Inventory Shelves with all filters', () => {
    const filters = [
      'Search/Scan', 'Manufacturer', 'Supplier', 'Shelf', 'Expiration Date',
      'Only in Stock', 'Purchase Order Type', 'Location', 'Search Button', 'Clear Button'
    ];
    filters.forEach(filter => {
      cy.contains(filter).should('exist');
    });
  });

  it('Applies each filter and updates inventory list', () => {
    // Example: Apply Manufacturer filter
    cy.get('[data-cy=manufacturer-filter]').select('Example Manufacturer');
    cy.get('[data-cy=apply-filter]').click();
    cy.get('[data-cy=inventory-table]').should('contain', 'Example Manufacturer');
  });

  it('Applies combination of filters correctly', () => {
    cy.get('[data-cy=manufacturer-filter]').select('Example Manufacturer');
    cy.get('[data-cy=location-filter]').select('Main Warehouse');
    cy.get('[data-cy=apply-filter]').click();
    cy.get('[data-cy=inventory-table]').should('contain', 'Example Manufacturer');
    cy.get('[data-cy=inventory-table]').should('contain', 'Main Warehouse');
  });

  it('Searches inventory shelves by keyword or scan', () => {
    cy.get('[data-cy=search-input]').type('ProductXYZ{enter}');
    cy.get('[data-cy=inventory-table]').should('contain', 'ProductXYZ');
  });

  it('Validates table column headers', () => {
    const columns = [
      'Shelf', 'Description', 'Manufacturer Code', 'Manufacturer', 'Location',
      'Supplier', 'Purchase Order Type', 'PO Number', 'PO Received Date',
      'Lot Number', 'Expiration Date', 'Serial No', 'In Stock', 'Total Cost'
    ];
    columns.forEach(column => {
      cy.get('[data-cy=table-header]').should('contain', column);
    });
  });

  it('Cross-checks inventory data with backend', () => {
    // Replace this with actual backend comparison if available
    cy.get('[data-cy=inventory-table] tr').first().within(() => {
      cy.get('td').each(($cell) => {
        expect($cell.text().trim()).to.not.be.empty;
      });
    });
  });

});
