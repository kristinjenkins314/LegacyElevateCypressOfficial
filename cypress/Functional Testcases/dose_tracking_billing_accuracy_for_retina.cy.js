
describe('Dose Tracking - Billing Accuracy Report for Retina', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/Reports/BillingAccuracy.aspx');
  });

  it('Validates Billing Accuracy Report filters and columns for Retina workflow', () => {
    // Navigate to Billing Accuracy Report
    cy.contains('Dose Tracking').click();
    cy.contains('Billing Accuracy Report').click();

    // Verify filters
    const filters = [
      'Search/Scan', 'Start Date', 'End Date', 'Staff/Doctor', 'PO Number', 'Eye',
      'Ignore ICD Mismatch Error', 'Dose Number', 'Username', 'Patient ID',
      'Location', 'ICD', 'All', 'All Errors', 'No Billing Records', 'Success', 'Search'
    ];
    filters.forEach(filter => {
      cy.contains(filter).should('exist');
    });

    // Perform search
    cy.contains('Search').click();

    // Verify report columns
    const columns = [
      'Treatment Date', 'Billing Status', 'Patient', 'Manufacturer Code',
      'Dose Number', 'Purchase Order', 'Eye Treated', 'ICD',
      'Staff/Doctor', 'Location', 'Username'
    ];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });

    // Ensure data is returned
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  });
});
