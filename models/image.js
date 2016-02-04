var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
  url: { type: String },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Image', ImageSchema);
