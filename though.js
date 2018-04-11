// var though = require('through');
//
// process.stdin.pipe(though(write,end));
//
// function write(buf) {
// 	console.log(buf);
// }
//
// function end() {
// 	console.log('___END__');
// }



// 原理


function though(fn){
	return function(a){
		console.log('inner: '+a);
		return fn(a)
	}
}

though(function(argv){
	console.log('though fn');
})('hello');
