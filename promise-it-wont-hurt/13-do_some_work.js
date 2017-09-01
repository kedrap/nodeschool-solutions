'use strict';

const qhttp = require("q-io/http");

qhttp.read('http://localhost:7000')
    .then((id) => qhttp.read(`http://localhost:7001/${id.toString()}`))
    .then((user) => console.log(JSON.parse(user)))
    .then(null, console.error)
    .done();
