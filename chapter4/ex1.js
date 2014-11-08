/*jshint node: true*/
var Stack = require('./stack');

var balPar = function(expr) {
    var s = new Stack();
    for(var i = 0; i < expr.length; i++) {
        if (expr[i] == '(') {s.push(i);}
        if (expr[i] == ')') {s.pop();}
    }
    if(s.length()>0) {
        console.log('Unbalanced at index ');
    }
    while(s.length()>0) {
        console.log(s.pop());
    }
};

module.exports = balPar;