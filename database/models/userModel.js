const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

let User = mongoose.model('Alien', userSchema);
module.exports = User;