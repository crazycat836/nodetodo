//define model=================
var mongoose = require('mongoose'); // mongoose for mongodb

module.exports = mongoose.model('Todo', {
    text : String,
    done : Boolean
});