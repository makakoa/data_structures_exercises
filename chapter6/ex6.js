/*jshint node: true*/
var LList = require('./linkedlist');

var lastTwo = function(n, m) {
    var ll = new LList();
    var curr = ll.find('head');
    for(var i=1; i<n; i++) {
        ll.add(i, curr);
        curr = ll.find(i);
    }
    curr = ll.find('head');
    while(curr.element !== curr.next.next.element) {
        curr = ll.advance(curr, m-1);
        curr.next = curr.next.next;
    }
    console.log(curr.element + ' and ' + curr.next.element);
};

module.exports = lastTwo;
