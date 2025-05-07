describe('Supplier Assignment Management', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/Inventory/SupplierAssignment.aspx'); // Update with actual path
  });

  it('Loads supplier assignment interface with filters and columns', () => {
    const filters = ['Search/Scan', 'Manufacturer Code', 'Supplier', 'Product Group', 'Location', 'Filter'];
    filters.forEach(filter => {
      cy.get('[data-cy=filters]').should('contain', filter);
    });

    const columns = [
      'Man #', 'Description', 'UOM', 'Edit', 'Vendor', 'Location',
      'Product Price', 'New Price', 'Price Change'
    ];
    columns.forEach(column => {
      cy.get('[data-cy=supplier-assignment-table]').should('contain', column);
    });
  });

  it('Edits supplier assignment details', () => {
    cy.contains('Edit').first().click();

    cy.get('[data-cy=edit-modal]').within(() => {
      cy.get('[data-cy=uom]').select('Each');
      cy.get('[data-cy=upc]').clear().type('987654321098');
      cy.get('[data-cy=length]').clear().type('10');
      cy.get('[data-cy=height]').clear().type('5');
      cy.get('[data-cy=sub-package]').type('Box');
      cy.get('[data-cy=sub-package-qty]').type('12');
      cy.get('[data-cy=width]').clear().type('8');
      cy.get('[data-cy=weight]').clear().type('1.5');
      cy.get('[data-cy=edi-assignment]').type('EDI123');
      cy.contains('Update').click();
    });

    cy.contains('Changes successfully updated').should('exist');
  });

});
