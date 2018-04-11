var arr = ['a.json','b.json'];

arr.reduce(function(q,item){
    return q.then(function(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log(item);
                resolve(item)
            },1000);
        });
    });
},Promise.resolve())
