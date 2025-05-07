
describe('Stock Room - Reserve Function Verification', () => {
  before(() => {
    cy.login('testadmin@elevateht.com');
    cy.visit('https://test2.arbimed.com/inventory/stock-room');
  });

  it('Reserves an item with complete details', () => {
    cy.contains('Reserve').click();
    cy.enterProduct('Sample Product');
    cy.fillReservationDetails({
      user: 'User1',
      staff: 'Dr. Smith',
      patient: 'PatientX',
      department: 'Pharmacy',
      endDate: '2025-12-31',
      comment: 'For testing',
      quantity: 2,
      package: 'Box'
    });
    cy.contains('Reserve').click();

    // Verify reservation data is displayed
    ['Shelf Location', 'Lot', 'Expiration Date', 'Serial Number', 'Stock', 'Reserved Quantity', 'Quantity', 'Package']
      .forEach(col => cy.contains(col).should('exist'));
  });

  it('Returns correct product when scanned or searched', () => {
    cy.scanDataMatrix('DM-CODE-XYZ');
    cy.contains('Correct Product Name').should('exist');

    cy.get('[name="productSearch"]').type('Correct Product Name');
    cy.contains('Search').click();
    cy.contains('Correct Product Name').should('exist');

    cy.get('[name="manufacturerCodeSearch"]').type('MFG-CODE');
    cy.contains('Search').click();
    cy.contains('Correct Product Name').should('exist');
  });

  it('Validates reserve reason is required', () => {
    cy.startReservationWithoutReason('Sample Product');
    cy.contains('Please select a reason for reserve').should('exist');
  });

  it('Displays correct amount already on reserve', () => {
    cy.reserveProduct('Product with Reserve');
    cy.contains('Reserved Quantity:').should('exist');
  });

  it('Successfully reserves selected quantity with reason and end date', () => {
    cy.reserveProductWithReasonAndDate('Product Y', 5, 'Surgery', '2025-11-01');
    cy.contains('Reserved Successfully').should('exist');
  });

  it('Displays product with correct info on Reserve List page', () => {
    cy.visit('/reserve-list');
    cy.contains('Product Y').should('exist');
    cy.contains('Surgery').should('exist');
    cy.contains('2025-11-01').should('exist');
  });

  it('Shows reserved product in dispense section', () => {
    cy.navigateToDispense();
    cy.contains('Product Y').parent().within(() => {
      cy.contains('Reserved').should('exist');
    });
  });
});
