
describe('Buy & Bill Removal Report Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/Reports/BuyAndBillRemoval.aspx');
  });

  it('Validates Buy & Bill Removal filters and report columns', () => {
    // Navigate to Buy & Bill Removal
    cy.contains('Buy & Bill Tracking').click();
    cy.contains('Buy & Bill Removal').click();

    // Verify filters
    const filters = [
      'Start Date', 'End Date', 'Manufacturer Code', 'PO Number',
      'Expiration Date', 'Lot Number', 'Serial Number', 'Purchase Order Type',
      'Replacement Order', 'Location', 'Shelf', 'Search'
    ];
    filters.forEach(filter => {
      cy.contains(filter).should('exist');
    });

    // Trigger a search (optionally apply filters)
    cy.contains('Search').click();

    // Verify report columns
    const columns = [
      'Location Name', 'Description', 'Manufacturer', 'Serial Number',
      'Lot Number', 'Open Exp Date', 'Expiration Date', 'Shelf', 'Quantity', 'UOM',
      'Purchase Order', 'Purchase Order Type', 'Date Removed', 'Removed By',
      'Patient', 'Replacement Order', 'Replacement Order Status',
      'Removal Reason', 'Comment'
    ];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });

    // Verify that results appear
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  });
});
