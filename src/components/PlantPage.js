import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ onFilter, filterWith }) {
  return (
    <main>
      <NewPlantForm />
      <Search onFilter = { onFilter }/>
      <PlantList myFilter = { filterWith }/>
    </main>
  );
}

export default PlantPage;
