'use strict';

let promise = Promise.reject(new Error('rejected'));

promise.catch((err) => console.error(err));
