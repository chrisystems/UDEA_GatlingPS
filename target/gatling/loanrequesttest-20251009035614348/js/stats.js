var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12043",
        "ok": "2893",
        "ko": "9150"
    },
    "minResponseTime": {
        "total": "138",
        "ok": "280",
        "ko": "138"
    },
    "maxResponseTime": {
        "total": "79237",
        "ok": "55265",
        "ko": "79237"
    },
    "meanResponseTime": {
        "total": "10974",
        "ok": "7501",
        "ko": "12072"
    },
    "standardDeviation": {
        "total": "8853",
        "ok": "6399",
        "ko": "9230"
    },
    "percentiles1": {
        "total": "11061",
        "ok": "5256",
        "ko": "12011"
    },
    "percentiles2": {
        "total": "16651",
        "ok": "10499",
        "ko": "19064"
    },
    "percentiles3": {
        "total": "23195",
        "ok": "19122",
        "ko": "24008"
    },
    "percentiles4": {
        "total": "37971",
        "ok": "27740",
        "ko": "53572"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 247,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 23,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2623,
    "percentage": 22
},
    "group4": {
    "name": "failed",
    "count": 9150,
    "percentage": 76
},
    "meanNumberOfRequestsPerSecond": {
        "total": "66.906",
        "ok": "16.072",
        "ko": "50.833"
    }
},
contents: {
"req_login-request-faa3c": {
        type: "REQUEST",
        name: "Login Request",
path: "Login Request",
pathFormatted: "req_login-request-faa3c",
stats: {
    "name": "Login Request",
    "numberOfRequests": {
        "total": "9150",
        "ok": "2893",
        "ko": "6257"
    },
    "minResponseTime": {
        "total": "280",
        "ok": "280",
        "ko": "4021"
    },
    "maxResponseTime": {
        "total": "60015",
        "ok": "55265",
        "ko": "60015"
    },
    "meanResponseTime": {
        "total": "13078",
        "ok": "7501",
        "ko": "15656"
    },
    "standardDeviation": {
        "total": "7150",
        "ok": "6399",
        "ko": "5900"
    },
    "percentiles1": {
        "total": "12133",
        "ok": "5256",
        "ko": "14034"
    },
    "percentiles2": {
        "total": "19093",
        "ok": "10499",
        "ko": "20018"
    },
    "percentiles3": {
        "total": "23270",
        "ok": "19122",
        "ko": "24064"
    },
    "percentiles4": {
        "total": "28984",
        "ok": "27740",
        "ko": "29024"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 247,
    "percentage": 3
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 23,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2623,
    "percentage": 29
},
    "group4": {
    "name": "failed",
    "count": 6257,
    "percentage": 68
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50.833",
        "ok": "16.072",
        "ko": "34.761"
    }
}
    },"req_loan-request-1ff55": {
        type: "REQUEST",
        name: "Loan Request",
path: "Loan Request",
pathFormatted: "req_loan-request-1ff55",
stats: {
    "name": "Loan Request",
    "numberOfRequests": {
        "total": "2893",
        "ok": "0",
        "ko": "2893"
    },
    "minResponseTime": {
        "total": "138",
        "ok": "-",
        "ko": "138"
    },
    "maxResponseTime": {
        "total": "79237",
        "ok": "-",
        "ko": "79237"
    },
    "meanResponseTime": {
        "total": "4320",
        "ok": "-",
        "ko": "4320"
    },
    "standardDeviation": {
        "total": "10310",
        "ok": "-",
        "ko": "10310"
    },
    "percentiles1": {
        "total": "1252",
        "ok": "-",
        "ko": "1252"
    },
    "percentiles2": {
        "total": "3234",
        "ok": "-",
        "ko": "3234"
    },
    "percentiles3": {
        "total": "16789",
        "ok": "-",
        "ko": "16789"
    },
    "percentiles4": {
        "total": "60011",
        "ok": "-",
        "ko": "60011"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2893,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.072",
        "ok": "-",
        "ko": "16.072"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
