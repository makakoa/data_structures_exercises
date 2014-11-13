/*jshint node: true*/
var fs = require('fs');
var bst = require('./binary_search_tree.js');
var str = '';
var words = new bst();

fs.readFile(process.argv[2], 'utf8', function(err, data) {
  if(err) return console.log(err);
  console.log(data);
  str += data.toLowerCase();
  var arr = str.split(' ');
  for(var i = 0; i < arr.length; i++) {
    if(words.find(arr[i])) {
      words.update(words.find(arr[i]));
    } else {
      words.insert(arr[i]);
    }
  }
  words.inOrder(words.root);
  console.log();
});
