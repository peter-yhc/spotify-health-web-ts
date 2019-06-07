import { ServerApi, SocketApi } from '../../api';


const registerClientToSession = sessionId => async (dispatch) => {
  const client = await ServerApi.registerClient(sessionId);
  SocketApi.initSocket(sessionId);
  dispatch({
    type: 'CLIENT_REGISTERED',
    sessionId,
    clientId: client.id,
  });
};

const retrieveHealthIndicators = sessionId => async (dispatch) => {
  const indicators = await ServerApi.retrieveHealthIndicators(sessionId);
  dispatch({
    type: 'SHOW_INDICATORS',
    indicators,
  });
};

export default {
  registerClientToSession,
  retrieveHealthIndicators,
};
