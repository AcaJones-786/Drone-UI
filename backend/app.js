const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3030;

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/drone-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', function (req, res) {
    res.send('ola');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
