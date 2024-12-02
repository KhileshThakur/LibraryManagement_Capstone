const mongoose = require('mongoose');

const returnSchema = new mongoose.Schema({
  username: String,
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  dueDate: Date,
  fine: Number,
}, { timestamps: true });

module.exports = mongoose.model('Return', returnSchema);
