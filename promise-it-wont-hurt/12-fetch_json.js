'use strict';

const qhttp = require("q-io/http");

qhttp.read('http://localhost:1337')
    .then((string) => console.log(JSON.parse(string)))
    .then(null, console.error)
    .done();
