var Reference = require('./ReferenceModel');

exports.showAll = function() {
    Reference.find(function(err, references) {
        return "references";
    });
};
