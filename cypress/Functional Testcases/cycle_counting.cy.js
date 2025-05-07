describe('Cycle Counting Process', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/views/practice/inventory/cycle-count/list.aspx'); // Update with actual path
  });

  it('Loads Cycle Counting interface with filters and options', () => {
    cy.contains('New Count').should('exist');

    const filters = ['Counted By', 'Status', 'Count Name', 'Date Counted'];
    filters.forEach(filter => {
      cy.get('[data-cy=filters]').should('contain', filter);
    });

    ['Export Excel', 'Export PDF'].forEach(button => {
      cy.contains(button).should('exist');
    });
  });

  it('Creates a new cycle count and completes the process', () => {
    cy.contains('New Count').click();

    // Fill count details
    cy.get('[data-cy=count-name]').type('Test Cycle Count');
    cy.get('[data-cy=counted-by]').type('John Doe');
    cy.get('[data-cy=start-date]').type('2025-06-01');
    cy.get('[data-cy=end-date]').type('2025-06-02');
    cy.contains('Save').click();

    // Add product to count
    cy.contains('+ Add Products to Count').click();
    cy.get('[data-cy=inventory-item-list]').contains('Sample Item').click();
    cy.contains('Add to Assigned Products').click();

    // Start and enter count
    cy.contains('Start Counting').click();
    cy.get('[data-cy=quantity-input]').clear().type('20');
    cy.contains('Save Quantity').click();

    cy.on('window:alert', (text) => {
      expect(text).to.include('The quantity 20 entered has been saved');
    });

    // Finish counting
    cy.contains('Finish Counting').click();

    cy.on('window:confirm', (text) => {
      expect(text).to.include('Are you sure you want to finish counting?');
      return true;
    });

    // Verify updated columns
    const resultCols = [
      'Cycle Name', 'Manufacturer Code', 'Manufacturer', 'Product Group',
      'Location', 'Supplier', 'Shelf', 'Lot Number', 'UOM', 'Cost',
      'Initial Count', 'Initial Total Cost', 'Actual Count', 'Actual Total Cost',
      'Change in Count', 'Change in Total Cost'
    ];
    resultCols.forEach(col => {
      cy.get('[data-cy=results-table]').should('contain', col);
    });
  });

});
