import io from 'socket.io-client';

let socket;

const initSocket = (sessionId) => {
  socket = io(`:3001/sessions/${sessionId}`);
};

const submitVote = (session, client, { indicator, vote }) => {
  socket.emit('vote placed', { session, client, indicator, vote });
};

const registerHook = (name, func) => {
  socket.on(name, func);
};

export default {
  initSocket,
  submitVote,
  registerHook,
};
