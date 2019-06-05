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
      username: 'anon123',
    }));

    expect(store.getActions()).toEqual([{
      type: 'VOTE_SUBMITTED',
      indicator: 'how are you feeling?',
      value: 'happy',
      username: 'anon123',
    }]);
  });

  test('registering session', () => {
    ServerApi.registerClient.mockImplementation(async () => 'id id');
    store.dispatch(actions.registerSession());

    expect(store.getActions()).toEqual([{
      type: 'SESSION_REGISTERED',
      link: 'http bleh',
      id: 'id id',
    }]);
  });
});
