import adminStoreReducer from './admin-store-reducer';
import adminStoreActions from './admin-store-actions';
import { ServerApi } from '../../api';

jest.mock('../../api');

describe('health indicator reducer', () => {
  test('initial state', () => {
    const action = { type: 'dummy action' };

    expect(adminStoreReducer(undefined, action)).toEqual({
      indicatorVotes: {},
      session: {
        id: undefined,
        link: 'Retrieving...',
      },
    });
  });

  test('vote submitted', () => {
    const action = adminStoreActions.voteSubmitted({ indicator: 'indicate here', value: 'happy', username: 'user123' });

    expect(adminStoreReducer(undefined, action).indicatorVotes).toEqual({
      'indicate here': {
        indicator: 'indicate here',
        unhappyVotes: 0,
        neutralVotes: 0,
        happyVotes: 1,
      },
    });
  });

  test('session registered', async () => {
    const dispatchSpy = jest.fn();
    ServerApi.createSession.mockImplementation(async () => 'session id');

    await (adminStoreActions.registerSession()(dispatchSpy));
    const reducerAction = dispatchSpy.mock.calls[0][0];

    expect(adminStoreReducer(undefined, reducerAction)).toEqual({
      indicatorVotes: {},
      session: {
        id: 'session id',
        link: 'http://localhost:/clients?session=session id',
      },
    });
  });
});
