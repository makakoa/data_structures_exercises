/*jshint node: true*/
var Deque = require('./ex1');

var isPalindrome = function(word) {
    var deq = new Deque();
    for(var i = 0; i < word.length; i++) {
        deq.enqueue(word[i]);
    }
    while(!deq.empty()) {
        if(deq.back() != deq.dequeue()) {
            return false;
        }
        if (!deq.empty()) deq.endDequeue();
    }
    return true;
};

module.exports = isPalindrome;
