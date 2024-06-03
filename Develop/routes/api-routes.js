const notes = require('express').Router();
const { readFromFile,readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET route for retrieving all notes
notes.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

// POST route for submitting new notes
notes.post('/notes', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  // If all required properties are present
  if(title && text) {
    // Variable for the new note
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json('New Note Created!');
  } else {
    res.error('Error in posting a new note');
  }
});

module.exports = notes;