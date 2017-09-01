const bl = require('bl');
const http = require('http');
let strings = [];
let counter = 0;
const max = 3;

function printResults() {
    strings.forEach(string => {
        console.log(string);
    });
}

function httpGet(index) {
    http.get(process.argv[2 + index], response => {
        response.pipe(bl((err, data) => {
            if (err) {
                return console.log(err);
            }

            strings[index] = data.toString();
            counter++;

            if (counter === 3) {
                printResults();
            }
        }))
    });
}

for (let i = 0; i < max; i++) {
    httpGet(i);
};
