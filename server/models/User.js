const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    role: {
      type: String,
      enum: ['student', 'organizer', 'department_coordinator', 'student_affairs'],
      default: 'student',
    },
    department: {
      type: String,
      trim: true,
    },
    followedCategories: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);