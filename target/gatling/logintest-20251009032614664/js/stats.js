var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "825",
        "ok": "825",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "273",
        "ok": "273",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5557",
        "ok": "5557",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "381",
        "ok": "381",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "367",
        "ok": "367",
        "ko": "-"
    },
    "percentiles1": {
        "total": "339",
        "ok": "339",
        "ko": "-"
    },
    "percentiles2": {
        "total": "378",
        "ok": "378",
        "ko": "-"
    },
    "percentiles3": {
        "total": "411",
        "ok": "411",
        "ko": "-"
    },
    "percentiles4": {
        "total": "692",
        "ok": "692",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 817,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.613",
        "ok": "26.613",
        "ko": "-"
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
        "total": "825",
        "ok": "825",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "273",
        "ok": "273",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5557",
        "ok": "5557",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "381",
        "ok": "381",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "367",
        "ok": "367",
        "ko": "-"
    },
    "percentiles1": {
        "total": "339",
        "ok": "339",
        "ko": "-"
    },
    "percentiles2": {
        "total": "378",
        "ok": "378",
        "ko": "-"
    },
    "percentiles3": {
        "total": "411",
        "ok": "411",
        "ko": "-"
    },
    "percentiles4": {
        "total": "692",
        "ok": "692",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 817,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.613",
        "ok": "26.613",
        "ko": "-"
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
