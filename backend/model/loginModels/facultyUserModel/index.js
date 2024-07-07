const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['student', 'faculty', 'staff'] }
});

const facultyUser = mongoose.models.facultyUser || mongoose.model('facultyUser', userSchema, 'faculty');

module.exports = facultyUser;
