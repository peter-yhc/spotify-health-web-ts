import clientStoreReducer from './client-store-reducer';
import clientStoreActions from './client-store-actions';
import { ServerApi } from '../../api';

jest.mock('../../api');

describe('client session reducer test', () => {
  test('initial state', () => {
    expect(clientStoreReducer(undefined, {})).toEqual({
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

  test('handle showing indicators', async () => {
    ServerApi.retrieveHealthIndicators.mockImplementation(() => ({
      name: 'some mock object here, doesnt matter',
    }));

    const dispatchSpy = jest.fn();
    await (clientStoreActions.retrieveHealthIndicators()(dispatchSpy));

    expect(clientStoreReducer(undefined, dispatchSpy.mock.calls[0][0]).cards)
      .toEqual({
        name: 'some mock object here, doesnt matter',
      });
  });
});
