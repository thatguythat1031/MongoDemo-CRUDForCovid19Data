const express = require("express");
const router = express.Router();
const SummaryData = require("../model/summaryData");
const asyncMiddleware = require("../util/asyncMiddleware");

/**
 * summaryData holds the summary data compiled from the rawReports collection.
 * Therefore, there is no option to directly add a document to the summaryData
 * collection, as this is done automatically when needed by rawReports' queries.
 * Only read operations will be supported by this API for summaryData.
 */

//get all summaryData documents
router.get("/", asyncMiddleware(async (req, res, next) => {
    const data = await SummaryData.find().exec();
    res.json(data);
}));

//get summary for one date
router.get("/:date", asyncMiddleware(async (req, res, next) => {
    const passDate = req.params.date;

    //check that given date is valid- simple input validation
    if (passDate.length !== 8) {
        res.json("Error! Date must be length 8 in format yyyymmdd");
        return;
    }

    //get response
    const data = await SummaryData.find({ date: passDate }).exec();

    //if response is empty
    if (!data.length) {
        res.json(`No data exists for ${passDate}`);
        return;
    }

    res.json(data);
}));

module.exports = router;