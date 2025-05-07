
describe('Stock Room - Dispense Function Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com');
    cy.visit('https://test2.arbimed.com/inventory/stock-room');
  });

  it('Scans Data Matrix and retrieves correct product details', () => {
    cy.scanDataMatrix('VALID-DM-456');
    ['Lot Number', 'Expiration Date', 'Serial Number'].forEach(detail => {
      cy.contains(detail).should('exist');
    });
  });

  it('Verifies system selects correct Lot and Serial Numbers', () => {
    cy.scanDataMatrix('SERIALIZED-001');
    cy.contains('Lot Number:').should('exist');
    cy.contains('Serial Number:').should('exist');
  });

  it('Displays error if serial/lot number is not found', () => {
    cy.scanDataMatrix('INVALID-DM');
    cy.contains('Not Found').should('exist');
  });

  it('Searches and adds products by name and manufacturer code', () => {
    cy.get('[name="productSearch"]').type('Test Product');
    cy.contains('Add to Dispense').click();
    cy.contains('Product added').should('exist');

    cy.get('[name="manufacturerSearch"]').type('MFG002');
    cy.contains('Add to Dispense').click();
  });

  it('Prevents dispensing if quantity exceeds stock', () => {
    cy.enterDispenseQuantity(1000); // exceeds
    cy.contains('Exceeds available stock').should('exist');
  });

  it('Supports adding multiple items to dispense list', () => {
    cy.addProductToDispense('Product A');
    cy.addProductToDispense('Product B');
    cy.get('table tbody tr').should('have.length.at.least', 2);
  });

  it('Requires Staff/Doctor/Procedure/Patient fields when configured', () => {
    cy.selectProductWithRequiredFields();
    cy.contains('Please complete required fields').should('exist');
  });

  it('Validates behavior in Adjustment mode', () => {
    cy.selectDispenseMode('Adjustment');
    ['Staff/Doctor', 'Department', 'Patient'].forEach(field => {
      cy.contains(field).should('not.exist');
    });
  });

  it('Dispenses product with all correct info recorded', () => {
    cy.scanBarcode('PROD-123');
    cy.fillRequiredInfo({ lot: 'L123', expiration: '2025-12-31', serial: 'SN123' });
    cy.clickDispense();
    cy.contains('Dispensed successfully').should('exist');
  });

  it('Handles preference cards properly', () => {
    cy.scanPreferenceCard('PREF-001');
    cy.contains('Preference Card').should('exist');

    cy.get('table tbody tr').should('have.length.greaterThan', 0);
    cy.contains('Out of Stock').should('not.exist');

    cy.contains('Dispense All').click();
    cy.contains('All items dispensed').should('exist');
  });
});
