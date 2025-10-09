var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8925",
        "ok": "0",
        "ko": "8925"
    },
    "minResponseTime": {
        "total": "275",
        "ok": "-",
        "ko": "275"
    },
    "maxResponseTime": {
        "total": "1360",
        "ok": "-",
        "ko": "1360"
    },
    "meanResponseTime": {
        "total": "321",
        "ok": "-",
        "ko": "321"
    },
    "standardDeviation": {
        "total": "39",
        "ok": "-",
        "ko": "39"
    },
    "percentiles1": {
        "total": "324",
        "ok": "-",
        "ko": "324"
    },
    "percentiles2": {
        "total": "343",
        "ok": "-",
        "ko": "343"
    },
    "percentiles3": {
        "total": "350",
        "ok": "-",
        "ko": "350"
    },
    "percentiles4": {
        "total": "465",
        "ok": "-",
        "ko": "465"
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
    "count": 8925,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "146.311",
        "ok": "-",
        "ko": "146.311"
    }
},
contents: {
"req_transferencia-7c881": {
        type: "REQUEST",
        name: "Transferencia",
path: "Transferencia",
pathFormatted: "req_transferencia-7c881",
stats: {
    "name": "Transferencia",
    "numberOfRequests": {
        "total": "8925",
        "ok": "0",
        "ko": "8925"
    },
    "minResponseTime": {
        "total": "275",
        "ok": "-",
        "ko": "275"
    },
    "maxResponseTime": {
        "total": "1360",
        "ok": "-",
        "ko": "1360"
    },
    "meanResponseTime": {
        "total": "321",
        "ok": "-",
        "ko": "321"
    },
    "standardDeviation": {
        "total": "39",
        "ok": "-",
        "ko": "39"
    },
    "percentiles1": {
        "total": "324",
        "ok": "-",
        "ko": "324"
    },
    "percentiles2": {
        "total": "343",
        "ok": "-",
        "ko": "343"
    },
    "percentiles3": {
        "total": "350",
        "ok": "-",
        "ko": "350"
    },
    "percentiles4": {
        "total": "465",
        "ok": "-",
        "ko": "465"
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
    "count": 8925,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "146.311",
        "ok": "-",
        "ko": "146.311"
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
