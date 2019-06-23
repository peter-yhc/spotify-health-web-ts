import axios from 'axios';
import ServerApi from './server-api';

jest.mock('axios');

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

  test('can register a new client', async () => {
    axios.mockImplementation((params) => {
      expect(params.method).toBe('PUT');
      expect(params.url).toContain('sessions/bleh/participants');
      expect(params.data.id).toBe('client id');
      expect(params.data.name).toBe('client name');
      return { data: 'stub' };
    });

    await ServerApi.registerClient({ sessionId: 'bleh', clientId: 'client id', clientUsername: 'client name' });
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
