const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const User = require('./models/user'); 
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/', async (req, res) => {
  try {
    let user = await User.findOne({ companyEmail: req.body.companyEmail });
    if (user) {
      return res.status(400).send('User already exists');
    }

    user = new User(req.body);
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).send({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error registering new user');
  }
});

module.exports = app;