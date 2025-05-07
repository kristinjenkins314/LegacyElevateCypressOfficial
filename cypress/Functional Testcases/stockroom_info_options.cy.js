describe('Stockroom Information Options', () => {
  
  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom command to log in
    cy.visit('https://test2.arbimed.com/inventory/stock-room'); // Adjust path to stockroom page
  });

  it('Returns correct product when scanning Data Matrix or printed label', () => {
    // Simulate scanning (enter barcode into input field)
    cy.get('[data-cy=barcode-input]').type('VALID-DATA-MATRIX{enter}');
    
    // Assert correct product is returned
    cy.get('[data-cy=product-info]').should('contain', 'Product Name');
  });

  it('Returns correct product when searching by product name', () => {
    cy.get('[data-cy=product-search-input]').type('Sample Product Name');
    cy.get('[data-cy=search-button]').click();
    
    cy.get('[data-cy=search-results]')
      .should('contain', 'Sample Product Name');
  });

  it('Returns correct product when searching by manufacturer code', () => {
    cy.get('[data-cy=manufacturer-code-input]').type('MFG1234');
    cy.get('[data-cy=search-button]').click();
    
    cy.get('[data-cy=search-results]')
      .contains('MFG1234')
      .click();

    cy.get('[data-cy=product-info]')
      .should('contain', 'MFG1234');
  });

  it('Displays in-stock information for the selected product', () => {
    cy.get('[data-cy=product-list]').contains('Sample Product').click();

    cy.get('[data-cy=in-stock-info]')
      .should('contain', 'Quantity')
      .and('contain', 'Available');
  });

  it('Downloads product info report', () => {
    cy.get('[data-cy=download-button]').click();

    const downloadsFolder = Cypress.config('downloadsFolder');
    cy.readFile(`${downloadsFolder}/product-info.csv`, { timeout: 10000 })
      .should('contain', 'Product Name');
  });

});
