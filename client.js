const net = require('net');

const HOST = '127.0.0.1';
const PORT = '3000';

var client = net.connect(PORT,HOST,function(){
    console.log('Contented to the server');
    client.write('Hello Server');
});

client.on('data',function(data){
    console.log('message from server: '+data.toString());
    client.end();
});

client.on('end',function(){
    console.log('Server discontented.');
});
