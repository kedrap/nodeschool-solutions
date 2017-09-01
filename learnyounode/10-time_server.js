const net = require('net');
const strftime = require('strftime');

function now() {
    return strftime('%F %R', new Date());
}

let server = net.createServer(socket => {
    socket.end(now() + '\n');
});

server.listen(process.argv[2]);
