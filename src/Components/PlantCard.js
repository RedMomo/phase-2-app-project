import {React, useState} from 'react'

function PlantCard({plants}) {
    const [inStock, setInStock] = useState(true)

    function handleClick() {
        console.log("stock click!")
        setInStock(!inStock)
    }
  return (
    <li className="card">
    <img src={plants.image} alt={plants.name} />
    <h4>{plants.name}</h4>
    <p>Price: {plants.price}</p>
    
    {inStock ? (
      <button onClick={handleClick} className="primary">Add to Cart</button>
    ) : (
      <button onClick={handleClick} className="secondary-alt">Out of Stock</button>
    )}
    
  </li>
  )
}

export default PlantCard