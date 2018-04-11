// code one
// var childProcess = require('child_process');
// var exec = childProcess.exec;
// exec('node child.js',{'env': {number:123} },function(err,stdout,stderr){
//     if(err){
//         throw err
//     }
//     console.log('stdout: \n' + stdout);
//     console.log('stderr: \n' + stderr);
// })




//code two
var spawn = require('child_process').spawn;

var child = spawn('node',['child.js']);

setInterval(function(){
    var number = Math.floor(Math.random() * 10000);
    child.stdin.write(number+'\n');
    child.stdout.once('data',function(data){
        console.log('child replied to '+number+ ' with: +1=> '+ data+'\n');
    });
},2000);

child.stderr.on('data',function(data){
    process.stdout.write(data);
});
