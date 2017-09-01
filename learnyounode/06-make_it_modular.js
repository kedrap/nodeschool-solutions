const readdir = require('./readdir');

var dir = process.argv[2];
var filter = process.argv[3];

readdir(dir, filter, (err, list) => {
    if (err)
        return console.error(err);

    list.forEach((file) => {
        console.log(file);
    });
});
