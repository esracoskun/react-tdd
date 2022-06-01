import React, { useState } from 'react';
import {
  Button,
  Col,
  Row,
  Modal,
} from 'react-materialize';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

export default function RestaurantListPage() {

  const [restaurantNames, setRestaurantNames] = useState([]);
  // const [showNewRestaurantForm, setShowNewRestaurantForm] = useState(false);

  const handleAddRestaurant = (newRestaurantName) => {
    // setShowNewRestaurantForm(false);
    setRestaurantNames([newRestaurantName, ...restaurantNames]);
    $("#addRestaurantModal").modal("close");
  }

  const handleCancelAddRestaurant = () => {
    $("#addRestaurantModal").modal("close");
  }

  // const handleShowNewRestaurantForm = () => {
  //   setShowNewRestaurantForm(true);
  // }

  // const renderNewRestaurantForm = () => {
  //   if (showNewRestaurantForm ) {
  //     return (
  //       <NewRestaurantForm
  //         onSave={handleAddRestaurant}
  //       />
  //     )
  //   }
  // }

  return (
    <div>
      <Modal
        id="addRestaurantModal"
        header="New Restaurant"
        trigger={
          <Button
            data-testid="addRestaurantButton"
            // onClick={handleShowNewRestaurantForm}
          >
            Add Restaurant
          </Button>
        }
        >
        <NewRestaurantForm onSave={handleAddRestaurant} onCancel={handleCancelAddRestaurant}/>
      </Modal>
      <Row>
        <RestaurantList restaurantNames={restaurantNames}/>
      </Row>
    </div>
  );
}
