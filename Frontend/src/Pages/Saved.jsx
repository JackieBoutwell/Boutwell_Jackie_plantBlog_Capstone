import React,{useEffect, useState} from 'react'
import { useReducer } from 'react'
import PlantDetails from '../Components/PlantDetails'
import {reducer} from '../Components/PlantManager'



function Saved() {
const getPlants = async () => {
           const response = await fetch('http://localhost:8080/api/plants')
            const json = await response.json()
  console.log("data", json)
  
    return json
}
    
  const [savedPlants, setSavedPLants] = useState([])
  
  useEffect(() => {
    getPlants()
  },[])
    
    return (
      
        <div>
            {savedPlants.map((plant, i) => {
                   <PlantDetails key={plant._id} plant={plant} imOnSaved="true" />
            })}
    </div>
  )
}

export default Saved