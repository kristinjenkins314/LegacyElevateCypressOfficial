
describe('Dose Tracking - Current Dose Inventory Report Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/reports/CurrentDoseInventory.aspx');
  });

  it('Validates Current Dose Inventory report and its columns', () => {
    // Navigate to Current Dose Inventory
    cy.contains('Dose Tracking').click();
    cy.contains('Current Dose Inventory').click();

    // Select location from dropdown
    cy.get('[name="locationSelect"]').select(1); // Simulate selecting a location
    cy.contains('Search').click();

    // Verify report columns
    const columns = [
      'Location', 'Shelf', 'Description', 'Purchase Order',
      'Replacement Order', 'Sample Order', 'Specialty Order',
      'Research Order', 'Total'
    ];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });

    // Ensure data is displayed
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  });
});
