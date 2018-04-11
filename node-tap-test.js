var test = require('tap').test;


// test('sum works',function(t){
//     var a = 2 + 2;
//     t.equal(a,4,'2+2 should be equal to 4');
//     t.notEqual(a,'4','2+2 should not be equal to 4');
//     t.end();
// });
//
// test('sum works',function(t){
//     var a = 3 + 2;
//     t.equal(a,4,'3+2 should be equal to 4');
//     t.notEqual(a,'4','3+2 should not be equal to 4');
//     t.end();
// });


// test('Object equivalent',function(t){
//     var a = {'a': 1, 'b': 2};
//     t.equivalent(a,{'b':2,'a':1});
//     t.end();
// });

test('Object similarity',function(t){
    var a = {'a':1,'b':2};
    t.similar(a,{'a':1});
    t.similar(10,10);
    t.end();
})
