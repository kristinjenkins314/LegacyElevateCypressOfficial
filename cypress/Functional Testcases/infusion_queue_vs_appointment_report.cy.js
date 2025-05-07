
describe('Infusion - Infusion Queue vs Appointment Report Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/views/report/practice/patient/treatment/infusion/infusion-queue-vs-appointment.aspx');
  });

  it('Validates Infusion Queue vs Appointment Report filters, data, and export buttons', () => {
    // Navigate to Infusion Queue vs Appointment Report
    cy.contains('Infusion').click();
    cy.contains('Infusion Queue vs Appointment Report').click();

    // Search for a patient
    cy.get('[name="patientSearch"]').type('John Doe');

    // Enter number of days
    cy.get('[name="daysFilter"]').clear().type('5');

    // Select location
    cy.get('[name="locationSelect"]').select(1);

    // Check the optional checkbox if it exists
    cy.get('[name="patientNotInQueue"]').check({ force: true });

    // Click Search
    cy.contains('Search').click();

    // Verify report columns
    const columns = [
      'Location', 'Patient Name', 'Nextgen Appt', 'Appointment Notes',
      'Queue Date', 'Description', 'Quantity'
    ];
    columns.forEach(column => {
      cy.get('table').contains('th', column).should('exist');
    });

    // Verify export buttons
    cy.contains('Export Excel').should('exist');
    cy.contains('Export PDF').should('exist');
  });
});
