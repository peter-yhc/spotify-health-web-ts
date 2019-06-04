import axios from 'axios';

const createSession = async () => {
  try {
    const sessionId = (await axios({
      method: 'POST',
      url: `http://${window.location.hostname}:${3001}/creator/new`,
      data: {
        name: Math.random().toString(36).slice(2),
      },
    })).data.id;

    await axios({
      method: 'POST',
      url: `http://${window.location.hostname}:${3001}/creator/${sessionId}/done`,
    });

    return `http://${window.location.hostname}:${window.location.port}/clients?session=${sessionId}`;
  } catch (err) {
    // TODO: handle
    console.log(err);
    throw err;
  }
};

const retrieveHealthIndicators = async (sessionId) => {
  return (await axios.get(`http://${window.location.hostname}:${3001}/sessions/${sessionId}`)).data.indicators;
};

const registerClient = async (sessionId) => {
  const response = await axios({
    method: 'PUT',
    url: `http://${window.location.hostname}:${3001}/sessions/${sessionId}/participants`,
    data: {
      name: Math.random().toString(36).slice(2),
    },
  });
  return response.data;
};

export default {
  createSession,
  registerClient,
  retrieveHealthIndicators,
};
