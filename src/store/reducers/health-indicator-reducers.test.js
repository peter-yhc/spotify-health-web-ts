import healthIndicatorReducer from './health-indicator-reducer';

describe('health indicator reducer', () => {
  test('initial state', () => {
    const action = { type: 'dummy action' };

    expect(healthIndicatorReducer(undefined, action)).toEqual({
      indicatorScores: {},
    });
  });

  test('vote submitted', () => {
    const action = { type: 'VOTE_SUBMITTED', value: 10, indicator: 'indicate here' };

    expect(healthIndicatorReducer(undefined, action)).toEqual({
      indicatorScores: {
        'indicate here': 10,
      },
    });
  });
});
