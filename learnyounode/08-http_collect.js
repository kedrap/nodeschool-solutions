const concat = require('concat-stream');
const http = require('http');

http.get(process.argv[2], (response) => {
    response.pipe(concat(data => {
        str = data.toString();
        console.log(str.length);
        console.log(str);
    }))
});
