import server from './app';
import { callSendAPI } from './handlers';
import getIO from './io';


const port = process.env.PORT || 8080;

server.listen(port);


let io = getIO();
io.on('connection',(socket)=>{
    console.log('connected - now puch to client')
});

io.on('connection',(socket)=>{
    console.log('connected - now push to client')
    socket.on('fo', ({text, recipient}) => callSendAPI(recipient, text));
});
console.log(`Listening at http://localhost:${port}`);
