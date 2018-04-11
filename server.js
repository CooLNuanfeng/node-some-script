const net = require('net');

const HOST = '127.0.0.1';
const PORT = '3000';

console.log('Server is running on port '+PORT);


var server = net.createServer(function(socket){
    var client = socket.remoteAddress + ':' + socket.remotePort;
    console.log('Contented to ' + client);

    socket.on('data',function(data){
        console.log('message from client: '+data.toString());
        socket.write('Hello client');
    });

    socket.on('end',function(){
        console.log('Client discontented.');
    });
});

server.listen(PORT,HOST);
