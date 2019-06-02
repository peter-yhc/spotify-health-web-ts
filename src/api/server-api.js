import io from 'socket.io-client';
import axios from 'axios';
import stub from '../heath-indicators/health-indicators-stub';

// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let socket;

const connectSocket = async () => {
  socket = await io(':3000');
  console.log('Socket Connected');
};

const createSession = async () => {
  let response;
  try {
    console.log('creating session');
    response = await axios({
      method: 'POST',
      headers: { 'Access-Control-Allow-Origin': '*' },
      url: 'http://localhost:3000/creator/new',
      data: {
        name: 'Session 1212',
      },
    });
    console.log(response);
    await connectSocket();
  } catch (err) {
    console.log(response);
    console.log(err);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`http://${window.location.hostname}:${window.location.port}/clients?session=${Math.floor(Math.random() * 10000000000)}`);
    }, 2000);
  });
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
  retrieveHealthIndicators,
  registerClient,
};
