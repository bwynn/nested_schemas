var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var GroupSchema = new Schema({
  users: [User.schema]
});

module.exports = mongoose.model('Group', GroupSchema);
