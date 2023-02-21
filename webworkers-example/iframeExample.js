// example of using iframe postMessage to commuicate between browser tabs

// to make an sse connection with POST and headers:
// use https://github.com/mpetazzoni/sse.js

/*
headers to include:
    Content-Type
    IDS-SESSION-ID

orgId and userId are in the url

var source = new SSE(url, {headers: {'Content-Type': 'application/json'},
                           method: 'POST'});
*/