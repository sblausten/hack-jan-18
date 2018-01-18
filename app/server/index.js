import app from './app';
var socketio = require('socket.io');

const port = process.env.PORT || 8080;

const server = app.listen(port);

const io  = socketio(server);

io.on('connection',(socket)=>{
    console.log('connected - now push to client')
})
console.log(`Listening at http://localhost:${port}`);
