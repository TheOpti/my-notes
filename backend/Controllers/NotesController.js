import express from 'express';
import NotesService from '../Services/NotesService';

const api = express.Router();

class NotesController {

  async getNotes(req, res) {
     const userId = req.decoded.userId;

     const response = await NotesService.getNotes(userId);
     const statusCode = response.status === 'OK' ? 200 : 400;

     res.status(statusCode);
     res.send(response);
  }

  addNewNote(req, res) {
    res.send('POST addNewNote');
  }

  updateNote(req, res) {
    res.send('PUT updateNote');
  }

  deleteNote(req, res) {
    res.send('DELETE deleteNote');
  }

}

const ctrl = new NotesController();

api.get('/notes', ctrl.getNotes);
api.post('/notes', ctrl.addNewNote);
api.put('/notes', ctrl.updateNote);
api.delete('/notes', ctrl.deleteNote);

export default api;
