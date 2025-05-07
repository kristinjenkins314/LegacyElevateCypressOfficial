
describe('Create and Send New Product Transfer', () => {
  before(() => {
    cy.login(); // Assumes custom login command
    cy.visit('/procurement');
  });

  it('Creates a new product transfer and verifies it was sent', () => {
    cy.contains('Product Transfers').click();
    cy.contains('Create').click();

    // Verify Create Transfer UI
    const createPageLabels = [
      'Transfer Number', 'Type', 'From', 'To', 'Create'
    ];
    createPageLabels.forEach(label => {
      cy.contains(label).should('be.visible');
    });

    // Select type
    cy.get('[name="type"]').select('Transfer To');

    // Create transfer
    cy.contains('Create').click();

    const transferFormLabels = [
      'Transfer Number', 'Status', 'From', 'To', 'Notes',
      'Export Packing Slip', 'Export Check List', 'Audit Records',
      'Search/Scan', 'Count/Scan Product'
    ];
    transferFormLabels.forEach(label => {
      cy.contains(label).should('be.visible');
    });

    // Enter product to transfer
    cy.get('[name="searchScan"]').type('Test Product{enter}');
    cy.contains('Test Product').click();

    // Enter quantity
    cy.get('[name="transferQuantity"]').clear().type('5');

    // Save transfer items
    cy.contains('Save').click();
    cy.contains('Save Transfer Items').should('be.visible');

    // Transfer
    cy.contains('Transfer').click();
    cy.contains('Your Transfer has been sent').should('be.visible');

    // Verify In Transit status on list page
    cy.visit('/product-transfers');
    cy.get('table').contains('td', 'In Transit').should('exist');
  });
});
