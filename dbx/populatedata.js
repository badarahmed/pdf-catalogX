var mongoose = require('mongoose');
var pdfutils = require('pdfutils').pdfutils;
var fs = require('fs');

mongoose.connect('mongodb://localhost/pdfcatalogx');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

	var Reference = require('./ReferenceModel');

    fs.readdir('../public/pdf', function(err, files) {
        
        files.map(function(file) {
            
            // Generating tags
            var tags = [];
            pdfutils('../public/pdf/' + file, function(err, doc) {
                if (doc.title != null)
                {
                    if(doc.title.indexOf(',') > -1) {
                        tags = doc.title.split(',');
                    }
                    else if(doc.title.indexOf('،') > -1) {
                        tags = doc.title.split('،');
                    }
                    else {
                        if(doc.title != null) {
                            tags.push(doc.title);
                        }
                    }
                }

                if (tags != null) {
                    tags.map(function(tag, index) {
                        tags[index] = tag.trim();
                    });
                }

                var newReference = new Reference( { filename: file, tags: tags } );
   
                newReference.save( function (err, ref) {
                    if (err) return console.error(err);
                    console.log('Record saved to mongo. File: ' + file + '  Tags: ' + tags);
                });

            });
            

            // Generating thumbnails
            pdfutils('../public/pdf/' + file, function(err, doc) {
                doc[0].asPNG({maxWidth: 200, maxHeight: 300}).toFile('../public/img/' + file + '.png');
            });

        });
    });

});
