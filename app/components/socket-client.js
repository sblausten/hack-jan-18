

export default function create() {
    const socket = io.connect('http://localhost:8080');
    return {
        onMessage: (callback) => {
            socket.on('fo', callback);

        },
        sendMessage: (message) => {
            socket.emit('ft', message);
        },
    }
};