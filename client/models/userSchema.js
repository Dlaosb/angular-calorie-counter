let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let userSchema = new Schema({
	username: {type: String, require: true, unique: true},
	password: {type: String, require: true}
})


module.exports =  mongoose.model('User', userSchema);
 