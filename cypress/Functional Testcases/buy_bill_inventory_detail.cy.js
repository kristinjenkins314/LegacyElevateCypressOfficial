
describe('Buy & Bill Inventory Detail Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login
    cy.visit('https://test2.arbimed.com/BuyAndBill/BuyAndBillInShelves.aspx');
  });

  it('Searches inventory and verifies item details in Buy & Bill Inventory Detail', () => {
    // Navigate to Buy & Bill Inventory Detail
    cy.contains('Buy & Bill Tracking').click();
    cy.contains('Buy & Bill Inventory Detail').click();

    // Verify filter fields
    const filters = [
      'Search/Scan', 'Supplier', 'Manufacturer', 'Purchase Order Type', 'Shelf', 
      'Location', 'Serial Number', 'Manufacturer Code', 'PO Number', 
      'Only in Stock Toggle', 'Search', 'Clear'
    ];
    filters.forEach(filter => {
      cy.contains(filter).should('exist');
    });

    // Select by Barcode field and verify buttons
    cy.get('[name="searchScan"]').type('SN-BB-001{enter}');
    ['Remove Selected', 'Transfer Selected', 'Print Selected'].forEach(button => {
      cy.contains(button).should('exist');
    });

    // Verify inventory detail columns
    const columns = [
      'Description', 'Manufacturer', 'Manufacturer Code', 'Supplier', 'Location',
      'Purchase Order Number', 'Purchase Order Type', 'Purchase Received Date',
      'Patient Name', 'Shelf', 'Lot Number', 'Open Exp Date', 'Expiration Date',
      'Serial No', 'Quantity', 'UOM', 'Cost'
    ];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });
  });
});
