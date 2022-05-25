import React, { useState } from 'react';
import { Button } from 'react-materialize';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

export default function RestaurantListPage() {

  const [restaurantNames, setRestaurantNames] = useState([]);
  const [showNewRestaurantForm, setShowNewRestaurantForm] = useState(false);

  const handleAddRestaurant = (newRestaurantName) => {
    setShowNewRestaurantForm(false);
    setRestaurantNames([newRestaurantName, ...restaurantNames]);
  }

  const handleShowNewRestaurantForm = () => {
    setShowNewRestaurantForm(true);
  }

  return (
    <div>
      <Button data-test="addRestaurantButton" onClick={handleShowNewRestaurantForm}>
        Add Restaurant
      </Button>
      {
        showNewRestaurantForm ?
        <NewRestaurantForm
          onSave={handleAddRestaurant}
        />
        : null
      }
      <RestaurantList restaurantNames={restaurantNames}/>
    </div>
  );
}
