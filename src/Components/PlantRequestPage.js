import React, { useState, useEffect } from "react";
import PlantRequestForm from "./PlantRequestForm";
import RequestedPlants from "./RequestedPlants";

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

  const handleRemoveDom = (plantId) => {
    const plantsToDisplay = formData.filter((ele) => ele.id !== plantId);
    setFormData(plantsToDisplay);
  };

  return (
    <ul>
      <div>
        <PlantRequestForm onSubmitFormData={handleFormData} />
      </div>
      <div>
        {formData.map((plant) => {
          return (
            <RequestedPlants
              key={plant.id}
              posts={plant}
              onDelete={handleRemoveDom}
            />
          );
        })}
      </div>
    </ul>
  );
}
export default PlantRequestPage;
