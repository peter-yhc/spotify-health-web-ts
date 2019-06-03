import { submitVoteToSocket } from '../../sockets/socket-io';
import { ServerApi } from '../../api';

const displayHealthIndicator = ({ indicator, textAwesome, textCrap }) => ({
  type: 'SHOW_HEALTH_INDICATOR',
  indicator,
  textAwesome,
  textCrap,
});

const submitVote = (session, { indicator, vote }) => async (dispatch) => {
  dispatch({
    type: 'SUBMIT_VOTE_START',
    indicator,
    vote,
  });
  await submitVoteToSocket(session, { indicator, vote });
  dispatch({
    type: 'SUBMIT_VOTE_DONE',
    indicator,
    vote,
  });
};

const registerClientToSession = sessionId => async (dispatch) => {
  const clientId = 'bleh';
  await ServerApi.registerClient(sessionId, clientId);
  dispatch({
    type: 'CLIENT_REGISTERED',
    sessionId,
    clientId,
  });
};

const retrieveHealthIndicators = sessionId => async (dispatch) => {
  // TODO: handle incorrect session ID
  const indicators = await ServerApi.retrieveHealthIndicators(sessionId);
  dispatch({
    type: 'SHOW_INDICATORS',
    indicators,
  });
};

export default {
  displayHealthIndicator,
  submitVote,
  registerClientToSession,
  retrieveHealthIndicators,
};
