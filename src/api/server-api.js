import axios from 'axios';

const HOSTNAME = window.location.hostname
const PORT = window.location.port ? `:${+window.location.port + 1}` : '';

const createSession = async () => {
  try {
    const sessionId = (await axios({
      method: 'POST',
      url: `http://${HOSTNAME}${PORT}/creator/new`,
      data: {
        name: Math.random().toString(36).slice(2),
      },
    })).data.id;

    await axios({
      method: 'POST',
      url: `http://${HOSTNAME}${PORT}/creator/${sessionId}/done`,
    });

    return sessionId;
  } catch (err) {
    // TODO: handle
    console.log(err);
    throw err;
  }
};

const retrieveHealthIndicators = async (sessionId) => {
  return (await axios.get(`http://${HOSTNAME}${PORT}/sessions/${sessionId}`)).data.indicators;
};

const registerClient = async (sessionId) => {
  const response = await axios({
    method: 'PUT',
    url: `http://${HOSTNAME}${PORT}/sessions/${sessionId}/participants`,
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
