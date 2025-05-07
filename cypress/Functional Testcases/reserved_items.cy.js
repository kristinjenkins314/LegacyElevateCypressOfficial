describe('Reserved Items Management', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/inventory/Reserves.aspx'); // Update with actual path
  });

  it('Displays Reserved Items page with search field', () => {
    cy.get('[data-cy=search-input]').should('exist');
  });

  it('Validates table column headers', () => {
    const columns = [
      'Description', 'Manufacturer Code', 'Manufacturer', 'Lot Number',
      'Expiration Date', 'Serial Number', 'Cost', 'Reserved For User',
      'Reserved For Staff/Doctors', 'Reserved For Department',
      'Reserved For Patient', 'Reserved From Shelf', 'Reserve Date',
      'Reserve End Date', 'Reserved By', 'Reserved Quantity', 'Comment'
    ];
    columns.forEach(column => {
      cy.get('[data-cy=table-header]').should('contain', column);
    });
  });

  it('Cross-checks reserved item data with backend', () => {
    // Replace this with actual backend comparison if available
    cy.get('[data-cy=reserved-table] tr').first().within(() => {
      cy.get('td').each(($cell) => {
        expect($cell.text().trim()).to.not.be.empty;
      });
    });
  });

});
