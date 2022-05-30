describe('adding a restaurant', () => {
  it('display the restaurant in the list', () => {
    const restaurantName = 'Sushi Place';

    cy.visit('http://localhost:1234');

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
