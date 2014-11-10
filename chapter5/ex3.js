/*jshint node: true*/
var Queue = require('./queue');

var priorityQ = Queue;

priorityQ.prototype.dequeue = function() {
    var entry = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code > this.dataStore[entry].code) {
            entry = i;
        }
    }
    return this.dataStore.splice(entry,1);
};

module.exports = priorityQ;