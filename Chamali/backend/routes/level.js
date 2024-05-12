const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const User = require('./models/user'); 


const SustainabilityLevelSchema = new Schema({
  userid: String,
  rate: Number
});
const SustainabilityLevel = mongoose.model('SustainabilityLevel', SustainabilityLevelSchema, 'sustainability_level');


const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  companyName: String
});

const app = express();


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
app.get('/', async (req, res) => {
    try {
      
      const topLevels = await SustainabilityLevel.find().sort({ rate: -1 }).limit(5);
  
      console.log(topLevels);
   
      const userPromises = topLevels.map(level => User.findOne({ _id: level.userid }).select('companyName -_id'));
      const users = await Promise.all(userPromises);
      console.log(userPromises);


      const response = users.map((user, index) => ({
        companyName: user ? user.companyName : "Not found",
        rate: topLevels[index].rate
      }));
  
      res.json(response);
    } catch (error) {
      console.error('Error fetching company data:', error);
      res.status(500).json({ message: 'Failed to fetch company data', error });
    }
  });

module.exports = app;
