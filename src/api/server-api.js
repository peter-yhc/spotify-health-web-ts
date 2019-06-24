import axios from 'axios';

const HOSTNAME = window.location.hostname;
const PORT = window.location.port ? `:${+window.location.port + 1}` : '';

const createSession = async () => {
  const sessionId = (await axios({
    method: 'POST',
    url: `http://${HOSTNAME}${PORT}/creator/new`,
    data: {
      name: Math.random().toString(36).slice(2),
    },
  })).data.id;

  const response = await axios({
    method: 'POST',
    url: `http://${HOSTNAME}${PORT}/creator/${sessionId}/done`,
  });

  return {
    sessionId: response.data.id,
    indicators: response.data.indicators,
  };
};

const retrieveHealthIndicators = async ({ sessionId, passkey }) => {
  return (await axios.get(`http://${HOSTNAME}${PORT}/sessions/${sessionId}?passkey=${passkey}`)).data.indicators;
};

const getBrowserKey = () => {
  const browserkey = localStorage.getItem('shw.browserkey');
  if (browserkey) {
    return browserkey;
  }
  const randomString = Math.random().toString(36).slice(2);
  localStorage.setItem('shw.browserkey', randomString);
  return randomString;
};

const registerClient = async ({ sessionId, username }) => {
  const browserKey = getBrowserKey();
  const response = await axios({
    method: 'PUT',
    url: `http://${HOSTNAME}${PORT}/sessions/${sessionId}/participants`,
    data: {
      username,
      browserKey,
    },
  });
  return response.data.passkey;
};

export default {
  createSession,
  registerClient,
  retrieveHealthIndicators,
};
