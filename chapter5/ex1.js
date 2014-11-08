/*jshint node: true*/
var Queue = require('./queue');

var Deque = Queue;

Deque.prototype.endQueue = function(element) {
    this.dataStore.unshift(element);
};

Deque.prototype.endDequeue = function() {
    return this.dataStore.pop();
};

module.exports = Deque;
