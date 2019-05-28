import { submitVoteToSocket } from '../../sockets/socket-io';
import { ServerApi } from '../../api';

const displayHealthIndicator = ({ indicator, textAwesome, textCrappy }) => ({
  type: 'SHOW_HEALTH_INDICATOR',
  indicator,
  textAwesome,
  textCrappy,
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

const retrieveHealthIndicators = () => async (dispatch) => {
  const indicators = await ServerApi.retrieveHealthIndicators();
  dispatch({
    type: 'SHOW_INDICATORS',
    indicators,
  });
};

export default {
  displayHealthIndicator,
  submitVote,
  retrieveHealthIndicators,
};
