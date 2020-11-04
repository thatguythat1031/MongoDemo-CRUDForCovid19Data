# MongoDemo-CRUDForCovid19Data
Restful API built with a MongoDB backend. Built to try out MongoDB for storing Covid19 Data

Requires that the ENV variable DB_CONNECTION is specified as your MongoDB connection string.j

Not listed below is an additional `POST` endpoint that is not yet finished.

Project is paused for now.

## REST API

### Get collections
#### Request
`GET /`
```
http://localhost:5000/
```
#### Response
```
[
    "rawReports",
    "summaryData"
]
```

### Get all summaryData Documents
#### Request
`GET /summaryData`
```
http://localhost:5000/summaryData
```
#### Response
```
[
    {
        "_id": "5f9984beb751632cedb0d332",
        "date": "20200817",
        "states": [
            {
                "state": "AS",
                "positive": 0
            },
            {
                "state": "MP",
                "positive": 53
            },
            {
                "state": "GU",
                "positive": 558
            },
            {
                "state": "VI",
                "positive": 760
            }
        ],
        "totalPositive": 5336466,
        "numRecords": 56,
        "avgPositive": 95294.04
    },
]
```

### Get summaryData document by date
#### Request
`GET /summaryData/:date`
```
http://localhost:5000/summaryData/20200817
```
#### Response
```
[
    {
        "_id": "5f9984beb751632cedb0d332",
        "date": "20200817",
        "states": [
            {
                "state": "AS",
                "positive": 0
            },
            {
                "state": "MP",
                "positive": 53
            },
            {
                "state": "GU",
                "positive": 558
            },
            {
                "state": "VI",
                "positive": 760
            }
        ],
        "totalPositive": 5336466,
        "numRecords": 56,
        "avgPositive": 95294.04
    }
]
```

### Get all rawReports
#### Request
`GET /rawReports`
```
http://localhost:5000/rawReports
```
#### Response
```
[
    {
        "_id": "5f982c011f7501327e6d84a2",
        "date": "20200818",
        "state": "AK",
        "positive": 5177,
        "negative": 304832,
        "dataQualityGrade": "A"
    },
    {
        "_id": "5f982c011f7501327e6d84a3",
        "date": "20200818",
        "state": "AL",
        "positive": 110361,
        "negative": 757898,
        "dataQualityGrade": "B"
    },
]
```

### Get report by ObjectID
#### Request
`GET /rawReports/:id`
```
http://localhost:5000/rawReports/5f982c011f7501327e6d84b0
```
#### Response
```
[
    {
        "_id": "5f982c011f7501327e6d84b0",
        "date": "20200818",
        "state": "ID",
        "positive": 27942,
        "negative": 198927,
        "pending": null,
        "hospitalizedCurrently": 167,
        "hospitalizedCumulative": 1129,
        "inIcuCurrently": 37,
        "inIcuCumulative": 316,
        "onVentilatorCurrently": null,
        "onVentilatorCumulative": null,
        "recovered": 11093,
        "dataQualityGrade": "A",
        "lastUpdateEt": "8/17/2020 19:00",
        "dateModified": "2020-08-17T19:00:00Z",
        "checkTimeEt": "08/17 15:00",
        "death": 273,
        "hospitalized": 1129,
        "dateChecked": "2020-08-17T19:00:00Z",
        "totalTestsViral": 225018,
        "positiveTestsViral": null,
        "negativeTestsViral": null,
        "positiveCasesViral": 26091,
        "deathConfirmed": 245,
        "deathProbable": 28,
        "totalTestEncountersViral": null,
        "totalTestsPeopleViral": "",
        "totalTestsAntibody": null,
        "positiveTestsAntibody": null,
        "negativeTestsAntibody": null,
        "totalTestsPeopleAntibody": null,
        "positiveTestsPeopleAntibody": null,
        "negativeTestsPeopleAntibody": null,
        "totalTestsPeopleAntigen": null,
        "positiveTestsPeopleAntigen": null,
        "totalTestsAntigen": null,
        "positiveTestsAntigen": null,
        "fips": 16,
        "positiveIncrease": 282,
        "negativeIncrease": 2100,
        "total": 226869,
        "totalTestResults": 226869,
        "totalTestResultsIncrease": 2382,
        "posNeg": 226869,
        "deathIncrease": 4,
        "hospitalizedIncrease": 19,
        "hash": "e7d0820b51af1b71a74d8461adb783ae73002503",
        "commercialScore": 0,
        "negativeRegularScore": 0,
        "negativeScore": 0,
        "positiveScore": 0,
        "score": 0,
        "grade": null
    }
]
```

### Get reports by date and state
#### Request
`GET /rawReports/:date/:state`
```
http://localhost:5000/rawReports/20200601/VA
```
#### Response
```
[
    {
        "_id": "5f982c011f7501327e6d95e3",
        "date": "20200601",
        "state": "VA",
        "positive": 45398,
        "negative": 279321,
        "pending": 419,
        "hospitalizedCurrently": 1371,
        "hospitalizedCumulative": 7326,
        "inIcuCurrently": 347,
        "inIcuCumulative": null,
        "onVentilatorCurrently": 188,
        "onVentilatorCumulative": null,
        "recovered": 5899,
        "dataQualityGrade": "A+",
        "lastUpdateEt": "5/31/2020 17:00",
        "dateModified": "2020-05-31T17:00:00Z",
        "checkTimeEt": "05/31 13:00",
        "death": 1392,
        "hospitalized": 7326,
        "dateChecked": "2020-05-31T17:00:00Z",
        "totalTestsViral": null,
        "positiveTestsViral": null,
        "negativeTestsViral": null,
        "positiveCasesViral": 43247,
        "deathConfirmed": 1282,
        "deathProbable": 110,
        "totalTestEncountersViral": 322568,
        "totalTestsPeopleViral": "",
        "totalTestsAntibody": 39966,
        "positiveTestsAntibody": null,
        "negativeTestsAntibody": null,
        "totalTestsPeopleAntibody": null,
        "positiveTestsPeopleAntibody": null,
        "negativeTestsPeopleAntibody": null,
        "totalTestsPeopleAntigen": null,
        "positiveTestsPeopleAntigen": null,
        "totalTestsAntigen": null,
        "positiveTestsAntigen": null,
        "fips": 51,
        "positiveIncrease": 791,
        "negativeIncrease": 8537,
        "total": 325138,
        "totalTestResults": 324719,
        "totalTestResultsIncrease": 9328,
        "posNeg": 324719,
        "deathIncrease": 17,
        "hospitalizedIncrease": 0,
        "hash": "7bb6abe8a8327336451a2ecb09c1b2ca4e5a2ca4",
        "commercialScore": 0,
        "negativeRegularScore": 0,
        "negativeScore": 0,
        "positiveScore": 0,
        "score": 0,
        "grade": null
    }
]
```

