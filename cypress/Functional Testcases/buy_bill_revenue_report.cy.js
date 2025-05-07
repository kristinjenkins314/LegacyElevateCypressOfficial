
describe('Buy & Bill Revenue Report Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/Reports/BuyAndBillRevenueCycle.aspx');
  });

  it('Validates Buy & Bill Revenue Report filters and data', () => {
    // Navigate to Buy & Bill Revenue Report
    cy.contains('Buy & Bill Tracking').click();
    cy.contains('Buy & Bill Revenue Report').click();

    // Verify filters
    const filters = [
      'Start Date', 'End Date', 'Patient ID', 'Location', 'Serial Number',
      'Staff/Doctors', 'PO Number', 'Manufacturer Code', 'Search'
    ];
    filters.forEach(filter => {
      cy.contains(filter).should('exist');
    });

    // Trigger search
    cy.contains('Search').click();

    // Verify report columns
    const columns = [
      'Patient', 'Treatment Date', 'Provider', 'Name', 'Received Date',
      'PO Number', 'Cost', 'Is PO Paid?', 'PO Type', 'Amount Billed',
      'Allowed Amount', 'Paid Amount', 'Adjusted Amount', 'Outstanding',
      'Days in AR', 'Total Dose Cost', 'Profit', 'Out. Inv.Blnc'
    ];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });

    // Ensure data is returned
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  });
});
