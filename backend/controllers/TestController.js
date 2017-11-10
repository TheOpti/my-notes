
import express from 'express';

const api = express.Router();

class TestController {

  getHelloWorld(req, res) {
    res.send('GET Hello World');
  }

  getFoo(req, res) {
    res.send('GET Foo');
  }

  getBar(req, res) {
    res.send('GET Bar');
  }

}

const ctrl = new TestController();

api.get('/', ctrl.getHelloWorld);
api.get('/foo', ctrl.getFoo);
api.get('/foo', ctrl.getBar);

export default api;
