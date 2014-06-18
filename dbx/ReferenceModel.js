var mongoose = require('mongoose');

var referenceScheme = mongoose.Schema({
	filename: String,
	tags: [String]
});

var Reference = mongoose.model('Reference', referenceScheme);

module.exports = Reference;	
