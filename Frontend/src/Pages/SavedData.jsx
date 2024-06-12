import React, { useEffect, useState } from "react";
import PlantDetails from "../Components/PlantDetails";
import { BASE_URL } from "../App"

function Saved() {
  const [savedPlants, setSavedPlants] = useState([]);

  const getPlants = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      // setSavedPlants(await response.json());
      //console.log("data", json);

      setSavedPlants([...data]);
      // console.log("saved");
      //   console.log(savedPlants);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlants();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${BASE_URL + id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setSavedPlants((prevPlants) => prevPlants.filter(plant => plant._id !== id) )
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home">
      <div className="plants">
        {savedPlants.map((plant, i) => {
          return (
            <PlantDetails key={plant._id} plant={plant} imOnSaved="true" handleDelete={ handleDelete } />
          );
        })}
      </div>
    </div>
  );
}

export default Saved;
