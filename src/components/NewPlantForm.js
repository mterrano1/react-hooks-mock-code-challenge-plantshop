import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [plantName, setPlantName] = useState('');
  const [plantImage, setPlantImage] = useState('');
  const [plantPrice, setPlantPrice] = useState(0);

  const newPlantInfo = { 
    name: plantName, 
    image: plantImage, 
    price: plantPrice 
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlantInfo)
    })
    .then(res => res.json())
    .then(newPlant => onAddPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input onChange={(e) => setPlantName(e.target.value)} type="text" name="name" placeholder="Plant name" />
        <input onChange={(e) => setPlantImage(e.target.value)} type="text" name="image" placeholder="Image URL" />
        <input onChange={(e) => setPlantPrice(parseFloat(e.target.value))} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
