describe('adding a restaurant', () => {
  it('display the restaurant in the list', () => {

    const restaurantName = 'Sushi Place';

    cy.visit('http://localhost:1234');

    // modal not shown at the start
    cy.get('[data-test="newRestaurantName"]')
      .should('not.exist');

    // modal can be cancelled
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="addRestaurantModal"] button.modal-close')
      .click();

    // modal allows adding restaurant
    cy.get('[data-test="newRestaurantName"]')
      .should('not.exist');

    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .type(restaurantName);

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();


    // confirm newRestaurantName field not shown
    cy.get('[data-test="newRestaurantName"]')
      .should('not.exist');

    cy.contains(restaurantName);
  });
});