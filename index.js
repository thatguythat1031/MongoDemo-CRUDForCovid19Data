const express = require("express");
const mongoose = require("mongoose") 
    , Admin = mongoose.mongo.Admin;
require("dotenv/config");

const app = express();

const port = process.env.PORT || 5000;

//base route- show collections
app.get("/", (req, res) => {
    //res.send("Hello there, General Kenobi");
    let collectionList = [];
    mongoose.connection.db.listCollections().toArray(async function(err, names) {
        if (err) {
            console.log(err);
        }
        names.forEach(function(e, i, a) {
            collectionList.push(e.name);
        })
        console.log(collectionList);
    });
    console.log(`full list at once ${collectionList}`);
    res.json(collectionList);
    // .then((resp) => res.status(200).json(resp))
    // .catch((err) => res.status(400).json("Request Failed"));
})

//Middleware
app.use(express.json());

//database connection- local for now
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Covid19Data",
})
.then(() => console.log("DB connected"))
.catch((err) => console.log(err));

//server connection
app.listen(port, () => console.log(`App running on port ${port}`));