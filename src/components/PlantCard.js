import React, { useState } from "react";

function PlantCard({ plant }) {
  const { id, name, image, price } = plant;
  const [stock, setStock] = useState(true);


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick={() => setStock(false)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setStock(true)} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
