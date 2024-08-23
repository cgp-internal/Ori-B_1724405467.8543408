const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

let notes = [];

const csvWriter = createCsvWriter({
  path: 'notes.csv',
  header: [
    {id: 'id', title: 'ID'},
    {id: 'title', title: 'TITLE'},
    {id: 'content', title: 'CONTENT'}
  ]
});

fs.readFile('notes.csv', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  notes = data.trim().split('\n').map((row) => {
    const [id, title, content] = row.split(',');
    return {id: parseInt(id), title, content};
  });
});

function createNote(note) {
  notes.push(note);
  csvWriter.writeRecords([note]).then(() => {
    console.log(`Note with ID ${note.id} created successfully`);
  }).catch((err) => {
    console.error(err);
  });
}

function readNotes() {
  return notes;
}

function readNote(id) {
  return notes.find((note) => note.id === id);
}

function updateNote(id, note) {
  const index = notes.findIndex((n) => n.id === id);
  if (index !== -1) {
    notes[index] = note;
    fs.writeFile('notes.csv', notes.map((n) => `${n.id},${n.title},${n.content}`).join('\n'), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Note with ID ${id} updated successfully`);
      }
    });
  } else {
    console.log(`Note with ID ${id} not found`);
  }
}

function deleteNote(id) {
  const index = notes.findIndex((n) => n.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    fs.writeFile('notes.csv', notes.map((n) => `${n.id},${n.title},${n.content}`).join('\n'), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Note with ID ${id} deleted successfully`);
      }
    });
  } else {
    console.log(`Note with ID ${id} not found`);
  }
}

module.exports = { createNote, readNotes, readNote, updateNote, deleteNote };