var tls = require('tls');
var fs = require('fs');
var port = 4001;
var host = '0.0.0.0';

var options = {
    key: fs.readFileSync('./ssl/client_key.pem'),
    cert: fs.readFileSync('./ssl/client_cert.pem')
};

process.stdin.resume();

var client = tls.connect(port,host,options,function(){
    console.log('connected');
    process.stdin.pipe(client,{end:false});
    client.pipe(process.stdout);
});
