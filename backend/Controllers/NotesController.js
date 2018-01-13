
import express from 'express';

const api = express.Router();

class NotesController {

  getNotes(req, res) {
    res.send('GET getNotes');
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
