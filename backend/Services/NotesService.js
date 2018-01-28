import NotesRepository from '../Repository/NoteRepository';

class NotesService {

  async getNotes(userId) {
    try {
      const notes = await NotesRepository.getNotes(userId);

      return { status: 'OK',  notes }
    } catch (error) {
      return { status: 'ERROR', msg: error }
    }
  }


  async addNote(userId, Note) {
    try {
      const addedNote = await NotesRepository.addNote(userId, Note);

      return { status: 'OK',  note: addedNote }
    } catch (error) {
      return { status: 'ERROR', msg: error }
    }
  }


  async updateNote(Note, userId) {
    try {
      const updatedNote = await NotesRepository.updateNote(userId, Note);

      return { status: 'OK',  updatedNote }
    } catch (error) {
      return { status: 'ERROR', msg: error }
    }
  }


  async deleteNote(NoteId, userId) {
    try {
      const deleted = await NotesRepository.deleteNote(NoteId, userId);

      return { status: 'OK', deleted }
    } catch (error) {
      return { status: 'ERROR', msg: error }
    }
  }

}

export default new NotesService();
