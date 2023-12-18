const assert = require('assert');
const request = require('supertest');
const app = require('./app.js');

describe('GET /', () => {
  it('should return a 200 status code', async () => {
    const response = await request(app).get('/');
    //expect(response.statusCode).toBe(200); // give error TypeError: app.address is not a function
    assert.strictEqual(response.status, 200);
  });
});
