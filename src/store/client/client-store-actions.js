import { ServerApi, SocketApi } from '../../api';

const registerClientToSession = ({ sessionId, username }) => async (dispatch) => {
  const passkey = await ServerApi.registerClient({ sessionId, username });
  SocketApi.initSocket(sessionId);

  dispatch({
    type: 'CLIENT_REGISTERED',
    sessionId,
    passkey,
  });
};

const retrieveHealthIndicators = ({ sessionId, passkey }) => async (dispatch) => {
  const indicators = await ServerApi.retrieveHealthIndicators({ sessionId, passkey });
  dispatch({
    type: 'SHOW_INDICATORS',
    indicators,
  });
};

const setUsername = username => ({
  type: 'SET_USERNAME',
  username,
});


export default {
  registerClientToSession,
  retrieveHealthIndicators,
  setUsername,
};
