const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const urls = require('./routes/urls');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/urls', urls);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
