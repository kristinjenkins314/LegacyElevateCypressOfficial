
describe('Create Purchase Order Flow', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Assumes a custom Cypress command for authentication
    cy.visit('https://test2.arbimed.com/Procurement/NewPurchaseOrder.aspx');
  });

  it('Creates a new purchase order', () => {
    cy.contains('Purchase Orders').click();
    cy.contains('New Order').click();

    cy.url().should('include', '/purchase-orders/new');

    // Fill out the purchase order form
    cy.get('[name="supplier"]').type('Test Supplier');
    cy.get('[name="type"]').select('Standard');
    cy.get('[name="requiresApproval"]').check();
    cy.get('[name="patient"]').type('John Doe');
    cy.get('[name="poNumber"]').should('have.value');

    cy.contains('Create Purchase Order').click();
    cy.contains('Quick Lookup').click();
    cy.get('[name="lookup"]').type('Test Item{enter}');
    cy.contains('Test Item').click();

    // Enter quantity, pack, and price
    cy.get('[name="quantity"]').type('10');
    cy.get('[name="purchasePack"]').type('Box');
    cy.get('[name="purchasePrice"]').type('15');

    cy.contains('Add to Order').click();

    // Check line item details
    cy.contains('Manufacturer');
    cy.contains('Manufacturer Code');
    cy.contains('Description');
    cy.contains('Qty Ordered').should('exist');

    // Buttons and fields
    const buttons = [
      'Is Paid', 'Print PO', 'Email PO', 'Export Excel', 'Make Changes',
      'Mark as Received', 'Go to Receiving Page', 'Save Notes',
      'Save Custom Fields', 'Set Invoice Number', 'Confirmation Number'
    ];
    buttons.forEach(text => cy.contains(text).should('be.visible'));

    // Edit/Remove buttons
    cy.contains('Edit').should('exist');
    cy.contains('Remove').should('exist');

    // Add New Product
    cy.contains('Add New Product').click();
    cy.get('[name="searchProduct"]').type('New Product{enter}');
    cy.contains('Create New Product').click();

    // Status transitions
    cy.contains('Creating');
    cy.contains('Send PO for Approval').click();
    cy.contains('Ok').click();
    cy.contains('Order Placed');
    cy.contains('Mark Order as Placed').click();
    cy.contains('Placed');
  });
});
