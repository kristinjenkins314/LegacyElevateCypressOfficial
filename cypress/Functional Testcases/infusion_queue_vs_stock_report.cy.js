
describe('Infusion - Infusion Queue vs Stock Report Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/views/report/practice/patient/treatment/infusion/infusion-queue-vs-stock.aspx');
  });

  it('Validates Infusion Queue vs Stock Report filters, data and export buttons', () => {
    // Navigate to Infusion Queue vs Stock Report
    cy.contains('Infusion').click();
    cy.contains('Infusion Queue vs Stock Report').click();

    // Enter number of days
    cy.get('[name="daysFilter"]').clear().type('7');

    // Select location
    cy.get('[name="locationSelect"]').select(1);

    // Optionally select product group
    cy.get('[name="productGroup"]').select(1, { force: true });

    // Perform search
    cy.contains('Search').click();

    // Verify report columns
    const columns = [
      'Type', 'Location', 'Description', 'Manufacturer Code',
      'Required Quantities (Specialty, Other, Total)',
      'Quantity on Hand (Specialty, Other, Total)',
      'Quantity in Open Purchase Orders (Specialty, Other, Total)'
    ];
    columns.forEach(column => {
      cy.contains(column).should('exist');
    });

    // Verify export buttons are visible
    cy.contains('Export Excel').should('exist');
    cy.contains('Export PDF').should('exist');
  });
});
