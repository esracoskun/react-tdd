import React, { useState } from 'react';
import {
  Button,
  Col,
  Row,
  Modal,
} from 'react-materialize';
import DishList from './DishList';
import NewDishForm from './NewDishForm';

export default function RestaurantDetailPage() {
  const [dishName, setDishName] = useState([]);

  const handleAddDish = (newDishName) => {
    setDishName([newDishName, ...dishName]);

    $("#addDishModal").modal("close");
  };

  return (
    <div>
      <Modal
        id="addDishModal"
        header="New Dish"
        actions={[]}
        trigger={
          <Button data-testid="addDishButton">
            Add Dish
          </Button>
        }
        >
        <NewDishForm onSave={handleAddDish} />
      </Modal>
      <Row>
        <DishList dishNames={dishName}/>
      </Row>
    </div>
  )
}
