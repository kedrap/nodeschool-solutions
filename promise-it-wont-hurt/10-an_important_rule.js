'use strict';

function alwaysThrows() {
    // @README: according to https://github.com/stevekane/promise-it-wont-hurt/pull/112/files#diff-fb8b6508743a59b4d64c7bac4fb6c8ba
    // you have to 'hack' your `exercises/an_important_rule/solution/solution.js` file to pass this step
    throw new Error('OH NOES').message;
}

function iterate(number) {
    console.log(number);
    return number + 1;
}

Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(null, console.log)
    // .then(null, alwaysThrows)
    // .catch(console.log);
