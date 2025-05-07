
describe('Dose Tracking - Search Dose by Serial Number', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/Inventory/TrackByItem.aspx');
  });

  it('Searches for a dose by serial number and verifies product and transaction info', () => {
    // Navigate to Dose Tracking > Search Dose
    cy.contains('Dose Tracking').click();
    cy.contains('Search Dose').click();

    // Enter serial number and search
    cy.get('[name="serialNumber"]').type('DT-SN-001{enter}');

    // Verify product information fields
    const productFields = [
      'Barcode #', 'Serial Number', 'Purchase Order', 'Manufacturer Code',
      'Shelf', 'Created', 'Product Name', 'Patient on the Purchase Order',
      'Supplier', 'Open Exp Date', 'Deleted', 'Cost',
      'Replacement for Serial Number', 'Manufacturer',
      'Expiration Date', 'Inventory Location'
    ];
    productFields.forEach(field => {
      cy.contains(field).should('exist');
    });

    // If transactions are shown, verify their columns
    const transactionColumns = [
      'Transaction Date', 'Patient', 'Quantity', 'Unit of Measure',
      'Staff/Doctors', 'Department', 'Diagnose', 'Comment', 'User'
    ];
    transactionColumns.forEach(column => {
      cy.contains(column).should('exist');
    });
  });
});
