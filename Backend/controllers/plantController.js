import Plant from "../models/plants.js"


// GET all plant data
export const getAllPlants = async (req, res) => {
    try {
        let plantData = await Plant.find({})
        res.json(plantData);
        res.json({ message: "Get all plant" })
    } catch (err) {
        console.log(err.message)
        res.status(400).json(err)
    }
}; 

//GET a single plant data
export const getOnePlant = async (req, res) => {
      try {
    const { id } = req.params
    //Dont need.
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({ error: 'No Plant Data' })
    // }
    const Plant = await Plant.findById(id)
          if (!Plant) {
              return res.status(404).json({ error: 'No Plant Data' })
          }
          res.status(200).json(workout)
      } catch (err) {
              console.log(err.message)
        res.status(400).json(err)
    }
          
};

//POST a new plant data set

export const createPlant = async (req, res) => {
    const { common_name, plant_family, scientific_name, hardiness, sunlight_requirements, water_requirements, region, grow_zone } = req.body
console.log(req.body)
    try {
        let plantData = await Plant.create({ common_name, plant_family, scientific_name, hardiness, sunlight_requirements, water_requirements, region, grow_zone })
        res.status(200).json(plantData)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

//DELETE a plant
export const deletePlant = async (req, res) => {
  try {
    let plantData = await Plant.deleteOne({ "_id": req.params.id })
    res.send(plantData);
    // res.json({ mssg: 'Delete a plant ' })
  } catch (error) {
    res.send("Error in Deleting the plant data").status(400);
  }
};

//UPDATE a plant
export const updatePlant = async (req, res) => {
    console.log(req.params.id, req.body.common_name);
    try {
       // const plant = await Plant.findById(req.params.id);
       // console.log(plant)

        let plantData = await Plant.findOneAndUpdate({ "_id": req.params.id }, {
      
            common_name: req.body.common_name,
            plant_family: req.body.plant_family,
            scientific_name: req.body.scientific_name,
            sunlight_requirements: req.body.sunlight_requirements,
            water_requirements: req.body.water_requirements,
            region: req.body.region,
            grow_zone: req.body.grow_zone,
            hardiness: req.body.hardiness,
        }, { new: true})
      //     const response = await plant.save()
       // console.log(response)
    res.send(plantData)
      } catch (error) {
        res.send(error.message).status(400);
    }
};