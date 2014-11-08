/*jshint node: true*/
var Stack = require('./stack');

var removeYellow = function(candy) {  // candy is array of candy colors red, yellow, white
    var s = new Stack();
    for(var i = 0; i < candy.length; i++) {
        if(candy[i] != 'y') {
        s.push(candy[i]);
        }
    }
    candy = '';
    while (s.length() > 0) {
        candy = s.pop() + candy;
    }
    return candy;
};

module.exports = removeYellow;