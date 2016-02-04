var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Image = require('./image');

var UserSchema = new Schema({
  username: { type: String },
  image: [Image.schema]
});

UserSchema.methods.greet = function() {
  return 'Hello, ' + this.username;
};

module.exports = mongoose.model('User', UserSchema);
