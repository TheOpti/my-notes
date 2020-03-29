import request from 'supertest';
import { REPSONSE_MESSAGES } from 'src/constants';
import { User } from 'src/models/user';
import app from '../../app';


describe('/register endpoint', () => {
  const userToCreate = { 
    login: 'user',
    email: 'foo@bar.com',
    password: 'baz123',
    repeatedPassword: 'baz123',
  }

  it('should return an error when no data is passed', async () => {
    const res = await request(app)
      .post('/register')
      .send({});

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual(REPSONSE_MESSAGES.INCORRECT_DATA);
  });

  it('should return 500 when there would be an error with database', async () => {
    jest.spyOn(User, 'findOne')
      .mockImplementationOnce(() => ({ 
        exec: () => Promise.reject('Error')
      }));

    const res = await request(app)
      .post('/register')
      .send(userToCreate);

    expect(res.statusCode).toEqual(500);
    expect(res.body.message).toEqual(REPSONSE_MESSAGES.SERVER_ERROR);
  });

  it('should return 409 and info that user already exists', async () => {
    jest.spyOn(User, 'findOne')
      .mockImplementationOnce(() => ({ 
        exec: () => Promise.resolve(userToCreate)
      }));

    const res = await request(app)
      .post('/register')
      .send(userToCreate);

    expect(res.statusCode).toEqual(409);
    expect(res.body.message).toEqual(REPSONSE_MESSAGES.USER_EXISTS);
  });

  it('should return another 409 when there will be attempt to save it in database', async () => {
    jest.spyOn(User, 'findOne')
      .mockImplementationOnce(() => ({
        exec: () => null
      }));

    jest.spyOn(User, 'create')
      .mockImplementationOnce(() => null);

    const res = await request(app)
      .post('/register')
      .send(userToCreate);

    expect(res.statusCode).toEqual(409);
    expect(res.body.message).toEqual(REPSONSE_MESSAGES.USER_EXISTS);
  });

  it('should return 200 when user would be successfully saved to database', async () => {
    jest.spyOn(User, 'findOne')
      .mockImplementationOnce(() => ({
        exec: () => null
      }));

    jest.spyOn(User, 'create')
      .mockImplementationOnce(() => userToCreate);

    const res = await request(app)
      .post('/register')
      .send(userToCreate);

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual(REPSONSE_MESSAGES.ACCOUNT_CREATED);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
