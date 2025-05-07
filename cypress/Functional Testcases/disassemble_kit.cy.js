describe('Disassemble Kit in Bill of Materials', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/inventory/bom/Disassembly.aspx'); // Update with actual path
  });

  it('Disassembles a kit from the BOM list', () => {
    // Click Disassemble for the first kit
    cy.get('[data-cy=bom-list]').contains('Disassemble').first().click();

    // Verify expected columns on the Disassembly page
    const disassemblyColumns = [
      'Select', 'Kit', 'Shelf Location', 'Lot', 'Expiration Date', 'In Stock'
    ];
    disassemblyColumns.forEach(column => {
      cy.get('[data-cy=disassembly-table]').should('contain', column);
    });

    // Click Select on first row
    cy.get('[data-cy=select-disassemble]').first().click();

    // Verify Disassembly scan info is shown
    const scanInfoFields = [
      'Recipe Item', 'Manufacturer', 'Manufacturer Code', 'Part Name',
      'Quantity to Scan In', 'Shelf', 'Lot', 'Expiration Date', 'Current Stock'
    ];
    scanInfoFields.forEach(field => {
      cy.get('[data-cy=scan-info]').should('contain', field);
    });

    // Click Disassembly to Selected Locations
    cy.contains('Disassembly to Selected Locations').click();

    // Confirm success message
    cy.contains('Disassembly is successful').should('exist');
  });

});
