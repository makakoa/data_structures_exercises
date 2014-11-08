/*jshint node: true*/
var Node = function(element) {
    this.element = element;
    this.next = null;
};

var LList = function() {
    this.head = new Node('head');
};

LList.prototype.find = function(item) {
    var curr = this.head;
    while (curr.element != item) {
        curr = curr.next;
    }
    return curr;
};

LList.prototype.insert = function(newN, item) {
    var newNode = new Node(newN);
    var curr = this.find(item);
    newNode.next = curr.next;
    curr.next = newNode;
};

LList.prototype.display = function() {
    var current = this.head;
    while(current.next !== null) {
        current = current.next;
        console.log(current.element);
    }
};

LList.prototype.findPrevious = function(item) {
    var current = this.head;
    while (current.next !== null &&
            current.next.element != item) {
        current = current.next;
    }
    if (current.next === null) return console.log('not found');
    return current;
};

LList.prototype.remove = function(item) {
    var prev = this.findPrevious(item);
    if(prev !== null) {
        prev.next = prev.next.next;
    }
};

// exercise 1
LList.prototype.advance = function(current, n) {
    while(n>0 && current.next !== null) {
        current = current.next;
        n--;
    }
    return current;
};

// exercise 2
LList.prototype.back = function(current, n) {
    while(n>0 && this.findPrevious(current) !== null) {
        current = this.findPrevious(current);
        n--;
    }
    return current;
};

// exercise 3
LList.prototype.show = function(current) {
    console.log(current.element);
};

// exercise 6 for circularly linked
LList.prototype.add = function(newN, curr) {
    var newNode = new Node(newN);
    curr.next = newNode;
    newNode.next = this.head.next;
};


module.exports = LList;
