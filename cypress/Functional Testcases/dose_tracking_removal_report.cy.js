
describe('Dose Tracking - Dose Removal Report Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/Reports/DoseRemoval.aspx');
  });

  it('Validates Dose Removal Report filters and report columns', () => {
    // Navigate to Dose Removal Report
    cy.contains('Dose Tracking').click();
    cy.contains('Dose Removal Report').click();

    // Verify filters
    const filters = [
      'Search/Scan', 'Start Date', 'End Date', 'PO Number',
      'Expiration Date', 'Lot Number', 'Serial Number', 'Dose Number',
      'Purchase Order Type', 'Replacement Order', 'Location', 'Shelf', 'Search'
    ];
    filters.forEach(filter => {
      cy.contains(filter).should('exist');
    });

    // Perform search
    cy.contains('Search').click();

    // Verify report columns
    const columns = [
      'Location Name', 'Description', 'Manufacturer', 'Manufacturer Code',
      'Dose Number', 'Serial Number', 'Lot Number', 'Shelf', 'Expiration Date',
      'Quantity', 'UOM', 'Purchase Order', 'Date Removed', 'Removed By',
      'Patient', 'Replacement Order', 'Replacement Order Status',
      'Removal Reason', 'Comment'
    ];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });

    // Ensure data appears
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  });
});
