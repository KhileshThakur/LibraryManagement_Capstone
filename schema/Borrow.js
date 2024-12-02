const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
  username: String,
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  dueDate: { type: Date, default: () => new Date(+new Date() + 15 * 24 * 60 * 60 * 1000) },
}, { timestamps: true });

module.exports = mongoose.model('Borrow', borrowSchema);
