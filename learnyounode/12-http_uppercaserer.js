const http = require('http');
const map = require('through2-map');

// let server = http.createServer((request, response) => {
//     if (request.method !== 'POST') {
//         response.end('send me a POST\n')
//     }

//     var body = '';
//     request.on('data', function (data) {
//         body += data;
//     });
//     request.on('end', function () {
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.end(body.toUpperCase());
//     });
// });

let server = http.createServer((request, response) => {
    if (request.method !== 'POST') {
        response.end('send me a POST\n')
    }

    request.pipe(map(chunk => {
        chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(Number(process.argv[2]));
