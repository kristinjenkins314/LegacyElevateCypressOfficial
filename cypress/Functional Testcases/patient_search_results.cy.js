
describe('Patient Search Results Table', () => {
  beforeEach(() => {
    cy.visit('/patients');
    cy.get('[data-testid="search-input"]').type('John Doe');
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="patient-row"]').should('exist');
  });

  it('Should return matching patient results', () => {
    cy.get('[data-testid="patient-row"]').should('contain.text', 'John Doe');
  });

  it('Should verify all fields in patient result', () => {
    cy.get('[data-testid="patient-row"]').each(($row) => {
      cy.wrap($row).within(() => {
        cy.get('[data-testid="full-name"]').should('not.be.empty');
        cy.get('[data-testid="dob"]').should('not.be.empty');
        cy.get('[data-testid="patient-id"]').should('not.be.empty');
        cy.get('[data-testid="age"]').should('not.be.empty');
        cy.get('[data-testid="phone"]').should('not.be.empty');
        cy.get('[data-testid="email"]').should('not.be.empty');
        cy.get('[data-testid="registered-at"]').should('not.be.empty');
        cy.get('[data-testid="updated-at"]').should('not.be.empty');
      });
    });
  });

  it('Should have visible action buttons', () => {
    cy.get('[data-testid="details-button"]').should('be.visible');
    cy.get('[data-testid="edit-button"]').should('be.visible');
    cy.get('[data-testid="print-button"]').should('be.visible');
    cy.get('[data-testid="include-deleted-button"]').should('be.visible');
  });

  it('Should display visual indicators for patients with active orders', () => {
    cy.get('[data-testid="patient-row"]').each(($row) => {
      cy.wrap($row).within(() => {
        cy.get('[data-testid="active-indicator"]').should('exist');
      });
    });
  });

  it('Should sort table by clicking on headers', () => {
    const headers = ['name', 'dob', 'patient-id'];
    headers.forEach(header => {
      cy.get(`[data-testid="column-header-${header}"]`).click();
      cy.get(`[data-testid="sort-indicator-${header}"]`).should('exist');
    });
  });

  it('Should display max of 20 results per page', () => {
    cy.get('[data-testid="patient-row"]').should('have.length.lte', 20);
  });

  it('Should have working pagination controls', () => {
    cy.get('[data-testid="pagination-next"]').should('be.visible');
    cy.get('[data-testid="pagination-previous"]').should('be.visible');
    cy.get('[data-testid="pagination-page"]').should('have.length.greaterThan', 1);
  });

  it('Should load 25 results on next page', () => {
    cy.get('[data-testid="pagination-next"]').click();
    cy.get('[data-testid="patient-row"]').should('have.length.lte', 25);
  });

  it('Should return to previous page correctly', () => {
    cy.get('[data-testid="pagination-next"]').click();
    cy.get('[data-testid="pagination-previous"]').click();
    cy.get('[data-testid="patient-row"]').should('exist');
  });
});
