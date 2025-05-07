describe('Serialized Product Management', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/Inventory/InventoriesInShelves.aspx'); // Update with actual path
  });

  it('Displays Serialized Product Management with all filters', () => {
    const filters = [
      'Search/Scan', 'Manufacturer', 'Supplier', 'Manufacturer Code', 'Group Name',
      'Only in Stock', 'Shelf', 'Serial Number', 'Facility', 'Purchase Order Type',
      'Search Button', 'Clear Button', 'Select by Barcode', 'Remove Selected',
      'Transfer Selected', 'Remove From Group', 'Add to Group'
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

  it('Searches serialized products by keyword or scan', () => {
    cy.get('[data-cy=search-input]').type('Product123{enter}');
    cy.get('[data-cy=inventory-table]').should('contain', 'Product123');
  });

  it('Validates table column headers', () => {
    const columns = [
      'Description', 'Manufacturer Code', 'Manufacturer', 'Group', 'Location',
      'Supplier', 'Purchase Order Number', 'Purchase Order Type', 'Purchase Received Date',
      'Patient Name', 'Shelf', 'Lot Number', 'Expiration Date', 'Serial No',
      'Quantity', 'UOM', 'Cost'
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
