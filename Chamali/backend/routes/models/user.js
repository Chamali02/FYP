
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  companyName: { type: String, required: true},
  companyEmail: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  password: { type: String, required: true },
  numberOfEmployees: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
