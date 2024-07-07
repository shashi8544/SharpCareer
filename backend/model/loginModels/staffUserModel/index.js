const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['student', 'faculty', 'staff'] }
});

const staffUser = mongoose.models.staffUser || mongoose.model('staffUser', userSchema, 'staff');

module.exports = staffUser;
