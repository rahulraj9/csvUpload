// models/csvModel.js
const mongoose = require('mongoose');

const csvSchema = new mongoose.Schema({
  name: String, 
  data: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model('Csv', csvSchema);
