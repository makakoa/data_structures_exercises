/*jshint node: true*/
var bst = require('./binary_search_tree.js');

bst.prototype.numEdges = function() {
  var node = this.root;
  var total = 0;
  var countEdge = function(node) {
    if(node.left) {
      total++;
      countEdge(node.left);
    }
    if(node.right) {
      total++;
      countEdge(node.right);
    }
  };
  countEdge(node);
  return total;
}; // or BST.prototype.numNodes - 1

module.exports = bst.prototype.numEdges;
