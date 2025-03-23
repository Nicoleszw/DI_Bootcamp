const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>Welcome to the Homepage!</h1>');
});

router.get('/about', (req, res) => {
  res.send('<h1>About Us Page</h1>');
});

module.exports = router;

