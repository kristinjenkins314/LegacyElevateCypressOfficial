describe('Point of Sale (POS) Module', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/pointofsale/pos.aspx'); // Update with actual path
  });

  it('Loads POS interface with filters and columns', () => {
    cy.contains('Create New Order').should('exist');
    cy.contains('Point of Sale Report').should('exist');

    const filters = ['Start Date', 'End Date', 'Payment Statuses', 'Patient', 'Search by Item'];
    filters.forEach(filter => {
      cy.get('[data-cy=filters]').should('contain', filter);
    });

    const columns = ['Order #', 'Create Date', 'Customer/Patient', 'Staff/Doctors', 'Email Address', 'Payment Status'];
    columns.forEach(column => {
      cy.get('[data-cy=orders-table]').should('contain', column);
    });
  });

  it('Searches orders by date range', () => {
    cy.get('[data-cy=start-date]').type('2025-05-01');
    cy.get('[data-cy=end-date]').type('2025-05-31');
    cy.contains('Search').click();

    cy.get('[data-cy=orders-table]').within(() => {
      cy.contains('Order #').should('exist');
      ['Email Receipt', 'Print Receipt', 'Print Packing Slip', 'Duplicate', 'Payment/Refund', 'Edit']
        .forEach(button => cy.contains(button).should('exist'));
    });
  });

  it('Views order details and navigates to patient info', () => {
    cy.contains('Order #').click();

    ['Order Number', 'Customer', 'Address', 'Staff/Doctors', 'Department'].forEach(field => {
      cy.get('[data-cy=order-details]').should('contain', field);
    });

    ['Manufacturer', 'Mf Code', 'Description', 'Is Scanned Out', 'Total Cost'].forEach(field => {
      cy.get('[data-cy=order-items]').should('contain', field);
    });

    cy.contains('Patient Name').click();
    ['Location', 'First Name', 'Last Name', 'Email', 'Assigned Products', 'Usage History', 'Logs']
      .forEach(field => {
        cy.get('[data-cy=patient-details]').should('contain', field);
      });
  });

  it('Handles order actions and report', () => {
    cy.contains('Email Receipt').click();
    cy.get('[data-cy=email-modal]').should('exist');

    cy.contains('Print Receipt').click();
    cy.get('[data-cy=print-preview]').should('exist');

    cy.contains('Print Packing Slip').click();
    cy.get('[data-cy=packing-slip]').should('exist');

    cy.contains('Duplicate').click();
    cy.get('[data-cy=new-order-form]').should('exist');

    cy.contains('Payment/Refund').click();
    cy.get('[data-cy=payment-modal]').should('exist');

    cy.contains('Edit').click();
    cy.get('[data-cy=edit-order-form]').should('exist');

    // Generate POS report
    cy.contains('Point of Sale Report').click();
    ['Order Number', 'Customer', 'Department', 'Status', 'Order Total', 'Items Scanned Out'].forEach(col => {
      cy.get('[data-cy=report-table]').should('contain', col);
    });

    cy.contains('Point of Sale').click(); // Back to home
    cy.url().should('include', '/inventory/point-of-sale');
  });

});
