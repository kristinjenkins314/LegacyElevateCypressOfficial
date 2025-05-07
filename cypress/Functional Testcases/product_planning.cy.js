describe('Product Planning Module', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/views/practice/patient-v2/treatment/planning/planning.aspx'); // Update with actual path
  });

  it('Displays product planning interface and columns', () => {
    cy.get('[data-cy=tab-planned-products]').should('exist');
    cy.get('[data-cy=tab-products-at-risk]').should('exist');
    cy.contains('Create a New Plan').should('exist');
    cy.get('[data-cy=search-button]').should('exist');

    const plannedColumns = [
      'Appointment Date', 'Patient Name', 'Patient ID', 'Products', 'Staff/Doctors',
      'Department', 'Procedure', 'Comment', 'Created At', 'Status'
    ];
    plannedColumns.forEach(col => {
      cy.get('[data-cy=planned-product-list]').should('contain', col);
    });

    const riskColumns = ['Product Description', 'Planned Qty', 'Current Stock'];
    cy.get('[data-cy=tab-products-at-risk]').click();
    riskColumns.forEach(col => {
      cy.get('[data-cy=products-at-risk]').should('contain', col);
    });
  });

  it('Creates a new product plan for a patient', () => {
    cy.contains('Create a New Plan').click();

    // Search for a patient
    cy.get('[data-cy=patient-search-input]').type('John Doe');
    cy.contains('Search').click();
    cy.get('[data-cy=patient-info]').should('contain', 'John Doe');

    // Fill out planning details
    cy.get('[data-cy=current-appointments]').type('Follow-up');
    cy.get('[data-cy=staff]').type('Dr. Smith');
    cy.get('[data-cy=procedure]').type('Procedure A');
    cy.get('[data-cy=appointment-date]').type('2025-06-01');
    cy.get('[data-cy=department]').type('Cardiology');
    cy.get('[data-cy=comment]').type('Plan prepared for cardiac care');

    // Assign a product
    cy.get('[data-cy=product-search]').type('Aspirin');
    cy.contains('Add Line +').click();
    cy.get('[data-cy=product-list]').should('contain', 'Aspirin');

    // Add to planning list
    cy.contains('Add to Planning Product List').click();

    // Verify the plan appears with action buttons
    cy.get('[data-cy=planned-product-list]').within(() => {
      ['Edit', 'Delete', 'Duplicate', 'Dispense'].forEach(action => {
        cy.contains(action).should('exist');
      });
    });
  });

});
