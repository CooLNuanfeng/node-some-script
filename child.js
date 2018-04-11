// code one
// var number = process.env.number;
// console.log(process.env);
// console.log(typeof number);
// number = parseInt(number,10);
// console.log(typeof number);



//code two
// process.stdin.resume();
process.stdin.on('data',function(data){
    var number;
    try {
        number = parseInt(data.toString(),10);
        number += 1;
        process.stdout.write(number + '\n');
    } catch (err) {
        process.stderr.write(err.message + '\n');
    }
});
