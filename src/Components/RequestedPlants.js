import React, { useState } from "react";

function RequestedPlants({ posts, onDelete }) {
  const [like, setLike] = useState(1);

  const handleLike = () => {
    setLike(like + 1);
  };

  const handleDislike = () => {
    setLike(like - 1);
  };

  if (like === 0) {
    console.log("like 0");
    console.log(posts.id);
    fetch(`http://localhost:3000/posts/${posts.id}`, { method: "DELETE" });
    onDelete(posts.id);
  }

  return (
    <ul className="card">
      <img src={posts.image} alt={posts.name} />
      <div>
        <h4>{posts.name}</h4>
        <h4>total likes: {like}</h4>
      </div>
      {/* <p>Price: {posts.price}</p> */}
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Disike</button>
    </ul>
  );
}

export default RequestedPlants;
