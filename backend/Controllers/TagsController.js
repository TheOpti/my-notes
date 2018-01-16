import express from 'express';
import TagsService from '../Services/TagsService';

const api = express.Router();

class TagsController {

  async getTags(req, res) {
    const userId = req.decoded.id;

    const response = await TagsService.getTags(userId);
    const statusCode = response.status === 'OK' ? 200 : 400;

    res.status(statusCode);
    res.send(response);
  }


  async addNewTag(req, res) {
    const userId = req.decoded.id;
    const tag = req.body.tag;

    const response = await TagsService.addTag(userId, tag);
    const statusCode = response.status === 'OK' ? 200 : 400;

    res.status(statusCode);
    res.send(response);
  }


  async updateTag(req, res) {
    const userId = req.decoded.id;
    const tag = req.body.tag;

    const response = await TagsService.updateTag(tag, userId);
    const statusCode = response.status === 'OK' ? 200 : 400;

    res.status(statusCode);
    res.send(response);
  }


  async deleteTag(req, res) {
    const userId = req.decoded.id;
    const tagId = req.params.id;

    const response = await TagsService.deleteTag(tagId, userId);
    const statusCode = response.status === 'OK' ? 200 : 400;

    res.status(statusCode);
    res.send(response);
  }

}

const ctrl = new TagsController();

api.get('/tag', ctrl.getTags);
api.post('/tag', ctrl.addNewTag);
api.put('/tag', ctrl.updateTag);
api.delete('/tag/:id', ctrl.deleteTag);

export default api;
