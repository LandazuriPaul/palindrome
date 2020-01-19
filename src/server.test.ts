import request from 'supertest';
import { server } from './server';

describe('Integration test with the server', () => {
  test('/', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
  });

  test('/api/submitEntry', async () => {
    const response = await request(server)
      .post('/api/submitEntry')
      .send({ name: 'bibi', word: 'bob' });
    expect(response.text).toBe(String(3));
  });

  test('/api/submitEntry', async () => {
    const response = await request(server)
      .post('/api/submitEntry')
      .send({ name: 'Ratatouille', word: 'I love to cook' });
    expect(response.text).toBe(String(0));
  });

  test('/api/submitEntry', async () => {
    const response = await request(server)
      .post('/api/submitEntry')
      .send({ name: 'Bertrand', word: '11 11 11' });
    expect(response.text).toBe(String(6));
  });

  test('/api/getScores', async () => {
    const response = await request(server).get('/api/getScores');
    expect(response.body).toMatchObject([
      {
        name: 'Bertrand',
        points: 6,
      },
      {
        name: 'bibi',
        points: 3,
      },
    ]);
  });
});
