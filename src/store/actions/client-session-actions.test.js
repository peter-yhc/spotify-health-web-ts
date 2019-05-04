import configureStore from 'redux-mock-store';

import clientSessionActions from './client-session-actions';

const mockStore = configureStore();
const store = mockStore();

describe('heath indicator actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('display incoming health indicator', () => {
    store.dispatch(clientSessionActions.displayHealthIndicator({ area: 'area', textAwesome: 'good', textCrappy: 'bad' }));

    expect(store.getActions()).toEqual([{
      type: 'SHOW_HEALTH_INDICATOR',
      area: 'area',
      textAwesome: 'good',
      textCrappy: 'bad',
    }]);
  });
});
