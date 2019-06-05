import adminStoreReducer from './admin-store-reducer';
import adminStoreActions from './admin-store-actions';

describe('health indicator reducer', () => {
  test('initial state', () => {
    const action = { type: 'dummy action' };

    expect(adminStoreReducer(undefined, action)).toEqual({
      indicatorVotes: {},
    });
  });

  test('vote submitted', () => {
    const action = { type: 'VOTE_SUBMITTED', value: 'happy', indicator: 'indicate here', username: 'username' };

    expect(adminStoreReducer(undefined, action)).toEqual({
      indicatorVotes: {
        'indicate here': {
          indicator: 'indicate here',
          unhappyVotes: 0,
          neutralVotes: 0,
          happyVotes: 1,
        },
      },
    });
  });

  test('session registered', () => {
    const action = adminStoreActions.sessionRegistered({ link: 'http', id: 'for you' });

    expect(adminStoreReducer(undefined, action)).toEqual({
      indicatorVotes: {},
      session: {
        id: 'for you',
        link: 'http',
      },
    });
  });
});
