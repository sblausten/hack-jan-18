

let onMessage;

export default function create() {
    console.log('create');
    const socket = io('http://localhost:8080');
    socket.on('fo', (data) => {
        onMessage(data)
    });

    return {
        onMessage: (callback) => {
            onMessage = callback;
        },
        sendMessage: (message) => {
            socket.emit('ft', message);
        },
    }
};