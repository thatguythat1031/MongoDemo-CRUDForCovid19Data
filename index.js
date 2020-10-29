const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

const port = process.env.PORT || 5000;

//routes
app.get("/", (req, res) => {
    res.send("Hello there, General Kenobi");
})

//database connection- local for now
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB connected"))
.catch((err) => console.log(err));

//server connection
app.listen(port, () => console.log(`App running on port ${port}`));