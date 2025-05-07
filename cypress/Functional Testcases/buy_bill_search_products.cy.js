
describe('Search Buy & Bill Products', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login
    cy.visit('https://test2.arbimed.com/Inventory/SearchBuyAndBillBySerialNumber.aspx');
  });

  it('Searches for a Buy & Bill product by serial number and verifies product info and transactions', () => {
    // Navigate to Buy & Bill Tracking > Search Buy & Bill Products
    cy.contains('Buy & Bill Tracking').click();
    cy.contains('Search Buy & Bill Products').click();

    // Enter a serial number and search
    cy.get('[name="serialNumber"]').type('SN-BB-001{enter}');

    // Verify product information fields
    const productFields = [
      'Barcode #', 'Serial Number', 'Purchase Order', 'Manufacturer Code',
      'Shelf', 'Created', 'Product Name', 'Patient on the Purchase Order',
      'Supplier', 'Open Exp Date', 'Deleted', 'Cost', 'Replacement for Serial Number',
      'Manufacturer', 'Expiration Date', 'Inventory Location'
    ];
    productFields.forEach(field => {
      cy.contains(field).should('exist');
    });

    // If transactions exist, verify transaction fields
    const transactionColumns = [
      'Transaction Date', 'Patient', 'Quantity', 'Unit of Measure',
      'Staff/Doctors', 'Department', 'Diagnose', 'Comment', 'User'
    ];
    transactionColumns.forEach(column => {
      cy.contains(column).should('exist');
    });
  });
});
