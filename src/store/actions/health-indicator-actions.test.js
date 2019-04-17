import configureStore from 'redux-mock-store';

import actions from './health-indicator-actions';

const mockStore = configureStore();
const store = mockStore();

describe('heath indicator actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('submitting votes', () => {
    store.dispatch(actions.voteSubmitted('poke me', 5));

    expect(store.getActions()).toEqual([{
      type: 'VOTE_SUBMITTED',
      indicator: 'poke me',
      value: 5,
    }]);
  });
});
