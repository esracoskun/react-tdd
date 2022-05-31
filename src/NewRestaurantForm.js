import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Input,
  Row,
} from 'react-materialize';

import { Formik } from "formik";

export default function NewRestaurantForm({onSave, onCancel}) {
  const nameInput = useRef(null);

  useEffect(() => {
    if (nameInput.current.input) {
      nameInput.current.input.focus();
    }
  }, []);

  const handleSave = ({ setStatus, restaurantName, resetForm }) => {
    onSave(restaurantName);
    setStatus(false);
    resetForm();
  }

  const validate = (values) => {
    let errors = {};

    if (values.restaurantName === '') {
      errors.restaurantName = 'Cannot be blank';
    }

    return errors;
  }

  const handleCancel = ({ resetForm }) => () => {
    resetForm();
    onCancel();
  }

  const renderForm = ({ values, errors, handleChange, handleSubmit, resetForm }) => (
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
          data-testid="newRestaurantName"
          ref={nameInput}
        />
      </Row>
      <Row>
        <Button
          type="button"
          data-testid="cancelAddRestaurantButton"
          onClick={handleCancel({ resetForm })}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          data-testid="saveNewRestaurantButton" >
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
