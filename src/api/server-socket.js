import io from 'socket.io-client';

let socket;

const getSocket = () => {
  if (!socket) {
    socket = io(':3001');
  }
  return socket;
};

const submitVote = async (session, client, { indicator, vote }) => {
  getSocket();
  console.log(JSON.stringify({ session, client, indicator, vote }));
  await socket.emit('vote_submitted', { session, client, indicator, vote });
};

export default {
  submitVote,
  getSocket,
};
