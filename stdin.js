var fs = require('fs');
process.stdin.pipe(fs.WriteStream('copy.txt'));
