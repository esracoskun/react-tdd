import React, { useState } from 'react';
import {
  Button,
  Col,
  Row,
} from 'react-materialize';
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
      <Row>
        <Button data-test="addRestaurantButton" onClick={handleShowNewRestaurantForm}>
          Add Restaurant
        </Button>
      </Row>
      <Row>
        {
          showNewRestaurantForm ?
          <NewRestaurantForm
            onSave={handleAddRestaurant}
          />
          : null
        }
      </Row>
      <Row>
        <RestaurantList restaurantNames={restaurantNames}/>
      </Row>
    </div>
  );
}
