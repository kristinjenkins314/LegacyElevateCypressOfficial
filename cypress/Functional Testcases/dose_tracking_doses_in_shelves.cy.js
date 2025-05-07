
describe('Dose Tracking - Doses in Shelves Report Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/Inventory/DosesInShelves.aspx');
  });

  it('Searches for doses in shelves and verifies inventory data', () => {
    // Navigate to Doses in Shelves
    cy.contains('Dose Tracking').click();
    cy.contains('Doses in Shelves').click();

    // Verify filters
    const filters = [
      'Search/Scan', 'Supplier', 'Manufacturer', 'Purchase Order Type', 'Shelf',
      'Location', 'Serial Number', 'Manufacturer Code', 'PO Number',
      'Only in Stock', 'Search'
    ];
    filters.forEach(filter => {
      cy.contains(filter).should('exist');
    });

    // Select by barcode field and verify action buttons
    cy.get('[name="searchScan"]').type('DT-SN-001{enter}');
    ['Remove Selected', 'Transfer Selected', 'Print Selected'].forEach(button => {
      cy.contains(button).should('exist');
    });

    // Verify table columns in Doses in Shelves Details
    const columns = [
      'Location', 'Description', 'Manufacturer Code', 'Manufacturer', 'Supplier',
      'Purchase Order Number', 'Purchase Order Type', 'Purchase Received Date',
      'Shelf', 'Lot Number', 'Expiration Date', 'Serial Number',
      'Dose Number', 'Patient Name', 'Cost'
    ];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });

    // Ensure data is returned
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  });
});
