describe('adding a restaurant', () => {
  it('display the restaurant in the list', () => {

    const restaurantName = 'Sushi Place';

    cy.visit('http://localhost:1234');

    // modal allows adding restaurant
    modalNotShownAtTheStart();
    modalCanBeCancelled();
    modalDisplaysValidationErrors();
    modalClearsOutValidationErrorsWhenClosed();
    modalAllowsAddingRestaurant(restaurantName);
  });

  function modalNotShownAtTheStart() {
    cy.get('[data-testid="newRestaurantName"]').should("not.be.visible");
  }

  function modalCanBeCancelled() {
    cy.get('[data-testid="addRestaurantButton"]').click();
    cy.get('[data-testid="cancelAddRestaurantButton"]').click();
    cy.get('[data-testid="newRestaurantName"]').should("not.be.visible");

    // cy.get('[data-test="addRestaurantModal"] button.modal-close')
    //   .click();

    // cy.get('[data-testid="newRestaurantName"]')
    //   .should('not.be.visible');
  }

  function modalDisplaysValidationErrors() {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('label[for="restaurantName"][data-error="Cannot be blank"]')
      .should("be.visible");

    cy.get('[data-testid="cancelAddRestaurantButton"]').click();
  }

  function modalClearsOutValidationErrorsWhenClosed() {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('[data-testid="cancelAddRestaurantButton"]').click();

    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('label[for="restaurantName"][data-error="Cannot be blank"]')
      .should("not.be.visible");

    cy.get('[data-testid="cancelAddRestaurantButton"]').click();
  }

  function modalAllowsAddingRestaurant(restaurantName) {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="newRestaurantName"]').focus();

    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('[data-testid="newRestaurantName"]').should("not.be.visible");

    cy.contains(restaurantName);
  }
});
