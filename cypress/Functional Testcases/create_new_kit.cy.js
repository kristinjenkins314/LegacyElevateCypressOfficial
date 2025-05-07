describe('Create New Kit in Bill of Materials', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/inventory/bom/Modify.aspx'); // Update with actual path
  });

  it('Creates a new kit and verifies it in the BOM list', () => {
    // Click Create New
    cy.contains('Create New').click();

    // Fill out kit details
    cy.get('[data-cy=kit-description]').type('Test Kit Description');
    cy.get('[data-cy=kit-name]').type('Test Kit Name');
    cy.get('[data-cy=kit-number]').type('TK123');
    cy.get('[data-cy=expiration-alert-period]').type('90');
    cy.get('[data-cy=upload-file]').attachFile('sample.pdf'); // Requires 'cypress-file-upload'
    cy.get('[data-cy=uom]').select('Each');
    cy.get('[data-cy=sub-uom]').type('Box');
    cy.get('[data-cy=sub-uom-qty]').type('10');
    cy.get('[data-cy=upc]').type('123456789012');

    // Add product to kit
    cy.contains('Add Product to Kit').click();
    cy.get('[data-cy=product-search-input]').type('MFG123');
    cy.get('[data-cy=search-button]').click();
    cy.contains('Add').click();

    // Verify product columns
    const productColumns = ['Level', 'Product', 'Manufacturer', 'Manufacturer Code', 'UOM', 'Quantity', 'Notes'];
    productColumns.forEach(column => {
      cy.get('[data-cy=kit-products-table]').should('contain', column);
    });

    // Go back to list
    cy.contains('Go back to list').click();

    // Confirm new kit is listed
    cy.get('[data-cy=bom-list]').should('contain', 'Test Kit Name');
  });

});
