var fs = require('fs');
var http = require('http');
var ws = fs.createWriteStream('./log/test.txt');
var util = require('util');

http.createServer(function(req,res){
    // console.log(req);
    if(req.url !== '/favicon.ico'){
        ws.write(req.method + ' ' + req.url+'\n');
        ws.write(util.inspect(req.headers) +'\n');
    }
    res.end('hello');
}).listen(4000);
