
describe('Buy & Bill Transactions Report Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/History/BuyAndBillTransactions.aspx');
  });

  it('Validates Buy & Bill Transactions filters and report columns', () => {
    // Navigate to Buy & Bill Transactions
    cy.contains('Buy & Bill Tracking').click();
    cy.contains('Buy & Bill Transactions').click();

    // Verify filters
    const filters = [
      'Start Date', 'End Date', 'Staff/Doctors', 'Location Tag', 'Location',
      'Patient ID', 'PO Type', 'PO Number', 'Manufacturer Code', 'User',
      'Expiration Date', 'Serial Number', 'Lot Number', 'Shelf',
      'Unassigned', 'Search'
    ];
    filters.forEach(filter => {
      cy.contains(filter).should('exist');
    });

    // Trigger a search (optionally enter filter values here)
    cy.contains('Search').click();

    // Verify report columns
    const columns = [
      'Treatment Date', 'Patient Name', 'Patient ID', 'Product Description',
      'Manufacturer', 'Manufacturer Code', 'Serial Number', 'Lot',
      'Open Exp Date', 'Expiration Date', 'Shelf', 'Quantity', 'UOM',
      'Purchase Order', 'Purchase Order Type', 'Cost', 'Diagnoses Treated For',
      'Staff/Doctors', 'Department', 'Location', 'Unassigned',
      'Approval Alert', 'Specialty Alert', 'User'
    ];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });

    // Verify data is displayed
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  });
});
