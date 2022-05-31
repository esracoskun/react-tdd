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

  const validate = (values) => {
    let errors = {};

    if (values.restaurantName === '') {
      errors.restaurantName = 'Cannot be blank';
    }

    return errors;
  }

  const renderForm = ({ values, errors, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <Row>
        <Input
          s={12}
          label="Restaurant Name"
          id="restaurantName"
          name="restaurantName"
          error={errors.restaurantName}
          value={values.restaurantName}
          onChange={handleChange}
          data-test="newRestaurantName"
          ref={nameInput}
        />
      </Row>
      <Row>
        <Button
          type="submit"
          data-test="saveNewRestaurantButton" >
          Save
        </Button>
      </Row>
    </form>
  );

  return (
    <Formik
      initialValues={{ restaurantName: '' }}
      onSubmit={handleSave}
      validate={validate}
      >
      {renderForm}
    </Formik>
  );
}
