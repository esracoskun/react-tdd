import React from 'react';

const RestaurantList = ({ restaurantNames }) => {
  return (
    <ul>
      {
        restaurantNames.map(restaurantName => (
          <li key={restaurantName}>{restaurantName}</li>
        ))
      }
    </ul>
  )
}

export default RestaurantList