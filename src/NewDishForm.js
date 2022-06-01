import React from 'react';
import {
  Button,
  Col,
  Row,
  Modal,
  Input,
} from 'react-materialize';

import { Formik } from "formik";

export default function NewDishForm({ onSave }) {
  const handleSave = ({ dishName }) => {
    onSave(dishName);
  };

  const renderForm = ({ values, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <Row>
        <Input
          s={12}
          label="Dish Name"
          id="dishName"
          value={values.dishName}
          onChange={handleChange}
          data-testid="newDishName"
          />
      </Row>
      <Row>
        <Button type="submit" data-testid="saveNewDishButton">
          Save
        </Button>
      </Row>
    </form>
  );

  return (
    <Formik
      initialValues={{ dishName: '' }}
      onSubmit={handleSave}
      >
      {renderForm}
    </Formik>
  );
}
