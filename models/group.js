var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var GroupSchema = new Schema({
  users: [{ type: mongoose.Schema.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Group', GroupSchema);
