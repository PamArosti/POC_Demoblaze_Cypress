class SubCategories {
  verifyPhoneItems() {
    cy.get('.list-group-item').contains('Phones').click();
  }
  
  verifyLapTopsItems() {
    cy.get('.list-group-item').contains('Laptops').click();
  }

  verifyMonitorsItems() {
    cy.get('.list-group-item').contains('Monitors').click();
  }

}
export const subCategories = new SubCategories();
