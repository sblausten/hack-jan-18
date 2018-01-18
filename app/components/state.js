const messages = [];


export const receiveMessage = ({ sender: { id }, message: { mid, text }, timestamp }) => (state) => (
    {
        ...state,
        messages: [...state.messages, { sid: id, mid, text, timestamp, read: false }]
    }
);

export const markAsRead = (mid) => (state) => {
    const newMessages = [...state.messages];
    const existingIndex = messages.findIndex(m => m.mid === mid);
    newMessages.splice(existingIndex, 1, { ...messages[existingIndex], read: true });
    return { ...state, messages: newMessages};
};
