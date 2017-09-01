const http = require('http');
const url = require('url');

function parsetime(date) {
    return {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    };
}

function unixtime(date) {
    return {
        "unixtime": date.getTime()
    };
}

let server = http.createServer((request, response) => {
    let parsedUrl = url.parse(request.url, true);
    let date = new Date(parsedUrl.query['iso']);
    let requestUrl = parsedUrl.pathname;
    let result;

    if (requestUrl === '/api/parsetime') {
        result = parsetime(date);
    } else if (requestUrl === '/api/unixtime') {
        result = unixtime(date);
    }

    if (result) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(result));
    } else {
        response.writeHead(404);
        response.end();
    }
});

server.listen(Number(process.argv[2]));
