import { ServerApi, SocketApi } from '../../api';

const registerClientToSession = (sessionId: string, username: string) => {
  return async (dispatch: Function): Promise<void> => {
    const passkey = await ServerApi.registerClient(sessionId, username);
    SocketApi.initSocket(sessionId);

    dispatch({
      type: 'CLIENT_REGISTERED',
      sessionId,
      passkey,
    });
  };
};

const retrieveHealthIndicators = (sessionId: string, passkey: string) => {
  return async (dispatch: Function): Promise<void> => {
    const indicators = await ServerApi.retrieveHealthIndicators(sessionId, passkey);
    dispatch({
      type: 'SHOW_INDICATORS',
      indicators,
    });
  };
};

const setUsername = (username: string) => ({
  type: 'SET_USERNAME',
  username,
});

export default {
  registerClientToSession,
  retrieveHealthIndicators,
  setUsername,
};
