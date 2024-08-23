const express = require('express');
const router = express.Router();
const { createNote, readNotes, readNote, updateNote, deleteNote } = require('../services/noteService');

router.post('/', async (req, res) => {
  try {
    const note = req.body;
    const newNote = await createNote(note);
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create note' });
  }
});

router.get('/', async (req, res) => {
  try {
    const notes = await readNotes();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to read notes' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const note = await readNote(id);
    res.json(note);
  } catch (error) {
    res.status(404).json({ message: 'Note not found' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const note = req.body;
    const updatedNote = await updateNote(id, note);
    res.json(updatedNote);
  } catch (error) {
    res.status(404).json({ message: 'Note not found' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await deleteNote(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: 'Note not found' });
  }
});

module.exports = router;