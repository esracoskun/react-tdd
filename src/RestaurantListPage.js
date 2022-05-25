import React, { useState } from 'react';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

export default function RestaurantListPage() {

  const [restaurantNames, setRestaurantNames] = useState([]);

  const handleAddRestaurant = (newRestaurantName) => {
    setRestaurantNames([newRestaurantName, ...restaurantNames]);
  }

  return (
    <div>
      <button data-test="addRestaurantButton" >
        Add Restaurant
      </button>
      <NewRestaurantForm
        onSave={handleAddRestaurant}
      />
      <RestaurantList restaurantNames={restaurantNames}/>
    </div>
  );
}
