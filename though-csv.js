var fs = require('fs');
var csv2 = require('csv2');
var through2 = require('through2');

fs.createReadStream('./csv/data.csv')
.pipe(csv2())
// .pipe(through2.obj(function(chunk,enc,callback){
//     this.push({
//         'lead' : chunk[0],
//         'title' : chunk[1],
//         'phone' : chunk[2],
//         'note' : chunk[3]
//     });
//     callback();
// }))
.on('data',console.log);
