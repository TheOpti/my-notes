import Note from '../Models/Note';
import uuidv1 from 'uuid/v1';

class NotesService {

  async getNotes(userId) {
    const userNotes = await Note.findAll({
      where: { userId }
    }) || [];

    return {
      status: 'OK',
      notes: userNotes
    };
  }

  async addNote(userId, note = { post: '' }) {
    const addedNote = await Note.create({
      id: uuidv1(),
      userId: userId,
      post: note.post,
      title: note.title,
      type: note.type,
      reminder: note.reminder
    });

    if (addedNote) {
      return {
        status: 'OK',
        msg: 'Note created successfully.'
      };
    } else {
      return {
        status: 'ERROR',
        msg: 'Error during adding new note.'
      };
    }
  }


}

export default new NotesService();
