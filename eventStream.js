var es = require('event-stream');
var fs = require('fs');

es.merge([
    fs.createReadStream('input1.txt'),
    fs.createReadStream('input1.txt')
]).pipe(process.stdout);



/*
if(!module.parent) {
  var es = require('event-stream')
  var inspect = require('util').inspect


  // es.through(function write(data) {
  //   this.emit('data', data)
  //   //this.pause() 
  // },
  // function end () { //optional
  //   this.emit('end')
  // })
  
  process.stdin                        //connect streams together with `pipe`
    .pipe(es.split(' '))                  //split stream to break on newlines
    .pipe(es.map(function (data, cb) { //turn this async function into a stream
      cb(null
        , inspect(data))   //render it nicely
    }))
    .pipe(process.stdout)              // pipe it to stdout !
}
*/