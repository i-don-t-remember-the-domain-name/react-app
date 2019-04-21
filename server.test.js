const server = require('./server');
const request = require('supertest');

describe('server api', () => {
  describe('GET /api/hacker/:hacker', () => {
    it('returns the commentor information', () => {
      return request(server)
        .get('/api/hacker/austen')
        .expect(200);
    });
  });
});
