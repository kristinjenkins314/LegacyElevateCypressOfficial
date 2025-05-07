describe('Supplier List Management', () => {

  beforeEach(() => {
    cy.login('testadmin@elevateht.com'); // Custom login command
    cy.visit('https://test2.arbimed.com/parlevel/supplier.aspx'); // Update with actual path
  });

  it('Loads supplier list and verifies UI elements', () => {
    cy.contains('Create New').should('exist');

    const headers = [
      'Name', 'Address', 'Country', 'State', 'City', 'Zip Code', 'Phone',
      'Contact Name', 'Web Site', 'Email', 'Account Number', 'Fax Number',
      'Amount for Free Shipping', 'Is Active', 'Days to Delivery'
    ];
    headers.forEach(header => {
      cy.get('[data-cy=supplier-table]').should('contain', header);
    });
  });

  it('Creates a new supplier', () => {
    cy.contains('Create New').click();

    cy.get('[data-cy=supplier-name]').type('Test Supplier Inc.');
    cy.get('[data-cy=supplier-address]').type('123 Main St');
    cy.get('[data-cy=supplier-country]').select('United States');
    cy.get('[data-cy=supplier-state]').type('NY');
    cy.get('[data-cy=supplier-city]').type('New York');
    cy.get('[data-cy=supplier-zip]').type('10001');
    cy.get('[data-cy=supplier-phone]').type('2125551234');
    cy.get('[data-cy=supplier-contact]').type('John Doe');
    cy.get('[data-cy=supplier-website]').type('https://testsupplier.com');
    cy.get('[data-cy=supplier-email]').type('contact@testsupplier.com');
    cy.get('[data-cy=supplier-account]').type('ACC123456');
    cy.get('[data-cy=supplier-fax]').type('2125555678');
    cy.get('[data-cy=free-shipping-amount]').type('50');
    cy.get('[data-cy=is-active]').check();
    cy.get('[data-cy=days-to-delivery]').type('5');

    cy.contains('Save').click();

    cy.get('[data-cy=supplier-table]').should('contain', 'Test Supplier Inc.');
  });

});
