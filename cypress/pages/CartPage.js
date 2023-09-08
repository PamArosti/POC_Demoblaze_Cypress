class CartPage {
  elements = {
    
  };

  selectRemovePhone() {
    cy.get(':nth-child(5) > .card > :nth-child(1) > .card-img-top').click();
    cy.get('.col-sm-12 > .btn').click();
    cy.get(':nth-child(4) > .nav-link').click();
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Product added.');
    });
    cy.get('.active > .nav-link').click();
    cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click();
    cy.get('.col-sm-12 > .btn').click()    
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get('.success > :nth-child(2)').should('contain', 'Iphone 6 32gb');
    cy.wrap('#totalp');
    cy.get('#totalp').should('contain','1150');
    cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click();
    cy.wait(1500)
  }

  fillPurchaseModal() {    
    cy.get('.col-lg-1 > .btn').click();
    cy.get('#name').type('Test Name');
    cy.get('#country').type('Test Country');
    cy.get('#city').type('Test City');
    cy.get('#card').type('1234578963214');
    cy.get('#month').type('09');
    cy.get('#year').type('2023');
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('.sweet-alert > h2').contains('Thank you for your purchase!');
    cy.get('.confirm').click();
  }

}
export const cartPage = new CartPage();
