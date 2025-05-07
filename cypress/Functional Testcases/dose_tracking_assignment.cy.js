
describe('Dose Tracking - Dose Assignment Workflow', () => {
  before(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/Assignment/Assignment.aspx');
  });

  it('Performs a Dose Assignment for a patient', () => {
    // Navigate to Dose Tracking and select Dose Assignment
    cy.contains('Dose Tracking').click();
    cy.contains('Dose Assignment').click();

    // Search and select a patient
    cy.get('[name="searchPatient"]').type('Jane Doe{enter}');
    cy.contains('Jane Doe').click();

    // Verify patient details
    ['DOB', 'Patient ID', 'Gender'].forEach(detail => {
      cy.contains(detail).should('exist');
    });

    // Fill in applicable fields
    cy.get('[name="staff"]').select(1);
    cy.get('[name="department"]').select(1);
    cy.get('[name="procedure"]').select(1);
    cy.get('[name="notes"]').type('Assigned for review');

    // Complete patient editing
    cy.contains('Done with Patient Editing').click();

    // Add item by scanning or manual entry
    cy.get('[name="serialNumber"]').type('DT-SN-001{enter}');
    cy.contains('Item added to assignment list').should('exist');

    // Enter quantity and UOM
    cy.get('[name="quantity"]').type('2');
    cy.get('[name="uom"]').select('Each');

    // Click Assign button
    cy.contains('Assign').click();
    cy.contains('Item is successfully assigned to the patient').should('exist');
  });
});
