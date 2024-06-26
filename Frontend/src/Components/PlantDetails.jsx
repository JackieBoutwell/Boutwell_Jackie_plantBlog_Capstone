import { useReducer } from 'react'
import { BASE_URL } from '../App'

const PlantDetails = ({ plant, imOnSaved, handleDelete }) => {
    const handleSave = async (plant) => {
           const test = {
            "common_name": plant["Common name (fr.)"],
            Categories: plant.Categories,
            Climate: plant.Climat,
            Zone: plant.Zone[0] + "-" + plant.Zone[1],
            Img: plant.Img
        };
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(test),
        });
        const result = await response.json();
        console.log(result);
    }   

    console.log("plant", plant)
    
    return (
        <div className="plant-card" >
            {/* <h4>{plant.common_name}</h4>
            <p><strong>Sunlight Req.</strong>{plant.sunlight}</p>
            <p><strong>Water Req.</strong>{plant.water_requirements}</p>
            <p>
                {plant.createAt}
            </p> */}

            <h4>{imOnSaved == "true" ? plant.common_name : plant["Common name (fr.)"]}</h4>
            <img src={plant.Img} alt="" />
            <p>Categories: {plant.Categories}</p>
            <p>Climate: {plant.Climate}</p>
            <p>Zone: {plant.Zone}</p>
            {imOnSaved == 'false' && <button onClick={() => handleSave(plant)}> Save</button>}
            <br>
            </br>
            {imOnSaved == 'true' && <button onClick={() => handleDelete(plant._id)}>Delete</button>} 
      
        </div>
    )
}

export default PlantDetails