import clientSessionReducer from './client-session-reducer';
import ClientSessionActions from '../actions/client-session-actions';

describe('client session reducer test', () => {
  test('initial state', () => {
    const dummyAction = { type: 'dummy action' };
    expect(clientSessionReducer(undefined, dummyAction)).toEqual({
      session: '',
      cards: [],
    });
  });

  test('show health indicator action', () => {
    const action = ClientSessionActions.displayHealthIndicator({ area: 'area', textAwesome: 'text awesome', textCrappy: 'text crappy' });
    expect(clientSessionReducer(undefined, action)).toEqual({
      session: '',
      cards: [{
        area: 'area',
        textAwesome: 'text awesome',
        textCrappy: 'text crappy',
      }],
    });
  });
});
