import React, {useState} from "react";

function NewPlantForm() {
  const [formData, setFormData] = useState({
    name : "",
    image : "",
    price : ''
  })

  function handleSubmit(){
    return fetch('http://localhost:3000/plants', {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      data : JSON.stringify(formData)
    })
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onClick={ handleSubmit }>
        <input type="text" name="name" placeholder="Plant name" value={ formData.name } />
        <input type="text" name="image" placeholder="Image URL" value = { formData.image}/>
        <input type="number" name="price" step="0.01" placeholder="Price"  value = {formData.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
