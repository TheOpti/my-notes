import express from 'express';
import NotesService from '../Services/NotesService';
import authenticate from '../Authentication/Authentication';

const api = express.Router();

class NotesController {

  async getNotes(req, res) {
    const userId = req.decoded.id;

    const response = await NotesService.getNotes(userId);
    const statusCode = response.status === 'OK' ? 200 : 400;

    res.status(statusCode);
    res.send(response);
  }


  async addNewNote(req, res) {
    const userId = req.decoded.id;
    const note = req.body.note;

    const response = await NotesService.addNote(userId, note);
    const statusCode = response.status === 'OK' ? 200 : 400;

    res.status(statusCode);
    res.send(response);
  }


  async updateNote(req, res) {
    const userId = req.decoded.id;
    const note = req.body.note;

    const response = await NotesService.updateNote(note, userId);
    const statusCode = response.status === 'OK' ? 200 : 400;

    res.status(statusCode);
    res.send(response);
  }


  async deleteNote(req, res) {
    const userId = req.decoded.id;
    const noteId = req.params.id;

    const response = await NotesService.deleteNote(noteId, userId);
    const statusCode = response.status === 'OK' ? 200 : 400;

    res.status(statusCode);
    res.send(response);
  }

}

const ctrl = new NotesController();

api.get('/notes', authenticate, ctrl.getNotes);
api.post('/notes', authenticate, ctrl.addNewNote);
api.put('/notes', authenticate, ctrl.updateNote);
api.delete('/notes/:id', authenticate, ctrl.deleteNote);

export default api;
