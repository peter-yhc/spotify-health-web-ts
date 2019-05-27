import { submitVoteToSocket } from '../../sockets/socket-io';

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

export default {
  displayHealthIndicator,
  submitVote,
};
