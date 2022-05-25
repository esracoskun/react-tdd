import React, { useState } from 'react';
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

  console.log({showNewRestaurantForm})
  return (
    <div>
      <button data-test="addRestaurantButton" onClick={handleShowNewRestaurantForm}>
        Add Restaurant
      </button>
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
