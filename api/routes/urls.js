const express = require('express');
const router = express.Router();

const URL = require('../models/Url');
const ValidateURLInput = require('../validations/urlValidation');
const generateShortUrl = require('../utils/generateShortUrl');

// @route  GET api/urls/test
// @desc   Test URL Route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'API Up' }));

// @route  POST api/urls/create
// @desc   create a short url Route
// @access Public
router.post('/create', (req, res) => {
  const { errors, isValid } = ValidateURLInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { longUrl } = req.body;
  const shortUrl = generateShortUrl(longUrl);

  const newURL = new URL({
    longUrl,
    shortUrl
  });
  newURL.save().then(url => res.json(url));
});

module.exports = router;
