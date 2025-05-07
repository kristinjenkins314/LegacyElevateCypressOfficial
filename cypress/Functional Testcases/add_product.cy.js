describe('Add Product to Inventory', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/inventory/addnewproduct'); // Update with actual path
  });

  it('Searches and adds an existing product to inventory', () => {
    cy.get('[data-cy=search-catalog]').type('Test Product');
    cy.contains('Search').click();

    const expectedFields = [
      'Manufacturer', 'Manufacturer Code', 'Description',
      'UOM', 'Sub UOM', 'UPC', 'Add to My Inventory'
    ];
    expectedFields.forEach(field => {
      cy.get('[data-cy=search-results]').should('contain', field);
    });

    cy.contains('Add to My Inventory').click();

    cy.on('window:alert', (txt) => {
      expect(txt).to.match(/already in use|added to your inventory/);
    });

    cy.visit('/inventory/list');
    cy.get('[data-cy=inventory-search]').type('Test Product');
    cy.get('[data-cy=inventory-list]').should('contain', 'Test Product');
  });

  it('Creates a new product and adds it to inventory', () => {
    cy.contains('Create a New Product').click();

    cy.get('[data-cy=description]').type('New Product');
    cy.get('[data-cy=manufacturer]').type('New Manufacturer');
    cy.get('[data-cy=manufacturer-item-code]').type('NEW123');
    cy.get('[data-cy=product-group]').select('General');
    cy.get('[data-cy=supplier]').type('Supplier A');
    cy.get('[data-cy=shelf-location]').type('Shelf 1');
    cy.get('[data-cy=specifications]').type('Spec A');
    cy.get('[data-cy=uom]').select('Each');
    cy.get('[data-cy=sub-package]').type('Box');
    cy.get('[data-cy=upc]').type('123456789012');
    cy.get('[data-cy=dimensions]').type('10x10x10');
    cy.get('[data-cy=weight]').type('1');
    cy.get('[data-cy=uom-dispensing]').select('Each');
    cy.get('[data-cy=uom-purchasing]').select('Box');
    cy.get('[data-cy=package-price]').type('10.00');
    cy.get('[data-cy=tax-federal]').check();
    cy.get('[data-cy=tax-state]').check();
    cy.get('[data-cy=tax-local]').check();
    cy.get('[data-cy=product-image]').attachFile('product.jpg'); // requires cypress-file-upload

    cy.contains('Create Product').click();

    cy.visit('/inventory/list');
    cy.get('[data-cy=inventory-search]').type('New Product');
    cy.get('[data-cy=inventory-list]').should('contain', 'New Product');
  });

});
