const mongoose = require('mongoose');

const csvSchema = new mongoose.Schema({
  data: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model('Csv', csvSchema);
