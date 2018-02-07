import Note from '../Models/Note';
import Tag from '../Models/Tag';
import uuidv1 from 'uuid/v1';

class noteRepository {

  async getNotes(userId) {
    const userNotes = await Note.findAll({
        where: { userId, deleted: false }
      }) || [];

    if (!userNotes) {
      throw 'Error during getting notes from DB';
    }

    return userNotes;
  }


  async addNote(userId, note) {
    const addedNote = await Note.create({
      id: uuidv1(),
      userId: userId,
      post: note.post,
      title: note.title,
      type: note.type,
      color: note.color,
      reminder: note.reminder,
      deleted: false
    });

    if (note.tags) {
      const tagsIds = note.tags.map(tag => tag.id);
      await addedNote.addTags(tagsIds);
    }

    if (!addedNote) {
      throw 'Error during putting new note into DB!';
    }

    const addedNoteWithTags = await Note.findOne({
      where: { id: addedNote.id },
      include: [{
        model: Tag,
        attributes: ['id', 'name'],
        through: { attributes: [] }
      }]
    });

    return addedNoteWithTags;
  }


  async updateNote(userId, note) {
    const updatedNote = await Note.update({
      post: note.post,
      title: note.title,
      type: note.type,
      color: note.color,
      reminder: note.reminder,
      updatedAt: new Date(),
    }, {
      where: { id: note.id, userId }
    });

    if (!updatedNote) {
      throw 'Error during updating note!';
    }

    return updatedNote;
  }


  async deleteNote(noteId, userId) {
    const foundNote = await Note.findOne({
      where: { id: noteId, userId }
    });

    if (!foundNote) {
      throw 'No note found for given user!';
    }

    const isDeleted = await foundNote.updateAttributes({ deleted: true });

    if (!isDeleted) {
      throw 'Error during deleting note!';
    }

    return true;
  }

}

export default new noteRepository();
