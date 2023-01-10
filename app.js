const express= require("express");
const app= express();
const mongoose= require("mongoose");
require("dotenv/config");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

//Import routes

const postRoute= require("./routes/person");
app.use('/people',postRoute);


//connecting to mongo db

mongoose.connect(process.env.MONGO_CONNECTION,() => {
    console.log("Connected to mongo db");
});

//routes

app.get("/", (req, res) => {
    res.send("Inside home");
});

//listening port

app.listen(3000);