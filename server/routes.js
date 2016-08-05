const express = require('express');
const router = express.Router();
const db = require('./db');
const Story = db.model('story');

router.get('/', function (req, res, next) {
  Story.findAll()
  .then(stories => res.json(stories))
  .catch(next);
});


module.exports = router;
