describe('adding a restaurant', () => {
  it('display the restaurant in the list', () => {

    const restaurantName = 'Sushi Place';

    cy.visit('http://localhost:1234');

    // modal not shown at the start
    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible');

    // modal can be cancelled
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="addRestaurantModal"] button.modal-close')
      .click();

    // modal allows adding restaurant
    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible');

    cy.get('[data-test="addRestaurantButton"]')
      .click();

    // modal focuses on text field when appears
    cy.get('[data-test="newRestaurantName"]').focus();

    cy.get('[data-test="newRestaurantName"]')
      .type(restaurantName);

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();


    // confirm newRestaurantName field not shown
    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible');

    cy.contains(restaurantName);
  });
});