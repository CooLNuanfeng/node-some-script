var through2 = require('through-gulp');

function simple() {
	var stream = through2(function(chunk,encoding,callback){
		if(chunk.isNull()){
			console.log('chunk is null');
		}
		if(chunk.isBuffer()){
			console.log('chunk is buffer',chunk.toString());
		}
		if(chunk.isStream()){
			console.log('chunk is stream');
		}
		console.log('simple gulp');
		this.push(chunk);
		callback();
	});
	return stream;
}

module.exports = simple;