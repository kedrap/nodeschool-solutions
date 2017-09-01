'use strict';

function parsePromised(json) {
    return new Promise((fulfill, reject) => {
        try {
            fulfill(JSON.parse(json));
        } catch (error) {
            // @README: according to https://github.com/stevekane/promise-it-wont-hurt/pull/112/files#diff-28c50098627dafca9ab307b764bc6c52
            // you have to 'hack' your `exercises/throw_an_error/solution/solution.js` file to pass this step
            reject(error.message);
        }
    });
}

parsePromised(process.argv[2])
    .catch(console.log);

// parsePromised(process.argv[2])
//     .then(null, console.log);
