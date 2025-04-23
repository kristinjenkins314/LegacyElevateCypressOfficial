
// Test Case 1: Successfully Scan Data Matrix and Pull Up Correct Item Information 

// Objective: Ensure that scanning a Data Matrix correctly pulls up the correct item
//  along with its lot number, expiration date, and serial number (if applicable). 

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test2.arbimed.com/Account/Login.aspx')
  })
})