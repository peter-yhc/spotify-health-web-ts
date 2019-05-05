import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import clientSessionActions from './client-session-actions';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('heath indicator actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('display incoming health indicator', () => {
    store.dispatch(clientSessionActions.displayHealthIndicator({ indicator: 'making sense?', textAwesome: 'good', textCrappy: 'bad' }));

    expect(store.getActions()).toEqual([{
      type: 'SHOW_HEALTH_INDICATOR',
      indicator: 'making sense?',
      textAwesome: 'good',
      textCrappy: 'bad',
    }]);
  });

  test('submit vote', async () => {
    await store.dispatch(clientSessionActions.submitVote('session id', { indicator: 'making sense?', vote: 400 }));

    expect(store.getActions()[0]).toEqual({
      type: 'SUBMIT_VOTE_START',
      indicator: 'making sense?',
      vote: 400,
    });

    expect(store.getActions()[1]).toEqual({
      type: 'SUBMIT_VOTE_DONE',
      indicator: 'making sense?',
      vote: 400,
    });
  });
});
