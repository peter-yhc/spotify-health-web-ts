import io from 'socket.io-client';
import axios from 'axios';

let socket;

const connectSocket = async (sessionId) => {
  socket = await io(`:3000/sessions/${sessionId}`);
};

const createSession = async () => {
  try {
    const sessionId = (await axios({
      method: 'POST',
      url: 'http://localhost:3000/creator/new',
      data: {
        name: Math.random().toString(36).slice(2),
      },
    })).data.id;

    await axios({
      method: 'POST',
      url: `http://localhost:3000/creator/${sessionId}/done`,
    });
    await connectSocket(sessionId);

    return `http://${window.location.hostname}:${window.location.port}/clients?session=${sessionId}`;
  } catch (err) {
    // TODO: handle
    console.log(err);
    throw err;
  }
};

const retrieveHealthIndicators = async (sessionId) => {
  return (await axios.get(`http://localhost:3000/sessions/${sessionId}`)).data.indicators;
};

const registerClient = async (sessionId) => {
  const response = await axios({
    method: 'PUT',
    url: `http://localhost:3000/sessions/${sessionId}/participants`,
    data: {
      name: Math.random().toString(36).slice(2),
    },
  });

  await connectSocket(sessionId);
  return response.data;
};

export default {
  createSession,
  registerClient,
  retrieveHealthIndicators,
};
