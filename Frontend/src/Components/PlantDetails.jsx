const PlantDetails = ({ plant, imOnSaved }) => {

    
   async  function handleSaved() {
        console
        let body = {
            common_name: plant["Common name (fr.)"]
          //  Categories: {plant.Categories}
          //  Categories: {plant.Climat}
          //  Zone: {plant.Zone}

       }
       console.log(plant)
    }
    
    return (
        <div className="plant-card" >
            {/* <h4>{plant.common_name}</h4>
            <p><strong>Sunlight Req.</strong>{plant.sunlight}</p>
            <p><strong>Water Req.</strong>{plant.water_requirements}</p>
            <p>
                {plant.createAt}
            </p> */}
            <h4>{plant["Common name (fr.)"]}</h4>
            <img src={plant.Img} alt="" />
            <p>Categories: {plant.Categories}</p>
            <p>Climat: {plant.Climat}</p>
            <p>Zone: {plant.Zone}</p>
            {imOnSaved == 'false' && <button  onClick={handleSaved}> Save</button>}
            <br>
            </br>
           {imOnSaved == 'true' && <button>Delete</button>} 
      
        </div>
    )
}

export default PlantDetails