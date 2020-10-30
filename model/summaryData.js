const mongoose = require("mongoose");

/**
 * date must be in format yyyymmdd
 * States are in format [{state: 'VA', positive: 0}, {state: 'WA', positive: 5000}]
 * totalPositive is a whole number
 * numRecords is a whole number
 * avgPositive is totalPositive divided by numRecords.
 */
const summaryDataSchema = mongoose.Schema({
    date: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 8,
    },
    states: [{
        state: { type: String, minLength: 2, maxLength: 2},
        positive: Number,
    }],
    totalPositive: {
        type: Number,
        required: true,
    },
    numRecords: {
        type: Number,
        required: true,
    },
    avgPositive: {
        type: Number,
        required: true,
    }

});

module.exports = mongoose.model("summaryData", summaryDataSchema);