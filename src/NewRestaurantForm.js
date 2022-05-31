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
      <Input
        s={12} m={8} l={10}
        label="Restaurant Name"
        id="restaurantName"
        name="restaurantName"
        error={errors.restaurantName}
        value={values.restaurantName}
        onChange={handleChange}
        data-test="newRestaurantName"
        ref={nameInput}
      />
      <Button
        type="submit"
        s={12} m={4} l={2}
        data-test="saveNewRestaurantButton" >
        Save
      </Button>
    </form>
  );

  return (
    <Row>
      <Formik
        initialValues={{ restaurantName: '' }}
        onSubmit={handleSave}
        validate={validate}
        >
        {renderForm}
      </Formik>
    </Row>
  );
}
