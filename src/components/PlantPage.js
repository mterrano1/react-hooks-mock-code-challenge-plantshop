import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantCards, setPlantCards] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(plants => setPlantCards(plants))
  }, []);

  function handleAddPlant(addPlant) {
    const updatedPlantsArray = [...plantCards, addPlant]
    setPlantCards(updatedPlantsArray)
  }

  function handleSearch(e) {
    setSearch(e);
  }

  const searchPlants = plantCards.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plantCards={searchPlants} />
    </main>
  );
}

export default PlantPage;
