
describe('Buy & Bill Accuracy Report Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/Reports/BuyAndBillAccuracy.aspx');
  });

  it('Validates Buy & Bill Accuracy Report filters and data', () => {
    // Navigate to Buy & Bill Accuracy Report
    cy.contains('Buy & Bill Tracking').click();
    cy.contains('Buy & Bill Accuracy Report').click();

    // Verify filters
    const filters = [
      'Start Date', 'End Date', 'Doctor', 'PO Number', 'Manufacturer Code',
      'Serial Number', 'User', 'Patient ID', 'Location', 'ICD',
      'All', 'All Errors', 'Success', 'Search'
    ];
    filters.forEach(filter => {
      cy.contains(filter).should('exist');
    });

    // Perform search
    cy.contains('Search').click();

    // Verify report columns
    const columns = [
      'Treatment Date', 'Billing Status', 'Patient', 'Manufacturer Code',
      'Serial Number', 'Purchase Order', 'Dispensed', 'Wastage',
      'Provider', 'Location', 'User'
    ];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });

    // Ensure data is returned
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  });
});
