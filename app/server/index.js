import app from './app';
import { Server } from 'http';
import socket from 'socket.io';

const http = Server(app);

const io = socket(http);

const port = process.env.PORT || 8080;

app.listen(port);

io.on('connection', function(socket){
    console.log('a user connected');
});

console.log(`Listening at http://localhost:${port}`);
