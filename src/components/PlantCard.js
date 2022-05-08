import React, {useState} from "react";

function PlantCard({id, name, image, price}) {
  const [inStock, setInStock] = useState(true)

  function handleStock(){
    setInStock(!inStock)
  }
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <div onClick={handleStock}>
        {inStock ? (
          <button className="primary">In Stock</button>
        ) : (
          <button>Out of Stock</button>
        )}
      </div>
    </li>
  );
}

export default PlantCard;
