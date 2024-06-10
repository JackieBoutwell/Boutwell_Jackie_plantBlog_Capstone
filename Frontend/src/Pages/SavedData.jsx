import React,{useEffect, useState} from 'react'
import { useReducer } from 'react'
import PlantDetails from '../Components/PlantDetails'
import {reducer} from '../Components/PlantManager'



function Saved() {
  const [savedPlants, setSavedPlants] = useState([]);

    const getPlants = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/plants')
           const data = await response.json()            
    // setSavedPlants(await response.json());
    //console.log("data", json);
    
    setSavedPlants([...data]);
    // console.log("saved");
    //   console.log(savedPlants);
      console.log(data);
        
        } catch (error) {
            console.log(error)
        
    }
   
  }

  useEffect(() => {
    getPlants()
  },[])
    
    return (

        <div className='home'>
            <div className='plants'>
        {savedPlants.map((plant, i) => {
                  return<PlantDetails key={plant._id} plant={plant} imOnSaved="true" />
        })}
                </div>
    </div>
  )
}

export default Saved