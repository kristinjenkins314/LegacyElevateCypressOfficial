
describe('Receive Purchase Order Flow', () => {
  before(() => {
    cy.login(); // Custom command for login
    cy.visit('/procurement');
  });

  it('Receives a purchase order', () => {
    cy.contains('Purchase Orders').click();

    // Click on a specific purchase order to receive
    cy.get('table tbody tr').first().click();
    cy.url().should('include', '/purchase-orders/');

    // Mark order as received
    cy.contains('Mark as Received').click();
    cy.on('window:confirm', (str) => {
      expect(str).to.include('Are you sure you want to mark this order as shipped?');
      return true;
    });

    // Go to Receiving Page
    cy.contains('Go to Receiving Page').click();
    cy.url().should('include', '/receiving');

    // Verify page elements
    ['Purchase Order Number', 'Order Date', 'Ordered By', 'Supplier', 'Status'].forEach(label => {
      cy.contains(label).should('be.visible');
    });

    // Simulate scanning or entering item manually
    cy.get('[name="quantity"]').type('5');
    cy.get('[name="uom"]').type('Each');
    cy.get('[name="shelf"]').type('Shelf A');
    cy.get('[name="lotNumber"]').type('LN123');
    cy.get('[name="expirationDate"]').type('2025-12-31');
    cy.get('[name="serialNumber"]').type('SN456');
    cy.get('[name="line"]').type('1');

    // Approve Receiving List
    cy.contains('Approve Receiving List').click();

    // Verify Purchase Shipments Page
    ['Shipment #', 'Received Date', 'Show All Tracked Barcodes Button', 'Print Labels Button', 
     'Print Shipment Button', 'Details Button', 'Manufacturer', 'Lot Number', 'Serial Number', 
     'Expiration Date', 'Description', 'Quantity Scanned'
    ].forEach(text => {
      cy.contains(text).should('exist');
    });

    // Final inventory verification (mocked)
    cy.visit('/inventory');
    cy.contains('Test Item').parent().within(() => {
      cy.get('.quantity').should('contain', '5'); // Adjust selector as needed
    });
  });
});
