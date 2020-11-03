const express = require("express");
const mongoose = require("mongoose");
const asyncMiddleware = require("./util/asyncMiddleware");
require("dotenv/config");

const app = express();

const port = process.env.PORT || 5000;

//get base routes function
const getCollections = async (req, res) => {
    let collectionList = [];
    mongoose.connection.db.listCollections().toArray(async function(err, names) {
        if (err) {
            console.log(err);
        }
        names.forEach(function(e, i, a) {
            collectionList.push(e.name);
        })
        res.send(collectionList);
    });
}

//base route- show collections
app.get("/", asyncMiddleware(async (req, res, next) => {
    collectionList = await getCollections(req, res);
}));

//Middleware
app.use(express.json());

//imported routes
const summaryRouter = require("./routes/summaryData");
app.use("/summaryData", summaryRouter);
const rawReportsRouter = require("./routes/rawReports");
app.use("/rawReports", rawReportsRouter);

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