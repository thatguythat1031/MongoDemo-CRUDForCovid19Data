const mongoose = require("mongoose");

/**
 * date must be a string of format yyyymmdd
 * state is a 2 letter uppercase state abbreviation
 * positive is a number
 * dataQuality grade is a string of format "A+" through "F",
 * including minus ("B-"), plus ("B+") and normal grades ("B").
 */
const rawReportsSchema = mongoose.Schema({
    date: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 8,
    },
    state: { 
        type: String, 
        minLength: 2, 
        maxLength: 2,
        required: true,
    },
    positive: {
        type: Number,
        required: true,
    },
    dataQualityGrade: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 2,
    },
    negative: Number,
    pending: Number,
    hospitalizedCurrently: Number,
    hospitalizedCumulative: Number,
    inIcuCurrently: Number,
    inIcuCumulative: Number,
    onVentilatorCurrently: Number,
    onVentilatorCumulative: Number,
    recovered: Number,
    lastUpdateEt: String,
    dateModified: String,
    checkTimeEt: String,
    death: Number,
    hospitalized: Number,
    dateChecked: String,
    totalTestsViral: Number,
    positiveTestsViral: Number,
    negativeTestsViral: Number,
    positiveCasesViral: Number,
    deathConfirmed: Number,
    deathProbable: Number,
    totalTestEncountersViral: Number,
    totalTestPeopleViral: Number,
    totalTestsAntibody: Number,
    positiveTestsAntibody: Number,
    negativeTestsAntibody: Number,
    totalTestsPeopleAntibody: Number,
    positiveTestsPeopleAntibody: Number,
    negativeTestsPeopleAntibody: Number,
    totalTestsPeopleAntigen: Number,
    positiveTestsPeopleAntigen: Number,
    totalTestsAntigen: Number,
    positiveTestsAntigen: Number,
    fips: Number,
    positiveIncrease: Number,
    negativeIncrease: Number,
    total: Number,
    totalTestResults: Number,
    totalTestResultsIncrease: Number,
    posNeg: Number,
    deathIncrease: Number,
    hospitalizedIncrease: Number,
    hash: String,
    commercialScore: Number,
    negativeRegularScore: Number,
    negativeScore: Number,
    positiveScore: Number,
    score: Number,
    grade: Number,

});

module.exports = mongoose.model("rawReport", rawReportsSchema);