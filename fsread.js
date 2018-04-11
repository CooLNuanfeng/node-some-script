var fs = require('fs');

fs.open('copy.txt','r',function(err,fd){
    if(err){
        throw err;
    }
    var readBuffer = new Buffer(100);
    bufferOffset = 10;
    bufferLength = readBuffer.length-10;
    filePosition = 25;
    fs.read(fd,readBuffer,bufferOffset,bufferLength,filePosition,function(err,readBtye){
        if(err){
            throw err
        }
        console.log('just read '+readBtye+ ' btyes');
        if(readBtye > 0){
            // console.log(readBuffer.slice(0,readBtye));
            console.log(readBuffer.toString());
        }
    });
});
