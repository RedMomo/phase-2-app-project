import React from 'react'

function RequestedPlants({posts}) {
  return (
    <li className="card">
    <img src={posts.image} alt={posts.name} />
    <h4>{posts.name}</h4>
    <p>Price: {posts.price}</p>
    </li>
  );
}

export default RequestedPlants