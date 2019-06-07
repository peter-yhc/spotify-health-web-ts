import { ServerApi, SocketApi } from '../../api';

const voteSubmitted = ({ indicator, value, client }) => ({
  type: 'VOTE_SUBMITTED',
  indicator,
  value,
  client,
});

const registerSession = () => async (dispatch) => {
  const sessionId = await ServerApi.createSession();
  SocketApi.initSocket(sessionId);

  dispatch({
    type: 'SESSION_REGISTERED',
    id: sessionId,
    link: `http://${window.location.hostname}:${window.location.port}/clients?session=${sessionId}`,
  });
};

export default {
  registerSession,
  voteSubmitted,
};
