/*jshint node: true*/
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList() {
    this.head = new Node("head");
}

var find = function(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
};

var insert = function(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
};

var dispReverse = function() {
    var currNode = this.head;
    currNode = this.findLast();
    while (currNode.previous !== null) {
        while (currNode.previous !== null) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    }
};

var findLast = function() {
    var currNode = this.head;
    while (currNode.next !== null) {
        currNode = currNode.next;
    }
    return currNode;
};

var remove = function(item) {
    var currNode = this.find(item);
    if (currNode.next !== null) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
};

var display = function() {
    var currNode = this.head;
    while (currNode.next !== null) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
};

module.exports = LList;