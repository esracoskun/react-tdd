import React, { useState } from 'react';

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
      <input
        type="text"
        value={inputText}
        onChange={handleTextChange}
        data-test="newRestaurantName"
      />

      <button data-test="saveNewRestaurantButton" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
