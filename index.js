const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.get("/", (req, res) => {
    res.send("Welcome to Bistro Boss")
})

app.listen(port, () => {
    console.log(`Bistro-Boss server run on ${port}`)
})