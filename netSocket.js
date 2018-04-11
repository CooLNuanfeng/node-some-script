var net = require('net');

var server = net.createServer();

var sockets = [];

server.listen(40001);
server.on('connection',function(socket){
    console.log('new connection add: '+socket);

    //保存所有的 客户端链接
    sockets.push(socket);

    //监听来自链接的 数据
    socket.on('data',function(data){
        console.log('form client data: '+data);

        // 向每个客户端发送 server 端得到的数据
        sockets.forEach(function(client){
            if(client !== socket){ // 去掉 客户端自身
                client.write(data);
            }
        });
    });

    socket.on('close',function(){
        console.log('client exit');
        var index = sockets.indexOf(socket);
        sockets.splice(index,1);
    });

});

server.on('error',function(err){
    console.log('server error: '+err.message);
});

server.on('close',function(){
    console.log('server closed.');
});
