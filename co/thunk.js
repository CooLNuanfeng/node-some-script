fs.readFile()


function thunk(filename){
    return function(callback){
        fs.readFile(filname,callback);
    }
}

var thunkFile = thunk(filname);

thunkFile(function(){
    //callback
});




function run(gen){
    function next(){
        var cxt = gen.next();
        if(cxt.done) return;
        next(cxt.value);
    }
    next();
}

run(function*(){

})
