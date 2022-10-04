import React from "react";

function RequestedPlants({ posts }) {
  console.log(posts);
  return (
    <ul className="card">
      <img src={posts.image} alt={posts.name} />
      <h4>{posts.name}</h4>
      {/* <p>Price: {posts.price}</p> */}
    </ul>
  );
}

export default RequestedPlants;
