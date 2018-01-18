import server from './app';
var socketio = require('socket.io');

let io;
export default function getIO() {
    if(io) return io;
    else {
        io = socketio(server);
        return io;
    }
}


