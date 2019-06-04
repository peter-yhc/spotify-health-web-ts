import io from 'socket.io-client';
import SocketApi from './socket-api';

jest.mock('socket.io-client');

describe('Socket API test', () => {
  test('can open new socket after session created', async () => {
    io.mockImplementation((params) => {
      expect(params).toBe(':3001/sessions/sbndfgjkg');
    });

    await SocketApi.initSocket('sbndfgjkg');
  });
});
