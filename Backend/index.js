const express = require("express")

const app = express();

const PORT = 8000

app.get("/", (req, res) => {
    res.status(200).json({"Message": "Hello world"});
})

app.listen(PORT, ()=>{
    console.log("Listening on port", PORT)
})