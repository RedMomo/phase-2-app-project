import React, {useState} from "react";
import PlantRequestForm from "./PlantRequestForm";
import RequestedPlants from "./RequestedPlants";

function PlantRequestPage() {
  const [newPost, setNewPost] = useState([])
  const newPost = (posts) => {
    setNewPost([...posts, posts]);
  };

  fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => {
    console.log(data);
        });
  
    return (
      <ul className="cards">
        {posts.map((post) => {
          return <RequestedPlants key={post.id} plants={post}></RequestedPlants>})}
        <PlantRequestForm newPosts={newPost} />
      </ul>
    )
  }
export default PlantRequestPage