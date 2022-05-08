import React, { useState, useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/plants')
    .then(res => res.json())
    .then(res => setPlants(plants => plants = res))
  }, [])

  const plantList = plants.map(plant => (
    <PlantCard 
      id ={plant.id}
      name = {plant.name}
      image = {plant.image}
      price = {plant.price}
      key = {plant.id}
    />
  ))

  return (
    <ul className="cards">{ plantList }</ul>
  );
}

export default PlantList;
