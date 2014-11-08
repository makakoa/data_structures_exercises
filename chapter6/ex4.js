/*jshint node: true*/
var LList = require('./linkedlist');
// var LList = require('./ex5.js');//for doublelist

var gradeBook = function() {
    var ll = new LList();
    var curr = ll.find('head');
};

gradeBook.prototype.addGrade = function(grade) {
    this.ll.insert(grade, this.curr);
    this.curr = this.ll.find(grade);
};

gradeBook.prototype.getGrade = function(grade) {
    return this.ll.find(grade);
};

gradeBook.prototype.delGrade = function(grade) {
    this.ll.remove(grade);
};

gradeBook.prototype.listGrade = function() {
    this.curr = this.ll.find('head');
    while(this.curr.next !== null) {
        this.curr = this.curr.next;
        this.ll.show(this.curr);
    }
};