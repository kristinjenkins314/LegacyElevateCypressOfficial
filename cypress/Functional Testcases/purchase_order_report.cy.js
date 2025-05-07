
describe('Purchase Order Report Verification', () => {
  before(() => {
    cy.login(); // Custom command for login
    cy.visit('/procurement');
  });

  it('Validates Purchase Order Report page', () => {
    cy.contains('Purchase Order Report').click();

    // Validate filters
    const filters = [
      'Order Type', 'Status', 'Location', 'Supplier',
      'Start Date', 'End Date', 'Search', 'Export PDF', 'Export Excel'
    ];
    filters.forEach(filter => {
      cy.contains(filter).should('be.visible');
    });

    // Validate columns in the report table
    const columns = [
      'Location', 'Purchase Order Number', 'Status', 'Supplier', 'Created By',
      'Created Date', 'Placed By', 'Placed Date', 'Received By', 'Received Date',
      'Delivery Time', 'Delivery %', 'Total Price'
    ];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });

    // Click Details Button and verify information
    cy.get('table tbody tr').first().within(() => {
      cy.contains('Details').click();
    });

    const details = [
      'Created By', 'Placed By', 'Received By', 'Approved By Tier 1',
      'Approved By Tier 2', 'Approved By Tier 3', 'Placed Date', 'Received Date',
      'Delivery Time', 'Date Approved by Tier 1', 'Date Approved by Tier 2',
      'Date Approved by Tier 3', 'Location', 'Supplier', 'Status Confirmation',
      'Total Price', 'Export PDF', 'Description', 'Manufacturer Code',
      'Manufacturer', 'Qty Ordered', 'UOM', 'Unit Price', 'Qty Received', 'Comment'
    ];
    details.forEach(item => {
      cy.contains(item).should('exist');
    });

    // Final check: verify purchase orders appear in report
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  });
});
