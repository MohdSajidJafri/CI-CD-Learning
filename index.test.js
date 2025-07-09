const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello, CI/CD World!'));

describe('GET /', () => {
  it('responds with Hello, CI/CD World!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, CI/CD World!');
  });
});
