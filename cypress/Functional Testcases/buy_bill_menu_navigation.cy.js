
describe('Buy & Bill Tracking Menu Navigation', () => {
  before(() => {
    cy.login(); // Custom login command
    cy.visit('/'); // Main dashboard or entry point
  });

  it('Navigates to Buy & Bill Tracking and verifies sub-options', () => {
    // Ensure main menu is visible
    cy.get('nav').should('be.visible');

    // Locate and click "Buy & Bill Tracking" menu option
    cy.contains('Buy & Bill Tracking').should('be.visible').click();

    // Define expected sub-options
    const subOptions = [
      'Buy & Bill Assignment',
      'Search Buy & Bill Products',
      'Buy & Bill Inventory Detail',
      'Buy & Bill Total Counts',
      'Buy & Bill Transactions',
      'Buy & Bill Removal',
      'Buy & Bill Accuracy Report',
      'Buy & Bill Revenue Report'
    ];

    // Verify all sub-options are present
    subOptions.forEach(option => {
      cy.contains(option).should('be.visible');
    });

    // Click each sub-option and verify page loads
    subOptions.forEach(option => {
      cy.contains(option).click();
      cy.url().should('include', option.toLowerCase().replace(/ & | /g, '-'));
      cy.go('back'); // Return to menu after each check
    });
  });
});
