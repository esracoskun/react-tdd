import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('viewers');
  return (
    <div className='hello'>Hello, {name}</div>
  );
}
