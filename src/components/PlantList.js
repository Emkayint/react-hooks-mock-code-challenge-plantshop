import React, { useState, useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/plants')
    .then(res => res.json())
    .then(res => setPlants(plants => plants = res))
  }, [])

  

  return (
    <ul className="cards">{/* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
