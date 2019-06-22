import { ServerApi, SocketApi } from '../../api';

const voteSubmitted = ({ indicator, value, client }) => ({
  type: 'VOTE_SUBMITTED',
  indicator,
  value,
  client,
});

const registerSession = () => async (dispatch) => {
  const { sessionId, indicators } = await ServerApi.createSession();
  SocketApi.initSocket(sessionId);

  dispatch({
    type: 'SESSION_REGISTERED',
    id: sessionId,
    indicators,
    link: `http://${window.location.hostname}:${window.location.port}/clients/welcome?session=${sessionId}`,
  });
};

const clientJoined = ({ id, name }) => ({
  type: 'CLIENT_JOINED',
  id,
  name,
});


export default {
  registerSession,
  voteSubmitted,
  clientJoined,
};
