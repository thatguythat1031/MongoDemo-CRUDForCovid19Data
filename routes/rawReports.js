const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const rawReport = require("../model/rawReports");
const asyncMiddleware = require("../util/asyncMiddleware");

/**
 * rawReports holds the original COVID19 report data. Create,
 * Update, and Delete operations on these endpoints will also
 * alter the summaryData documents so that the summaries are kept
 * up to date.
 */

/**
 * READ operations
 */

//get all rawReports- only return _id, date, state, positive, negative, and dataQualityGrade
//fields due to how large the database is. Doing this cut down size of server response from
//11MB to 1MB.
router.get("/", asyncMiddleware(async (req, res, next) => {
    const data = await rawReport.find({}, {
        date: 1, state: 1, positive: 1, negative: 1, dataQualityGrade: 1}).exec();
    res.json(data);
}));

//get full report by _id
router.get("/:id", asyncMiddleware(async (req, res, next) => {

    const reqId = req.params.id;

    //check that given _id is valid
    if (!mongoose.Types.ObjectId.isValid(reqId)) {
        res.json("Error! Invalid Object ID was provided");
        return;
    }

    //get response
    const data = await rawReport.find({ _id: reqId }).exec();

    //if response is empty
    if (!data.length) {
        res.json(`No data exists for ${reqId}`);
        return;
    }

    res.json(data);
}));

//get full reports by date and state
router.get("/:date/:state", asyncMiddleware(async (req, res, next) => {
    const passDate = req.params.date;
    const passState = req.params.state;

    //check that given date is valid- simple input validation
    //also simple validation for state
    if (passDate.length !== 8 || passState.length !== 2) {
        res.json("Error! Date must be length 8 in format yyyymmdd and state must be length 2");
        return;
    }

    //get response
    const data = await rawReport.find({ date: passDate, state: passState }).exec();

    //if response is empty
    if (!data.length) {
        res.json(`No data exists for ${reqId}`);
        return;
    }

    res.json(data);
}));

/**
 * CREATE operations
 */

 //create a new raw report
 router.post("/", asyncMiddleware(async (req, res, next) => {
    //create rawReport
    const { date, state, positive, dataQualityGrade, negative, 
    pending, hospitalizedCurrently, hospitalizedCumulative, inIcuCurrently,
    inIcuCumulative, onVentilatorCurrently, onVentilatorCumulative, recovered,
    lastUpdatedEt, dateModified, checkTimeEt, death, hospitalized, dateChecked,
    totalTestsViral, positiveTestsViral, negativeTestsViral, positiveCasesViral,
    deathConfirmed, deathProbable, totalTestEncountersViral, totalTestPeopleViral,
    totalTestsAntibody, positiveTestsAntibody, negativeTestsAntibody, 
    totalTestsPeopleAntibody, positiveTestsPeopleAntibody, negativeTestsPeopleAntibody,
    totalTestsPeopleAntigen, positiveTestsPeopleAntigen, totalTestsAntigen, positiveTestsAntigen,
    fips, positiveIncrease, negativeIncrease, total, totalTestResults, 
    totalTestResultsIncrease, posNeg, deathIncrease, hospitalizedIncrease, hash,
    commercialScore, negativeRegularScore, negativeScore, positiveScore, score, grade} = req.body;

    const report = new rawReport({
        date, state, positive, dataQualityGrade, negative, 
        pending, hospitalizedCurrently, hospitalizedCumulative, inIcuCurrently,
        inIcuCumulative, onVentilatorCurrently, onVentilatorCumulative, recovered,
        lastUpdatedEt, dateModified, checkTimeEt, death, hospitalized, dateChecked,
        totalTestsViral, positiveTestsViral, negativeTestsViral, positiveCasesViral,
        deathConfirmed, deathProbable, totalTestEncountersViral, totalTestPeopleViral,
        totalTestsAntibody, positiveTestsAntibody, negativeTestsAntibody, 
        totalTestsPeopleAntibody, positiveTestsPeopleAntibody, negativeTestsPeopleAntibody,
        totalTestsPeopleAntigen, positiveTestsPeopleAntigen, totalTestsAntigen, positiveTestsAntigen,
        fips, positiveIncrease, negativeIncrease, total, totalTestResults, 
        totalTestResultsIncrease, posNeg, deathIncrease, hospitalizedIncrease, hash,
        commercialScore, negativeRegularScore, negativeScore, positiveScore, score, grade
    });

    //need to save post async and then update summaryData- also update README and postman

    //update info in corresponding summaryData document
 }));


module.exports = router;