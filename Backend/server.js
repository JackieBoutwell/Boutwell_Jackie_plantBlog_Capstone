import express from "express"
import 'dotenv/config'

//Anything using the models will be brought in by the controller
//import Plants from './models/plants.js'

import mongoConfig from './config.js'
import plantRoutes from'./routes/plantRoutes.js'

let port = (8080)
const app = express()

//Middleware
app.use('/api/plants', plantRoutes)

app.use(express.json())


app.get("/", (req, res) => {
    res.json('hello! From Server')
})

//First index route
//Moved this into PlantController
// app.get('/api/plants', async (req, res) => {
//     try {
//         const plants = await plant.find()
//         res.status(200).json(plants)
//     } catch (err) {
//         console.log(err.message)
//         res.status(400).json (err)
//     }
// })

app.listen(port, () => {
    console.log('listening on port: ' + port)
    mongoConfig()
})