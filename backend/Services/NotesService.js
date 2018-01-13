import Note from '../Models/Note';

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

}

export default new NotesService();
