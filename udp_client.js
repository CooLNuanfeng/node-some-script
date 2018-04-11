#!/usr/bin/env node

var dgram = require('dgram');

var host = process.argv[2];
var port = parseInt(process.argv[3],10);

var client = dgram.createSocket('udp4');

process.stdin.on('data',function(chunk){
    client.send(chunk,0,chunk.length,port,host,function(){

    });
});

client.on('message',function(msg){
    console.log(msg.toString());
});

console.log('Start typing to send message to %s:%s',host,port);
