
describe('Retina Successful Single Eye Injection', () => {
  before(() => {
    cy.login(); // Custom login
    cy.visit('/pulse');
  });

  it('Dispenses medication and verifies billing accuracy report', () => {
    // Dispense medication for one eye
    cy.contains('Dispense Medication').click();
    cy.get('[name="eye"]').select('Right'); // or 'Left'
    cy.get('[name="modifier"]').should('have.value', 'RT'); // Expect RT for Right eye

    // Capture transaction with serial and dose number
    cy.get('[name="serialNumber"]').type('SN123456');
    cy.get('[name="doseNumber"]').type('1');
    cy.contains('Save Transaction').click();

    // Simulate PMS sync with required data
    cy.task('syncPMSData', {
      dateOfService: '2024-12-01',
      cpt: '67028',
      hcpcs: 'J3301',
      quantity: 5,
      modifier: 'RT'
    });

    // Verify transaction match status
    cy.contains('Transaction matched successfully').should('exist');
    cy.contains('No error type').should('exist');

    // Run Billing Accuracy Report
    cy.visit('/billing/accuracy-report');
    cy.contains('Run Report').click();

    // Validate successful billing entry
    cy.contains('67028').should('exist');
    cy.contains('J3301').should('exist');
    cy.contains('5 units').should('exist');
    cy.contains('RT').should('exist');
    cy.contains('Successfully billed').should('exist');
  });
});
