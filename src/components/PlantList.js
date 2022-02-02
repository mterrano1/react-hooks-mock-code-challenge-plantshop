import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantCards }) {
  
  const plants = plantCards.map(plant => 
  <PlantCard
    key={plant.id}
    plant={plant}
  />)


  return (
    <ul className="cards">{plants}</ul>
  );
}

export default PlantList;
