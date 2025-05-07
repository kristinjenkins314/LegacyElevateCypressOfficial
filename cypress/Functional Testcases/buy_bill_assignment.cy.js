
describe('Buy & Bill Assignment Workflow', () => {
  before(() => {
    cy.login(); // Custom login command
    cy.visit('/');
  });

  it('Performs a Buy & Bill Assignment for a patient', () => {
    // Navigate to Buy & Bill Tracking
    cy.contains('Buy & Bill Tracking').click();
    cy.contains('Buy & Bill Assignment').click();

    // Search and select a patient
    cy.get('[name="searchPatient"]').type('John Doe{enter}');
    cy.contains('John Doe').click();

    // Verify patient details
    ['DOB', 'Patient ID', 'Gender'].forEach(field => {
      cy.contains(field).should('exist');
    });

    // Set optional fields
    cy.get('[name="staff"]').select(1);
    cy.get('[name="department"]').select(1);
    cy.get('[name="procedure"]').select(1);
    cy.get('[name="notes"]').type('Routine assignment');

    // Complete patient editing
    cy.contains('Done with Patient Editing').click();

    // Add item by scanning or entering serial number
    cy.get('[name="serialNumber"]').type('SN-BB-001{enter}');
    cy.contains('Item added to assignment list').should('exist');

    // Enter quantity and UOM
    cy.get('[name="quantity"]').type('1');
    cy.get('[name="uom"]').select('Each');

    // Click Assign
    cy.contains('Assign').click();
    cy.contains('Item is successfully assigned to the patient').should('exist');
  });
});
