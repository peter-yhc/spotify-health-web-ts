import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import clientStoreActions from './client-store-actions';
import { ServerApi, SocketApi } from '../../api';

const mockStore = configureStore([thunk]);
const store = mockStore({
  clientStoreReducer: {
    client: { id: '' },
    session: { id: '' },
  },
});

jest.mock('../../api');

describe('heath indicator actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('submit vote', async () => {
    await store.dispatch(clientStoreActions.submitVote({ indicator: 'making sense?', vote: 400 }));

    expect(store.getActions()[0]).toEqual({
      type: 'SUBMIT_VOTE_DONE',
      indicator: 'making sense?',
      vote: 400,
    });
  });

  test('retrieves health indicators', async () => {
    ServerApi.retrieveHealthIndicators.mockImplementation(async (param) => {
      expect(param).toBe('066161150');
      return [
        {
          indicator: '1',
          textAwesome: '2',
          textCrap: '3',
        },
      ];
    });

    await store.dispatch(clientStoreActions.retrieveHealthIndicators('066161150'));

    const action = store.getActions()[0];
    expect(action.type).toBe('SHOW_INDICATORS');
    expect(action.indicators[0].indicator).toBe('1');
    expect(action.indicators[0].textAwesome).toBe('2');
    expect(action.indicators[0].textCrap).toBe('3');
  });

  test('registers clients', async () => {
    ServerApi.registerClient.mockImplementation(async (sessionId) => {
      expect(sessionId).toBe('155239283');
      return ({ id: 'some client id' });
    });

    await store.dispatch(clientStoreActions.registerClientToSession('155239283'));

    const action = store.getActions()[0];
    expect(action.type).toBe('CLIENT_REGISTERED');
    expect(action.sessionId).toBe('155239283');
    expect(action.clientId).toBe('some client id');
  });
});
