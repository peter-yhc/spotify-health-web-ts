import configureStore from 'redux-mock-store';

import actions from './admin-session-actions';

const mockStore = configureStore();
const store = mockStore();

describe('heath indicator actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('submitting votes', () => {
    store.dispatch(actions.voteSubmitted({
      indicator: 'how are you feeling?',
      value: 'happy',
      username: 'anon123',
    }));

    expect(store.getActions()).toEqual([{
      type: 'VOTE_SUBMITTED',
      indicator: 'how are you feeling?',
      value: 'happy',
      username: 'anon123',
    }]);
  });
});
