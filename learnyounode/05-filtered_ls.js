var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = `.${process.argv[3]}`;

fs.readdir(dir, 'utf8', (err, files) => {
    if (err)
        return console.error(err);

    files.map((file) => {
        if (ext === path.extname(file))
            console.log(file);
    });
});

// var fs = require('fs');
// var dir = process.argv[2];
// var ext = `.${process.argv[3]}`;

// fs.readdir(dir, 'utf8', (err, files) => {
//     if (err)
//         return console.error(err);
//     else {
//         files.map((file) => {
//             if (ext === file.slice(-ext.length))
//                 console.log(file);
//         });
//     }
// });
