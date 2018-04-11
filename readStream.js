// process.stdin.on('readable', function () {
//     var buf = process.stdin.read(3);
//     console.dir(buf);
//     process.stdin.read(0);
// });








// var Readable = require('stream').Readable;

// var rs = new Readable();
// // rs.push('beep ');
// // rs.push('boop \n');

// var c = 97-1;
// rs._read = function(){
// 	if(c > 'z'.charCodeAt(0)) rs.push(null);

// 	setTimeout(function(){
// 		rs.push(String.fromCharCode(++c));
// 	},100);
// };

// rs.pipe(process.stdout);

// process.on('exit',function(){
// 	console.error('\n_read() called ' + (c - 97) + ' times');
// });

// process.stdout.on('error',process.exit);









process.stdin.on('readable',function(){
	var buf = process.stdin.read();
	console.dir(buf);
	process.stdin.read(0);
});



