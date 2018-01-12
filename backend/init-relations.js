import initUserRelations from './Relations/UserRelations';
import initNoteRelations from './Relations/NoteRelations';
import initTagRelations from './Relations/TagRelations';

function initAllRelations() {
  initUserRelations();
  initNoteRelations();
  initTagRelations();
}

export default initAllRelations;

