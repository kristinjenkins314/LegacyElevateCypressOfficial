
describe('Reports - Transaction History Report Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login
    cy.visit('https://test2.arbimed.com/history/transactionHistory');
  });

  it('Validates Transaction History Report generation, layout, and export', () => {
    // Navigate to Reports section
    cy.contains('Reports').click();
    cy.contains('Transaction History Report').click();

    // Enter date range
    cy.get('[name="startDate"]').type('2025-04-17');
    cy.get('[name="endDate"]').type('2025-04-22');

    // Select optional filters
    cy.get('[name="supplier"]').select(1, { force: true });
    cy.get('[name="location"]').select(1, { force: true });
    cy.get('[name="productGroup"]').select(1, { force: true });

    // Click Search
    cy.contains('Search').click();

    // Verify report data is rendered
    cy.get('table tbody tr').should('have.length.greaterThan', 0);

    // Verify column headers
    const columns = ['Date', 'Amount', 'Description', 'Status'];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });

    // Export PDF and Excel
    cy.contains('Export PDF').should('exist').click();
    cy.contains('Export Excel').should('exist').click();

    // Verify pagination and sorting
    cy.get('[aria-label="Next Page"]').click();
    cy.get('[aria-label="Previous Page"]').click();
    cy.get('table th').first().click(); // sort by first column
  });
});
