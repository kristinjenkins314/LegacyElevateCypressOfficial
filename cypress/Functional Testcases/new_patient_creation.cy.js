
describe('New Patient Creation Flow', () => {
  before(() => {
    cy.visit('/patients'); // Adjust the URL to the actual patient search screen
  });

  it('Should display "New Patient" button and open the form', () => {
    cy.get('[data-testid="new-patient-button"]').should('be.visible').click();
    cy.get('[data-testid="patient-form"]').should('be.visible');
  });

  it('Should allow patient details to be entered and check for duplicates', () => {
    cy.get('[data-testid="location"]').type('Main Clinic');
    cy.get('[data-testid="patient-id"]').type('123456');
    cy.get('[data-testid="first-name"]').type('John');
    cy.get('[data-testid="last-name"]').type('Doe');
    cy.get('[data-testid="gender"]').select('Male');
    cy.get('[data-testid="dob"]').type('1980-01-01');
    cy.get('[data-testid="phone"]').type('5551234567');
    cy.get('[data-testid="email"]').type('john.doe@example.com');
    cy.get('[data-testid="address"]').type('123 Elm Street');
    cy.get('[data-testid="city"]').type('Springfield');
    cy.get('[data-testid="state"]').type('IL');
    cy.get('[data-testid="zip"]').type('62704');
    cy.get('[data-testid="country"]').type('USA');
    cy.get('[data-testid="allergies"]').type('None');

    // Duplicate check should trigger (mocking/observing if UI shows warning)
    cy.get('[data-testid="duplicate-warning"]').should('not.exist'); // Or .should('be.visible') if applicable
  });

  it('Should display right-hand options and allow adding notes and products', () => {
    cy.get('[data-testid="patient-notes"]').should('be.visible');
    cy.get('[data-testid="add-note-button"]').should('be.visible').click();
    cy.get('[data-testid="note-modal"]').should('be.visible');
    cy.get('[data-testid="note-text"]').type('Initial intake note.');
    cy.get('[data-testid="save-note"]').click();
    cy.get('[data-testid="note-modal"]').should('not.exist');

    cy.get('[data-testid="assigned-products"]').should('be.visible');
    cy.get('[data-testid="add-products-button"]').click();
    cy.get('[data-testid="inventory-modal"]').should('be.visible');
    cy.get('[data-testid="select-product"]').first().click();
    cy.get('[data-testid="assign-product"]').click();
    cy.get('[data-testid="inventory-modal"]').should('not.exist');
  });

  it('Should show confirmation on duplicate patient warning and allow proceeding', () => {
    // Assuming entering same name/DOB again to trigger duplicate warning
    cy.get('[data-testid="first-name"]').clear().type('John');
    cy.get('[data-testid="last-name"]').clear().type('Doe');
    cy.get('[data-testid="dob"]').clear().type('1980-01-01');

    cy.get('[data-testid="duplicate-confirmation"]').should('be.visible');
    cy.get('[data-testid="duplicate-confirmation-ok"]').click();
    cy.get('[data-testid="patient-form"]').should('be.visible');
  });

  it('Should highlight missing required fields on incomplete submission', () => {
    // Clear a required field for test
    cy.get('[data-testid="first-name"]').clear();
    cy.get('[data-testid="save-patient"]').click();
    cy.get('[data-testid="first-name-error"]').should('be.visible');
  });

  it('Should allow complete form submission and show success message', () => {
    cy.get('[data-testid="first-name"]').type('John'); // re-enter cleared field
    cy.get('[data-testid="save-patient"]').click();
    cy.get('[data-testid="success-message"]').should('contain.text', 'Patient profile created successfully');
    cy.get('[data-testid="patient-id-display"]').should('not.be.empty');
    cy.get('[data-testid="change-note-button"]').should('be.visible');
    cy.get('[data-testid="delete-button"]').should('be.visible');
  });

  it('Should allow searching for the newly created patient', () => {
    cy.visit('/patients');
    cy.get('[data-testid="search-input"]').type('John Doe');
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="patient-row"]').should('contain.text', 'John Doe');
  });
});
