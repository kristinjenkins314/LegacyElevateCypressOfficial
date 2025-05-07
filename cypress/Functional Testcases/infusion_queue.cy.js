
describe('Infusion - Infusion Queue Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/views/practice/patient-v2/treatment/infusion/queue.aspx');
  });

  it('Validates Infusion Queue screen, filtering, data and queue creation', () => {
    // Navigate to Infusion Queue
    cy.contains('Infusion').click();
    cy.contains('Infusion Queue').click();

    // Enter date for filtering
    cy.get('[name="queueDate"]').type('2024-12-01');

    // Select status filter (multi-select example)
    const statuses = [
      'Draft', 'Rejected Plan', 'Planned', 'Approved', 'Labeled',
      'Verified', 'Mixed & Dispensed', 'Restocked'
    ];
    statuses.forEach(status => {
      cy.get('[name="statusFilter"]').select(status);
    });

    // Verify data columns
    const columns = [
      'Appointment Time', 'Patient Name', 'Patient ID', 'Patient Weight (kg)',
      'Drug Assigned', 'Device Assigned', 'Created At', 'Status'
    ];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });

    // Check for the new queue creation button
    cy.get('[data-testid="create-new-queue"]').click();
    cy.contains('Add to Infusion Queue').should('exist');
  });
});
