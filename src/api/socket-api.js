import io from 'socket.io-client';

let socket;

const initSocket = (sessionId) => {
  socket = io(`:3001/sessions/${sessionId}`);
};

export default {
  initSocket,
};

initSocket();
