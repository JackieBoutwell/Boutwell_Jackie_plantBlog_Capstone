import express from "express"

let port = (8080)
const app = express()

app.get("/", (req, res) => {
    res.json('hello! From Server')
})


app.listen(port, () => {
    console.log('listening on port: ' + port)
})