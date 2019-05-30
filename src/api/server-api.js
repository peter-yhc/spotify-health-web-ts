import stub from '../heath-indicators/health-indicators-stub';

const createSession = async () => {
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
