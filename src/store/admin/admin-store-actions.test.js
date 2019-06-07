import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from './admin-store-actions';
import { ServerApi, SocketApi } from '../../api';

jest.mock('../../api');

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('heath indicator actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('submitting votes', () => {
    store.dispatch(actions.voteSubmitted({
      indicator: 'how are you feeling?',
      value: 'happy',
      client: 'anon123',
    }));

    expect(store.getActions()).toEqual([{
      type: 'VOTE_SUBMITTED',
      indicator: 'how are you feeling?',
      value: 'happy',
      client: 'anon123',
    }]);
  });

  test('registering session', async () => {
    ServerApi.createSession.mockImplementation(async () => 'id id');
    await store.dispatch(actions.registerSession());

    expect(SocketApi.initSocket).toBeCalledWith('id id');
    expect(store.getActions()).toEqual([{
      type: 'SESSION_REGISTERED',
      link: 'http://localhost:/clients?session=id id',
      id: 'id id',
    }]);
  });
});
