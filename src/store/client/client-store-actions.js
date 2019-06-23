import { ServerApi, SocketApi } from '../../api';
import UserCache from '../../client/mixin/user-cache';

// clientId could be undefined if it is a first time registration.
// Server will generate ID if this occurs
const registerClientToSession = ({ sessionId, clientId, clientName }) => async (dispatch) => {
  const client = await ServerApi.registerClient({ sessionId, clientId, clientName });
  SocketApi.initSocket(sessionId);
  const acc = UserCache.getAccountDetails();
  acc.id = client.id;
  UserCache.setAccountDetails(acc);
  dispatch({
    type: 'CLIENT_REGISTERED',
    sessionId,
    clientId: client.id,
    clientName: client.name,
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
