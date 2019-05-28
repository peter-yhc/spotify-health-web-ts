import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import clientStoreActions from './client-store-actions';
import { ServerApi } from '../../api';

const mockStore = configureStore([thunk]);
const store = mockStore();

jest.mock('../../api');

describe('heath indicator actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('display incoming health indicator', () => {
    store.dispatch(clientStoreActions.displayHealthIndicator({ indicator: 'making sense?', textAwesome: 'good', textCrappy: 'bad' }));

    expect(store.getActions()).toEqual([{
      type: 'SHOW_HEALTH_INDICATOR',
      indicator: 'making sense?',
      textAwesome: 'good',
      textCrappy: 'bad',
    }]);
  });

  test('submit vote', async () => {
    await store.dispatch(clientStoreActions.submitVote('session id', { indicator: 'making sense?', vote: 400 }));

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

  test('retrieves health indicators', async () => {
    ServerApi.retrieveHealthIndicators.mockImplementation(async (param) => {
      expect(param).toBe('066161150');
      return [
        {
          indicator: '1',
          textAwesome: '2',
          textCrappy: '3',
        },
      ];
    });

    await store.dispatch(clientStoreActions.retrieveHealthIndicators('066161150'));

    const action = store.getActions()[0];
    expect(action.type).toBe('SHOW_INDICATORS');
    expect(action.indicators[0].indicator).toBe('1');
    expect(action.indicators[0].textAwesome).toBe('2');
    expect(action.indicators[0].textCrappy).toBe('3');
  });
});
