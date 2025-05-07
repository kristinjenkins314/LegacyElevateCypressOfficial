
describe('Stock Room - Move/Transfer Function Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com');
    cy.visit('https://test2.arbimed.com/inventory/stock-room');
  });

  it('Scans Data Matrix or Label and retrieves correct item', () => {
    cy.scanDataMatrix('DM-ITEM-001');
    cy.contains('Lot Number').should('exist');
    cy.contains('Expiration Date').should('exist');
    cy.contains('Serial Number').should('exist');

    cy.scanGeneratedLabel('LBL-001');
    cy.contains('Correct Product').should('exist');

    cy.scanPrintedLabel('PRINTED-001');
    cy.contains('Correct Product').should('exist');
  });

  it('Returns correct lot/serial from general and specific labels', () => {
    cy.scanLabel('GEN-LABEL');
    cy.contains('Correct Product').should('exist');

    cy.scanLabel('LOT-SPECIFIC-123');
    cy.contains('Lot Number').should('exist');
  });

  it('Displays error message if lot/serial not found', () => {
    cy.scanDataMatrix('INVALID-XYZ');
    cy.contains('not found').should('exist');
  });

  it('Adds multiple products to a transfer', () => {
    cy.addProductToTransfer('Product A');
    cy.addProductToTransfer('Product B');
    cy.get('table tbody tr').should('have.length.at.least', 2);
  });

  it('Prevents transfer if quantity exceeds available stock', () => {
    cy.initiateTransfer('Product A', 9999);
    cy.contains('quantity exceeds available stock').should('exist');
  });

  it('Transfers product between shelves', () => {
    cy.transferBetweenShelves('Product A', 2, 'Shelf 1', 'Shelf 2');
    cy.contains('Transfer successful').should('exist');
  });

  it('Transfers product between locations', () => {
    cy.transferBetweenLocations('Product B', 1, 'Location A', 'Location B');
    cy.contains('Transfer successful').should('exist');
  });

  it('Displays error if product does not exist in destination location', () => {
    cy.transferToInvalidLocation('Product Z', 1, 'Location X');
    cy.contains('product does not exist in the selected location').should('exist');
  });
});
