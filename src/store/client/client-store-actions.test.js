import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import clientStoreActions from './client-store-actions';
import { ServerApi } from '../../api';

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

  test('retrieves health indicators', async () => {
    ServerApi.retrieveHealthIndicators.mockImplementation(async (param) => {
      expect(param).toEqual({ sessionId: '9999', passkey: '0000' });
      return [
        {
          indicator: '1',
          textAwesome: '2',
          textCrap: '3',
        },
      ];
    });

    await store.dispatch(clientStoreActions.retrieveHealthIndicators({
      sessionId: '9999',
      passkey: '0000',
    }));

    const action = store.getActions()[0];
    expect(action.type).toBe('SHOW_INDICATORS');
    expect(action.indicators[0].indicator).toBe('1');
    expect(action.indicators[0].textAwesome).toBe('2');
    expect(action.indicators[0].textCrap).toBe('3');
  });

  test('registers clients', async () => {
    ServerApi.registerClient.mockImplementation(async (sessionId) => {
      expect(sessionId).toEqual({ sessionId: '9999', username: 'bob' });
      return 'abcxyz';
    });

    await store.dispatch(clientStoreActions.registerClientToSession({
      sessionId: '9999',
      username: 'bob',
    }));

    const action = store.getActions()[0];
    expect(action.type).toBe('CLIENT_REGISTERED');
    expect(action.sessionId).toBe('9999');
    expect(action.passkey).toBe('abcxyz');
  });
});
