
/*
 * GET home page.
 */

exports.index = function(req, res){

    var Reference = require('../dbx/ReferenceModel');
    Reference.find(function(err, refs) { 
        console.log(refs);
        
        var data = refs;
        var rows=[];
        var step=3; // This var controls number of columns in the layout grid

        for(var i=0; i<data.length ; i+=step){
            rows.push({ cells: data.slice(i, i+step) });
        }

        var dataObj = {};
        dataObj.rows = rows;

        res.render('index', { data: dataObj });
    });  

};
