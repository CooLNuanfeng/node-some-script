var fs = require('fs');
var through2 = require('through2');

fs.createReadStream('aa.txt')
  .pipe(through2(function (chunk, enc, callback) {
    console.log(Buffer.isBuffer(chunk),'is buffer');
    console.log(Object.prototype.toString.call(chunk) );
    for (var i = 0; i < chunk.length; i++)
      if (chunk[i] == 97)
        chunk[i] = 122 // swap 'a' for 'z'

    var hello = 'hello\n';

    this.push(hello+chunk)

    callback()
   }))
  .pipe(fs.createWriteStream('out.txt'))
  .on('finish', function () {
    console.log('finish');
  })