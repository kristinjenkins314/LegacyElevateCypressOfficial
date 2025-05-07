
describe('Dose Tracking - Dose Transactions Report Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/History/DoseTransactions.aspx');
  });

  it('Validates Dose Transactions filters and report columns', () => {
    // Navigate to Dose Transactions
    cy.contains('Dose Tracking').click();
    cy.contains('Dose Transactions').click();

    // Verify filters
    const filters = [
      'Search/Scan', 'Start Date', 'End Date', 'Eye', 'Staff/Doctors',
      'Location Tag', 'Location', 'Patient ID', 'PO Type', 'PO Number',
      'Manufacturer Code', 'Username', 'Expiration Date', 'Dose Number',
      'ICD', 'Serial Number', 'Lot Number', 'Shelf', 'Unassigned', 'Search'
    ];
    filters.forEach(filter => {
      cy.contains(filter).should('exist');
    });

    // Trigger search
    cy.contains('Search').click();

    // Verify report columns
    const columns = [
      'Treatment Date', 'Patient Name', 'Patient ID', 'Product Description',
      'Manufacturer', 'Manufacturer Code', 'Serial Number', 'Dose',
      'Lot Number', 'Expiration Date', 'Shelf', 'Quantity', 'UOM',
      'Purchase Order', 'Purchase Order Type', 'Cost', 'Eye Treated',
      'Diagnoses Treated For', 'Staff/Doctors', 'Department', 'Location',
      'Is Unassigned', 'Approval Alert', 'Specialty Alert', 'PAP Swap',
      'Is Specialty', 'Username'
    ];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });

    // Ensure data is displayed
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  });
});
