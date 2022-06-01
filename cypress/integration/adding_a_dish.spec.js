describe('adding a dish', () => {
  it('display the dish in the list', () => {
    const restaurantName = 'Sushi Place';

    cy.visit("http://localhost:1234");

    addRestaurant(restaurantName);
    gotoRestaurantPage(restaurantName);
    modalNotShowAtTheStart();
  });

  function addRestaurant(restaurantName) {
    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-testid="newRestaurantName"]').focus();

    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);

    cy.get('[data-testid="saveNewRestaurantButton"]').click();
  }

  function gotoRestaurantPage(restaurantName) {
    cy.contains(restaurantName).click();
  }

  function modalNotShowAtTheStart() {
    cy.get('[data-testid="newDishName"]').should("not.be.visible");
  }
});
