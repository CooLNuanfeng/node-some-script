// way one
// var fs = require('fs');
// var writer = fs.createWriteStream('message.txt');

// writeOneMillionTimes(writer,'aa','utf8',function(){
// 	console.log('write 1000000 end');
// })

function writeOneMillionTimes(writer, data, encoding, callback) {
  var i = 1000000;
  write();
  function write() {
    var ok = true;
    do {
      i -= 1;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

//way two

var fs = require('fs');
var stream = require('stream');
var writer = new stream.Writable();

var ws = fs.createWriteStream('message.txt');

writer._write = function(chunk,encoding,callback){
	// console.log(chunk);
	ws.write(chunk);
	callback()
}
writeOneMillionTimes(writer,'bb','utf8',function(){
	console.log('write 1000000 end');
})



