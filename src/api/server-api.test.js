import axios from 'axios';
import io from 'socket.io-client';
import ServerApi from './server-api';

jest.mock('axios');
jest.mock('socket.io-client');

describe('Server API tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

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

  test('can open new socket after session created', async () => {
    axios.mockImplementation(() => ({ data: { id: 'sbndfgjkg' } }));

    io.mockImplementation((params) => {
      expect(params).toBe(':3000/sessions/sbndfgjkg');
    });

    await ServerApi.createSession();
  });

  test('can register a new client', async () => {
    axios.mockImplementation((params) => {
      expect(params.method).toBe('PUT');
      expect(params.url).toContain('sessions/bleh/participants');
      expect(params.data.name).toBeTruthy();
      return ({ data: { id: 'client id', name: 'client name' } });
    });

    await ServerApi.registerClient('bleh');
  });

  test('can retrieve indicators', async () => {
    axios.get.mockImplementation((url) => {
      expect(url).toContain('sessions/bleh');
      return ({ data: { indicators: [1, 2] } });
    });

    const result = await ServerApi.retrieveHealthIndicators('bleh');
    expect(result).toEqual([1, 2]);
  });
});
