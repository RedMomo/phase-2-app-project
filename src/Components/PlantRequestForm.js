import {React, useState} from 'react';

function PlantRequestForm({newPost}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");


    const handleNameSubmit = (e) => {
      setName(e.target.value);
    };
    const handleImageSubmit = (e) => {
      setImage(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

        fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "content-type": "application/json",
          },
        body: JSON.stringify({
            name: name,
            image: image,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            newPost(data);
          });
};


return (
    <div className="new-plant-form">
      <h2>Plant Request Form</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameSubmit} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleImageSubmit} type="text" name="image" placeholder="Image URL" />
        <button type="submit">Request Plant</button>
      </form>
    </div>
  );
}

export default PlantRequestForm