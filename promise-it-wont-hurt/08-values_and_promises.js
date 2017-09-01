'use strict';

function attachTitle(argument) {
    return 'DR. ' + argument;
}

Promise.resolve('MANHATTAN')
    // @README: have to do this in that way!!!
    .then(attachTitle)
    // .then((data) => {
    //     return attachTitle(data);
    // })
    .then(console.log);
