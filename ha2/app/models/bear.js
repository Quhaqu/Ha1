var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TodoSchema   = new Schema({
	todo: String,
    deadline: Date,
    done: Number
});

module.exports = mongoose.model('Todo', TodoSchema);