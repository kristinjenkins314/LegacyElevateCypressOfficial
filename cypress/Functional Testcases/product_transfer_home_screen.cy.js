
describe('Product Transfer Home Screen', () => {
  before(() => {
    cy.login(); // Custom command for login
    cy.visit('/procurement');
  });

  it('Validates Product Transfer List and Edit Transfer functionality', () => {
    cy.contains('Product Transfers').click();
    cy.url().should('include', '/product-transfers');

    // Validate filters
    const filters = [
      'From Date', 'To Date', 'Transfer Number', 'Status', 'Type', 'Search'
    ];
    filters.forEach(filter => {
      cy.contains(filter).should('be.visible');
    });

    // Click Search and validate result columns
    cy.contains('Search').click();

    const columns = [
      'Transfer Number', 'Type', 'From Location', 'To Location',
      'Status', 'Products', 'Create Date', 'Send Date', 'Receive Date',
      'Delete', 'Review Request'
    ];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });

    // Click Transfer Number to open/edit
    cy.get('table tbody tr').first().within(() => {
      cy.contains('Transfer Number').click();
    });

    // Validate top section elements in Edit Transfer page
    const topSectionLabels = [
      'Transfer Number', 'Status', 'From', 'To', 'Notes',
      'Export Packing Slip', 'Export Check List', 'Audit Records',
      'Transfer Button', 'Search/Scan', 'Count/Scan Product'
    ];
    topSectionLabels.forEach(label => {
      cy.contains(label).should('exist');
    });

    // Validate columns within the transfer table
    const productColumns = [
      'Description', 'Manufacturer Code', 'Manufacturer', 'In Stock',
      'Open PO', 'Shelf', 'Lot Number', 'Serial Number', 'UOM',
      'Transfer Quantity', 'Status', 'Add Line', 'Delete Line', 'Save'
    ];
    productColumns.forEach(column => {
      cy.contains(column).should('exist');
    });
  });
});
