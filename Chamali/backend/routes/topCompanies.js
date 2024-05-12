const express = require('express');
const mongoose = require('mongoose');
const app = express();


const Sustainability = mongoose.model('Sustainability', new mongoose.Schema({
  id: String,
  rate: Number,
  companyName: String
}, { collection: 'sustainability_level' })); 

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', async (req, res) => {
  try {
    const topCompanies = await Sustainability.find()
      .sort({ rate: -1 }) 
      .limit(5)            
      .select({ companyName: 1, rate: 1, _id: 0 }); 

    res.json(topCompanies);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the top companies.');
  }
});

module.exports = app;