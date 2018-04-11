var connect = require('connect');
var http = require('http');
var util = require('util');

var app = connect();


app.use(function(req,res){
    res.end(util.inspect(req.session));
});

http.createServer(app).listen(4000);
