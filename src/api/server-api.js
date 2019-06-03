import io from 'socket.io-client';
import axios from 'axios';
import stub from '../heath-indicators/health-indicators-stub';

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
  console.log(`SessionId: ${sessionId}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(stub);
    }, 1000);
  });
};

const registerClient = async (sessionId, clientId) => {
  console.log(`Registering client: ${clientId} to session ${sessionId}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export default {
  createSession,
  registerClient,
  retrieveHealthIndicators,
};
