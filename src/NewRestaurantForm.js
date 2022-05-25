import React, { useState } from 'react';
import { Button, Input } from 'react-materialize';

export default function NewRestaurantForm({onSave}) {
  const [inputText, setInputText] = useState('');

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  }

  const handleSave = () => {
    onSave(inputText);
  }

  return (
    <div>
      <Input
        label='Restaurant Name'
        value={inputText}
        onChange={handleTextChange}
        data-test="newRestaurantName"
      />

      <Button data-test="saveNewRestaurantButton" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}
