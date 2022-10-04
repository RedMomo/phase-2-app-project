import React, { useState, useEffect } from "react";
import PlantRequestForm from "./PlantRequestForm";
import RequestedPlants from "./RequestedPlants";
import PlantCard from "./PlantCard";

function PlantRequestPage() {
  const [formData, setFormData] = useState([]);

  const handleFormData = (input) => {
    setFormData([...formData, input]);
  };

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setFormData(data);
      });
  }, []);

  return (
    <ul>
      <div>
        <PlantRequestForm onSubmitFormData={handleFormData} />
      </div>
      <div>
        <h1>Hey</h1>
        {formData.map((plant) => {
          console.log(plant);
          return <RequestedPlants key={plant.id} posts={plant} />;
        })}
        {/* <PlantCard plants={formData[0]}></PlantCard> */}
      </div>
    </ul>
  );
}
export default PlantRequestPage;
