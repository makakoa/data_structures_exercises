var Queue = require('./queue');

var q = new Queue();

var admitPatient = function(patient) {
    q.enqueue(patient);
};

var seePatient = function() {
    q.dequeue(patient);
};

var listPatients = function() {
    console.log(q.toString());
};