




// var concat = require('concat-stream');

// var cs = concat(function (body) {
//     console.log(body.toUpperCase());
// });
// cs.write('beep ');
// cs.write('boop.');
// cs.end();

var http = require('http');
var qs = require('querystring');
var concat = require('concat-stream');

//postman测试  type: post format: x-www-form-urlencoded 
var server = http.createServer(function (req, res) {
    req.pipe(concat(function(body) {
        var params = qs.parse(body.toString());
        console.log(params,'body');
        res.end(JSON.stringify(params) + '\n');
    }));
});
server.listen(5000);


// process.stdin.on('readable',()=>{
// 	const chunk = process.stdin.read();
// 	if(chunk!==null){
// 		process.stdout.write('data: '+chunk);
// 	}
// });

// process.stdin.on('end',()=>{
// 	process.stdout.write('end');
// })