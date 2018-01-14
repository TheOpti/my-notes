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
      reminder: note.reminder,
      deleted: false
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


  async updateNote(note, userId) {
    const foundNote = await Note.findOne({
      where: { id: note.id, userId }
    });


    if (foundNote) {
      const isUpdated = await foundNote.updateAttributes({
        title: note.title,
        post: note.post,
        type: note.type,
        reminder: note.reminder,
        updatedAt: new Date(),
      });

      if (isUpdated) {
        return {
          status: 'OK',
          msg: 'Note updated.'
        };
      } else {
        return {
          status: 'ERROR',
          msg: 'Error during updating note.'
        };
      }
    } else {
      return {
        status: 'ERROR',
        msg: 'Error during updating note.'
      }
    }
  }


  async deleteNote(noteId, userId) {
    const foundNote = await Note.findOne({
      where: { id: noteId, userId }
    });

    if (foundNote) {
      const isDeleted = await foundNote.updateAttributes({ deleted: true });

      if (isDeleted) {
        return {
          status: 'OK',
          msg: 'Note deleted.'
        };
      } else {
        return {
          status: 'ERROR',
          msg: 'Error during deleting note.'
        };
      }
    } else {
      return {
        status: 'ERROR',
        msg: 'Error during deleting note.'
      }
    }
  }

}

export default new NotesService();
