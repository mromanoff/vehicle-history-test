const fetchMock = require('fetch-mock');

import request from './request';

describe('can fetch photos', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('can fetch photos', async () => {
    fetchMock.get('http://fake.com', { picture: 'world' });
    const response = await request.fetchPhotos('http://fake.com');
    expect(response.picture).toEqual('world');
  });

  it('handles errors', async () => {
    fetchMock.get('http://bad.url', {
        status: 400,
        body: JSON.stringify('bad data'),
        throws: true
      })
      .catch(error => {
        return new Error(error);
      });

    const response = await request.fetchPhotos('http://fake.com');

    expect((response) => drinkFlavor('octopus')).toThrow();
  });
});
