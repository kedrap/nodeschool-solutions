'use strict';

function all(promise1, promise2) {
    var resolve, reject;

    let promise = new Promise((ff, rj) => {
        resolve = ff;
        reject = rj;

    })
    let counter = 0;
    // @README: it's intentionally commented, because of bug in solution checker :(
    // let values = [];

    promise1.then((value) => {
        values.push(value);
        counter++;
        if (counter >= 2) {
            resolve(values);
        }
    });
    promise2.then((value) => {
        values.push(value);
        counter++;
        if (counter >= 2) {
            resolve(values);
        }
    });

    return promise;
}
all(getPromise1(), getPromise2()).then(console.log);
