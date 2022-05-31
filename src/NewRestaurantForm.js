import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Input,
  Row
} from 'react-materialize';

export default function NewRestaurantForm({onSave}) {
  const nameInput = useRef(null);

  useEffect(() => {
    if (nameInput.current.input) {
      nameInput.current.input.focus();
    }
  }, []);

  const [inputText, setInputText] = useState('');

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  }

  const handleSave = () => {
    onSave(inputText);
    setInputText('');
  }

  return (
    <Row>
      <Input
        s={12} m={8} l={10}
        label='Restaurant Name'
        value={inputText}
        onChange={handleTextChange}
        data-test="newRestaurantName"
        ref={nameInput}
      />

      <Button s={12} m={4} l={2} data-test="saveNewRestaurantButton" onClick={handleSave}>
        Save
      </Button>
    </Row>
  );
}
