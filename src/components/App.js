import React, {useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [myFilter, setFilter] = useState('')
  function handleFilter(result){
    setFilter(result)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage filterWith = {myFilter} onFilter = {handleFilter}/>
    </div>
  );
}

export default App;
