import request from 'supertest';
import { REPSONSE_MESSAGES } from '../../constant';
import { User } from '../../models/user';
import app from '../../app';


describe('/register endpoint', () => {
  it('should return an error when no data is passed', async () => {
    const res = await request(app)
      .post('/register')
      .send({});

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual(REPSONSE_MESSAGES.INCORRECT_DATA);
  });

  it('should return 500 when there would be an error with database', async () => {
    jest.spyOn(User, 'findOne')
      .mockImplementationOnce((data, fields, callback) => {
        callback(null, { error: 'error' })
      });

    const res = await request(app)
      .post('/login')
      .send({ login: 'non-existing', password: 'foo' });

    expect(res.statusCode).toEqual(500);
    expect(res.body.message).toEqual(REPSONSE_MESSAGES.SERVER_ERROR);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
