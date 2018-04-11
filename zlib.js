var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('./aa.txt').pipe(zlib.createGzip()).pipe(process.stdout);
