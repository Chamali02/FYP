require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/user'); 

const app = express();


app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


app.post('/', async (req, res) => {
  const { username, password } = req.body;


  const user = await User.findOne({ username }).select('+companyName'); // Include companyName

  if (!user) return res.status(400).send('Invalid username or password.');

 
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid username or password.');


  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

 
  res.json({ token, companyName: user.companyName });
});

module.exports = app;