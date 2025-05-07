
describe('Retina Successful Bilateral Eye Injection', () => {
  before(() => {
    cy.login(); // Custom login
    cy.visit('/pulse');
  });

  it('Dispenses medications for both eyes and verifies billing accuracy', () => {
    // Dispense medication for Right eye
    cy.contains('Dispense Medication').click();
    cy.get('[name="eye"]').select('Right');
    cy.get('[name="modifier"]').should('have.value', 'RT');
    cy.get('[name="serialNumber"]').type('SN0001');
    cy.get('[name="doseNumber"]').type('1');
    cy.contains('Save Transaction').click();

    // Dispense medication for Left eye
    cy.contains('Dispense Medication').click();
    cy.get('[name="eye"]').select('Left');
    cy.get('[name="modifier"]').should('have.value', 'LT');
    cy.get('[name="serialNumber"]').type('SN0002');
    cy.get('[name="doseNumber"]').type('2');
    cy.contains('Save Transaction').click();

    // Sync PMS billing data
    cy.task('syncPMSData', [
      {
        dateOfService: '2024-12-01',
        cpt: '67028',
        hcpcs: 'J3301',
        quantity: 5,
        modifier: 'RT'
      },
      {
        dateOfService: '2024-12-01',
        cpt: '67028',
        hcpcs: 'J3301',
        quantity: 5,
        modifier: 'LT'
      }
    ]);

    // Verify both transactions matched
    cy.contains('Transaction matched successfully').should('have.length', 2);

    // Run Billing Accuracy Report
    cy.visit('/billing/accuracy-report');
    cy.contains('Run Report').click();

    // Validate both eye transactions appear as success
    cy.contains('67028').should('have.length.at.least', 2);
    cy.contains('J3301').should('have.length.at.least', 2);
    cy.contains('5 units').should('have.length.at.least', 2);
    cy.contains('RT').should('exist');
    cy.contains('LT').should('exist');
    cy.contains('Successfully billed').should('have.length.at.least', 2);
  });
});
