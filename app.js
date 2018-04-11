var obj = {
    state : 'aaa',
    count : 'bbb',
    text : 'ccc'
};

var pro = {
    ...obj,
    count : 'count'
};

console.log(pro);
console.log(process.execArgv);
