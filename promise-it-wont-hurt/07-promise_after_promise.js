'use strict';

// let firstPromise = first();
// let secondPromise = firstPromise.then((data) => {
//     return second(data);
// }).then(console.log);

first().then((data) => {
    return second(data);
}).then(console.log);
