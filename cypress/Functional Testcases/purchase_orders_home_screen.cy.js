
describe('Verify Purchase Orders Home Screen', () => {
  before(() => {
    cy.login(); // Custom login command
    cy.visit('/procurement');
  });

  it('Validates Purchase Orders screen', () => {
    cy.contains('Purchase Orders').click();
    cy.url().should('include', '/purchase-orders');

    // Verify filters
    const filters = [
      'PO Number', 'Invoice Number', 'Manufacturer Code', 'From Date', 'To Date',
      'Order Type', 'Supplier', 'Status', 'Paid', 'Facility', 'Search', 'Clear'
    ];
    filters.forEach(filter => {
      cy.contains(filter).should('be.visible');
    });

    // Verify table columns
    const columns = [
      'Type', 'Supplier', 'Location', 'Status', 'Items', 'Invoice Number',
      'Tracking Number', 'Create Date', 'Received Date', 'Completed Date',
      'Order Total', 'Total Products', 'B/O Products', 'Paid', 'Patient'
    ];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });

    // Verify order statuses appear
    const statuses = [
      'Creating', 'Awaiting Approval', 'Approved', 'Order Placed',
      'Partially Received', 'Cancelled'
    ];
    statuses.forEach(status => {
      cy.contains(status).should('exist');
    });

    // Click into a purchase order
    cy.get('table tbody tr').first().click();
    cy.url().should('include', '/purchase-orders/');

    // Verify action buttons
    ['Cancel', 'Complete', 'Receive', 'Shipments'].forEach(button => {
      cy.contains(button).should('exist');
    });

    // Ensure purchase orders are visible
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  });
});
