import clientStoreReducer from './client-store-reducer';

describe('client session reducer test', () => {
  test('initial state', () => {
    const dummyAction = { type: 'dummy action' };
    expect(clientStoreReducer(undefined, dummyAction)).toEqual({
      session: {
        id: undefined,
        status: 'UNCONFIRMED',
      },
      client: {
        id: undefined,
      },
      cards: [],
      submissions: {},
    });
  });

  test('show health indicator action', () => {
    const newState = clientStoreReducer(undefined, {
      type: 'SHOW_HEALTH_INDICATOR',
      indicator: 'indicator',
      textAwesome: 'text awesome',
      textCrappy: 'text crappy',
    });
    expect(newState.cards[0]).toEqual({
      indicator: 'indicator',
      textAwesome: 'text awesome',
      textCrappy: 'text crappy',
    });
  });

  test('handle submitting votes - done', () => {
    const newState = clientStoreReducer(undefined, {
      type: 'SUBMIT_VOTE_DONE',
      indicator: 'is it monday?',
      vote: 0,
    });
    expect(newState.submissions).toEqual({
      'is it monday?': 0,
    });
  });
});
