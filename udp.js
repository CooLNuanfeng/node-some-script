var dgram = require('dgram');
var port = 4000;
var server = dgram.createSocket('udp4');

server.on('message',function(msg,sinfo){
    console.log('server get message: '+ msg);
    var str = 'server: '+msg.toString();
    // 服务器 下发消息
    server.send(str,0,str.length,sinfo.port,sinfo.address,function(){
        console.log('sever send message to client success');
    });
});

server.on('listening',function(){
    var address = server.address();
    console.log(JSON.stringify(address));
    console.log('server listening on ' + address.address + ': ' + address.port);
});
server.bind(port);
