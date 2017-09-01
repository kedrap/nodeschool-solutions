const http = require('http');

http.get(process.argv[2], (res) => {
    // var data = '';

    res.setEncoding('utf8');
    res.on('data', chunk => {
        // data += chunk;
        console.log(chunk);
    });
    // res.on("end", () => {
        // console.log(data);
    // });
    res.on("error", (err) => {
        console.error(err);
    });

}).on("error", (err) => {
    console.error(err);
});
