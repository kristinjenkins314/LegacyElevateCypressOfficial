
describe('Receive Product Transfer at Destination Location', () => {
  before(() => {
    cy.loginAsLocation('destination-location'); // Custom login for receiving location
    cy.visit('/procurement');
  });

  it('Receives a transferred product and verifies shipment details', () => {
    // Verify banner for incoming transfer
    cy.contains('A transfer has been sent to your location').should('exist');
    cy.contains('Receive Purchase Order').click();

    // Verify redirected to Receive Transfer page
    cy.url().should('include', '/receive-transfer');

    // Enter quantity and UOM for received product
    cy.get('[name="quantity"]').type('5');
    cy.get('[name="uom"]').type('Each');

    // Approve Receiving List
    cy.contains('Approve Receiving List').click();

    // Verify Purchase Shipments Page
    const shipmentDetails = [
      'Shipment #', 'Received Date', 'Show All Tracked Barcodes Button',
      'Print Labels Button', 'Print Shipment Button', 'Details Button',
      'Manufacturer', 'Manufacturer Code', 'Lot Number', 'Serial Number',
      'Expiration Date', 'Description', 'Quantity Scanned'
    ];
    shipmentDetails.forEach(text => {
      cy.contains(text).should('exist');
    });
  });
});
