
describe('Stock Room - Add Function Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/inventory/stock-room');
  });

  it('Successfully scans a Data Matrix and validates product details', () => {
    cy.scanDataMatrix('VALID-DM-123');
    cy.contains('Product Name').should('exist');
    cy.contains('Lot Number').should('exist');
    cy.contains('Expiration Date').should('exist');
    cy.contains('Serial Number').should('exist');
  });

  it('Prevents scanning duplicate or invalid serial numbers', () => {
    cy.scanSerial('SERIAL-001');
    cy.scanSerial('SERIAL-001'); // Attempt duplicate
    cy.contains('error').should('exist');
  });

  it('Verifies serial number auto-generation and field visibility based on UOM', () => {
    cy.selectSerializedProduct();
    cy.get('[name="serialNumber"]').should('exist');

    cy.selectUOM('Box');
    cy.get('[name="serialNumber"]').should('not.exist'); // Field hidden for larger UOM
  });

  it('Adds product by searching with product name and manufacturer code', () => {
    cy.get('[name="productSearch"]').type('Sample Product');
    cy.contains('Sample Product').click();
    cy.contains('Add').click();
    cy.contains('Product added').should('exist');

    cy.get('[name="manufacturerCodeSearch"]').type('MFG001');
    cy.contains('Manufacturer Match').click();
    cy.contains('Add').click();
  });

  it('Validates shelf selection, creation and product assignment', () => {
    cy.selectShelf('Shelf A');
    cy.addProductToShelf();
    cy.contains('Shelf A').should('exist');

    cy.get('[name="newShelf"]').type('Shelf B');
    cy.contains('Add Shelf').click();
    cy.contains('Shelf B').should('exist');
  });

  it('Checks default supplier handling and conditional hiding', () => {
    cy.selectProductWithDefaultSupplier();
    cy.get('[name="supplier"]').should('have.value', 'Default Supplier');

    cy.get('[name="reason"]').select('Adjustment');
    cy.get('[name="supplier"]').should('not.exist');
  });

  it('Handles expiration-required products', () => {
    cy.scanProduct('EXP-PROD-001');
    cy.contains('Enter Expiration Date').should('exist');
  });

  it('Verifies full product scan and input process', () => {
    cy.scanBarcode('PROD-999');
    cy.fillRequiredInfo({ expiration: '2025-12-31', lot: 'LOT999', serial: 'SN999' });
    cy.contains('Scan Successful').should('exist');
  });
});
