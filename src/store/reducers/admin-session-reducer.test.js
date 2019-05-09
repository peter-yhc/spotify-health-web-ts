import adminSessionReducer from './admin-session-reducer';

describe('health indicator reducer', () => {
  test('initial state', () => {
    const action = { type: 'dummy action' };

    expect(adminSessionReducer(undefined, action)).toEqual({
      indicatorVotes: {},
    });
  });

  test('vote submitted', () => {
    const action = { type: 'VOTE_SUBMITTED', value: 'happy', indicator: 'indicate here', username: 'username' };

    expect(adminSessionReducer(undefined, action)).toEqual({
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
});
