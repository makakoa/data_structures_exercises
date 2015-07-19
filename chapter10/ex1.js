/*jshint node: true*/
var bst = require('./binary_search_tree.js');

bst.prototype.numNodes = function() {
  var node = this.root;
  var total = 0;
  var count = function(node) {
    if(node) {
      total++;
      count(node.left);
      count(node.right);
    }
  };
  count(node);
  return total;
};

module.exports = bst.prototype.numNodes;