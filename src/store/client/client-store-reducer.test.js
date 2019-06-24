import clientStoreReducer from './client-store-reducer';
import clientStoreActions from './client-store-actions';
import { ServerApi } from '../../api';

jest.mock('../../api');

describe('client session reducer test', () => {
  test('initial state', () => {
    expect(clientStoreReducer(undefined, {})).toEqual({
      session: {
        id: undefined,
        passkey: undefined,
      },
      cards: [],
      submissions: {},
      username: undefined,
    });
  });

  test('handle showing indicators', async () => {
    ServerApi.retrieveHealthIndicators.mockImplementation(() => ({
      name: 'some mock object here, doesnt matter',
    }));

    const dispatchSpy = jest.fn();
    const sessionId = '1';
    const passkey = '2';
    await (clientStoreActions.retrieveHealthIndicators({ sessionId, passkey })(dispatchSpy));

    expect(clientStoreReducer(undefined, dispatchSpy.mock.calls[0][0]).cards)
      .toEqual({
        name: 'some mock object here, doesnt matter',
      });
  });
});
