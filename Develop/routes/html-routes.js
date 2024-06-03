const router = require('express').Router();
const path = require('path');

// Handle GET requests to the root
router.get('/', (req, res) => {

  // Send the index.html file as a response
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

// Handle GET requests to /notes
router.get('/notes', (req, res) => {

  // Send notes.html as a response
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;