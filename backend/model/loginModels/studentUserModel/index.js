const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['student', 'faculty', 'staff'] }
});

const studentUser = mongoose.models.studentUser || mongoose.model('studentUser', userSchema, 'student');

module.exports = studentUser;
