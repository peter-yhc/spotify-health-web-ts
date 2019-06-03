import io from 'socket.io-client';
import axios from 'axios';
import stub from '../heath-indicators/health-indicators-stub';

let socket;

const connectSocket = async (sessionId) => {
  socket = await io(`:3000/sessions/${sessionId}`);
};

const createSession = async () => {
  let response;
  try {
    response = await axios({
      method: 'POST',
      url: 'http://localhost:3000/creator/new',
      data: {
        name: Math.random().toString(36).slice(2),
      },
    });
    await connectSocket(response.data.id);
    return `http://${window.location.hostname}:${window.location.port}/clients?session=${response.data.id}`;
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
