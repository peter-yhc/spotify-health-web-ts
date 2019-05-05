import clientSessionReducer from './client-session-reducer';

jest.mock('../actions/client-session-actions')

describe('client session reducer test', () => {
  test('initial state', () => {
    const dummyAction = { type: 'dummy action' };
    expect(clientSessionReducer(undefined, dummyAction)).toEqual({
      session: '',
      cards: [],
      submissions: [],
    });
  });

  test('show health indicator action', () => {
    const newState = clientSessionReducer(undefined, {
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
    const newState = clientSessionReducer(undefined, {
      type: 'SUBMIT_VOTE_DONE',
      indicator: 'is it monday?',
      vote: 0,
    });
    expect(newState.submissions).toEqual([{
      indicator: 'is it monday?',
      vote: 0,
    }]);
  });
});
