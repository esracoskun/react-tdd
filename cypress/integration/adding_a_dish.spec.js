// describe.skip('adding a dish', () => { // skip : bu testi atlatır

describe('adding a dish', () => {
  it('display the dish in the list', () => {
    const restaurantName = 'Sushi Place';
    const dishName = 'Volcano Roll';

    cy.visit("http://localhost:1234");

    addRestaurant(restaurantName);
    gotoRestaurantPage(restaurantName);
    modalNotShowAtTheStart();
    modalAllowsAddingDish(dishName);
  });

  function addRestaurant(restaurantName) {
    cy.get('[data-testid="addRestaurantButton"]').click();
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);
    cy.get('[data-testid="saveNewRestaurantButton"]').click();
  }

  function gotoRestaurantPage(restaurantName) {
    cy.contains(restaurantName).click();
  }

  function modalNotShowAtTheStart() {
    cy.get('[data-testid="newDishName"]').should("not.be.visible");
  }

  function modalAllowsAddingDish(dishName) {
    cy.get('[data-testid="addDishButton"]').click();
    cy.get('[data-testid="newDishName"]').type(dishName);
    cy.get('[data-testid="saveNewDishButton"]').click();
    cy.get('[data-testid="newDishName"]').should("not.be.visible");
    cy.contains(dishName);
  }
});
