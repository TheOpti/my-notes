import request from 'supertest';
import { REPSONSE_MESSAGES } from '../../constant';
import { User } from '../../models/user';
import app from '../../app';


describe.only('/login endpoint', () => {
  it('should return an error when no data is passed', async () => {
    const res = await request(app)
      .post('/login')
      .send({ });

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual(REPSONSE_MESSAGES.LOGIN_PASS_INCORRECT);
  });

  it.only('should return 404 when no user is found', async () => {
    jest.spyOn(User, 'findOne')
      .mockImplementationOnce(() => ({
        exec: () => Promise.resolve(null)
      }));

    const res = await request(app)
      .post('/login')
      .send({ login: 'non-existing', password: 'foo' });

    expect(res.statusCode).toEqual(404);
    expect(res.body.message).toEqual(REPSONSE_MESSAGES.NO_USER_WITH_LOGIN);
  });


  afterEach(() => {
    jest.restoreAllMocks();
  });
});
