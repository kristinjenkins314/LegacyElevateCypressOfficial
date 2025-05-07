describe('Assemble Kit in Bill of Materials', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/inventory/bom/Assembly.aspx'); // Update with actual path
  });

  it('Assembles a kit from the BOM list', () => {
    // Click Assemble for the first kit
    cy.get('[data-cy=bom-list]').contains('Assemble').first().click();

    // Verify expected columns on the Assembly page
    const assemblyColumns = [
      'Description', 'Manufacturer Code', 'Manufacturer', 'Include in Kit',
      'Lot', 'Expiration Date', 'Serial Number', 'Shelf',
      'Available Quantity', 'Quantity to Use'
    ];
    assemblyColumns.forEach(column => {
      cy.get('[data-cy=assembly-table]').should('contain', column);
    });

    // Select components (e.g., check first checkbox)
    cy.get('[data-cy=include-in-kit-checkbox]').first().check();

    // Enter quantity to use
    cy.get('[data-cy=quantity-to-use]').first().clear().type('1');

    // Click Calculate
    cy.contains('Calculate').click();

    // Verify shelf location appears with "Choose" button
    cy.get('[data-cy=put-into-shelf-info]').should('contain', 'Shelf');
    cy.contains('Choose').click();

    // Handle confirmation prompt
    cy.on('window:confirm', (text) => {
      expect(text).to.include('This operation will scan out from the inventory locations');
      return true; // Confirm
    });

    // Confirm assembly message appears
    cy.contains('Assembled').should('exist');
  });

});
