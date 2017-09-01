'use strict';

let promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
});

function onReject(err) {
  console.log(err.message);
}

promise.then(null, onReject)
  // .catch((err) => console.error(err));
