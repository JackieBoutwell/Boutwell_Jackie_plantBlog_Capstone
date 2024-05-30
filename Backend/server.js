import express from "express"
import 'dotenv/config'
import Plants from './models/plants.js'

import mongoConfig from'./config.js'
import plant from "./models/plants.js"

let port = (8080)
const app = express()

app.get("/", (req, res) => {
    res.json('hello! From Server')
})

//First index route
app.get('/api/plants', async (req, res) => {
    try {
        const plants = await plant.find()
        res.status(200).json(todos)
    } catch (err) {
        console.log(err.message)
        res.status(400).json (err)
    }
})

app.listen(port, () => {
    console.log('listening on port: ' + port)
    mongoConfig()
})