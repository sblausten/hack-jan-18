const messages = [];


export const receiveMessage = ({ sender: { id }, message: { mid, text }, timestamp }) => (state) => (
    Object.assign({}, state, { messages: [...state.messages, { sid: id, mid, text, timestamp, read: false }]})
);

export const markAsRead = (mid) => (state) => {
    const newMessages = Object.assign([],state.messages);
    const existingIndex = messages.findIndex(m => m.mid === mid);
    newMessages.splice(existingIndex, 1, Object.assign({}, messages[existingIndex], { read: true }));
    return Object.assign({}, state, {messages: newMessages});
};
