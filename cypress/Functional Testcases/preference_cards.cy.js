describe('Preference Cards Management', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/preferencecard/list.aspx'); // Update with actual path
  });

  it('Creates and configures a new preference card', () => {
    cy.contains('Create New Preference Card').click();
    cy.get('[data-cy=preference-card-name]').type('Test Card');
    cy.get('[data-cy=specifications-name]').type('Spec-001');

    cy.get('[data-cy=location-selector]').select('Main OR');
    cy.contains('Save').click();

    cy.get('[data-cy=preference-card-list]').should('contain', 'Test Card');
  });

  it('Adds and edits items in the preference card', () => {
    cy.contains('Test Card').click();

    // Search and add item
    cy.get('[data-cy=item-search]').type('Item001{enter}');
    cy.contains('Add to Card').click();

    // Update quantity
    cy.get('[data-cy=item-quantity-input]').clear().type('5');
    cy.contains('Update').click();

    // Remove item
    cy.contains('Remove').click();

    // Check item list columns
    ['Product Image', 'Product Name', 'Quantity', 'Total Cost', 'Notes'].forEach(label => {
      cy.get('[data-cy=item-list]').should('contain', label);
    });
  });

  it('Checks product count and presence of action buttons', () => {
    cy.contains('Test Card').click();
    cy.get('[data-cy=product-count]').should('exist');
    
    ['Print', 'Barcode', 'Edit', 'Clone', 'Delete'].forEach(btn => {
      cy.contains(btn).should('be.visible').and('be.enabled');
    });
  });

  it('Performs actions: Clone, Print, Edit, Delete', () => {
    cy.contains('Clone').click();
    cy.get('[data-cy=preference-card-list]').should('contain', 'Test Card (Copy)');

    cy.contains('Print').click();
    cy.get('[data-cy=print-preview]').should('be.visible');

    cy.contains('Barcode').click();
    cy.get('[data-cy=barcode-preview]').should('be.visible');

    cy.contains('Edit').click();
    cy.get('[data-cy=specifications-name]').clear().type('UpdatedSpec');
    cy.contains('Save').click();

    cy.contains('Delete').click();
    cy.contains('Confirm').click();
    cy.get('[data-cy=preference-card-list]').should('not.contain', 'Test Card');
  });

  it('Finalizes a preference card', () => {
    cy.contains('Test Card (Copy)').click();
    cy.contains('Finalize').click();
    cy.contains('Scan out complete').should('exist');
  });

});
