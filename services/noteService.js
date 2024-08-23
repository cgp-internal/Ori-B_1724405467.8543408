const noteDataAccess = require('./dataAccess/noteDataAccess');

const createNote = async (note) => {
  return noteDataAccess.createNote(note);
}

const readNotes = async () => {
  return noteDataAccess.readNotes();
}

const readNote = async (id) => {
  return noteDataAccess.readNote(id);
}

const updateNote = async (id, note) => {
  return noteDataAccess.updateNote(id, note);
}

const deleteNote = async (id) => {
  return noteDataAccess.deleteNote(id);
}

module.exports = { createNote, readNotes, readNote, updateNote, deleteNote };