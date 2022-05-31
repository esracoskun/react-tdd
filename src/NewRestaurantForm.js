import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Input,
  Row,
} from 'react-materialize';

import { Formik } from "formik";

export default function NewRestaurantForm({onSave}) {
  const nameInput = useRef(null);

  useEffect(() => {
    if (nameInput.current.input) {
      nameInput.current.input.focus();
    }
  }, []);

  const handleSave = ({restaurantName, resetForm}) => {
    onSave(restaurantName);
    resetForm();
  }

  return (
    <Row>
      <Formik
        initialValues={{ restaurantName: '' }}
        onSubmit={handleSave}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input
              s={12} m={8} l={10}
              label='Restaurant Name'
              id="restaurantName"
              value={values.restaurantName}
              onChange={handleChange}
              data-test="newRestaurantName"
              ref={nameInput}
            />
            <Button s={12} m={4} l={2} data-test="saveNewRestaurantButton" >
              Save
            </Button>
          </form>
        )}
      </Formik>
    </Row>
  );
}
