import axios from 'axios';
import io from 'socket.io-client';
import ServerApi from './server-api';

jest.mock('axios');
jest.mock('socket.io-client');

describe('Server API tests', () => {
  test('can create new sessions', async (done) => {
    axios
      .mockImplementationOnce((params) => {
        expect(params.method).toBe('POST');
        expect(params.data.name).toBeTruthy();
        expect(params.url).toContain('/creator/new');
        return ({ data: { id: '199191' } });
      })
      .mockImplementationOnce((params) => {
        expect(params.method).toBe('POST');
        expect(params.url).toContain('/creator/199191/done');
        done();
      });

    await ServerApi.createSession();
  });

  test('can open new socket after session created', async (done) => {
    axios.mockImplementation(async () => ({ data: { id: 'sbndfgjkg' } }));

    io.mockImplementation((params) => {
      expect(params).toBe(':3000/sessions/sbndfgjkg');
      done();
    });

    await ServerApi.createSession();
  });
});
