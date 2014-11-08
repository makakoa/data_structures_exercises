/*jshint node: true*/
var Stack = require('./stack');

var inToPost = function(expr) {
    var s1 = new Stack(); // operands
    var s2 = new Stack(); // operators
    var arr = expr.split(' ').reverse();
    for(var i=0; i<arr.length; i++) {
        if(isNaN(arr[i])) {
            s2.push(arr[i]);
        } else {
            s1.push(arr[i]);
        }
    }
    var result = s1.pop();
    while(s1.length()>0) {
        result += eval(s1.pop() + ' ' + s2.pop() + ' ' + result);
    }
    return result;
};

module.exports = inToPost;