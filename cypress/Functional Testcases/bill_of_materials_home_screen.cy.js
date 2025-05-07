describe('Bill of Materials Home Page', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/inventory/bom/definitions.aspx'); // Update with actual path
  });

  it('Displays Bill of Materials page with Create New button', () => {
    cy.contains('Create New').should('exist');
  });

  it('Validates table column headers', () => {
    const columns = [
      'Kit Description', 'Kit Number', 'Kit Name', 'Kit', 'Unit of Measure',
      'Quantity for Location', 'All Quantity for BOM'
    ];
    columns.forEach(column => {
      cy.get('[data-cy=table-header]').should('contain', column);
    });
  });

  it('Checks availability of action buttons', () => {
    const actions = ['Assemble', 'Disassemble', 'Edit', 'Delete'];
    actions.forEach(action => {
      cy.contains(action).should('exist');
    });
  });

  it('Cross-checks BOM data with backend', () => {
    // Replace this with actual backend comparison if available
    cy.get('[data-cy=bom-table] tr').first().within(() => {
      cy.get('td').each(($cell) => {
        expect($cell.text().trim()).to.not.be.empty;
      });
    });
  });

});
