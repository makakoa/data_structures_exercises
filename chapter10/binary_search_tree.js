/*jshint node: true*/
var Node = function(data, left, right) {
  this.data = data;
  this.count = 1;
  this.left = left;
  this.right= right;
};

Node.prototype.show = function() {
  if(this.count > 1) {
    return (this.data + ' x' + this.count);
  }
  return this.data;
};

Node.prototype.showCount = function() {
  return this.count;
};

var BST= function() {
  this.root = null;
};

BST.prototype.insert = function(data) {
  var n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while(true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if(current === null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
};

BST.prototype.inOrder = function(node) {
  if (node) {
    BST.prototype.inOrder(node.left);
    process.stdout.write(node.show() + ' ');
    BST.prototype.inOrder(node.right);
  }
};

BST.prototype.preOrder = function(node) {
  if (node) {
    process.stdout.write(node.show() + ' ');
    BST.prototype.inOrder(node.left);
    BST.prototype.inOrder(node.right);
  }
};

BST.prototype.postOrder = function(node) {
  if (node) {
    BST.prototype.inOrder(node.left);
    BST.prototype.inOrder(node.right);
    process.stdout.write(node.show() + ' ');
  }
};

BST.prototype.getMin = function() {
  var current = this.root;
  while (current.left) {
    current = current.left;
  }
  return current.data;
};

BST.prototype.getMax = function() {
  var current = this.root;
  while (current.right) {
    current = current.right;
  }
  return current.data;
};

BST.prototype.find = function(data) {
  var current = this.root;
  while(current && current.data != data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return current;
};

BST.prototype.remove = function(data) {
  this.root  = removeNode(this.root, data);
};

var removeNode = function(node, data) {
  if (!node) return null;
  if (data === node.data) {
    if(node.left === null && node.right === null) {
      return null;
    }
    if(!node.left) return node.right;
    if(!node.right) return node.left;
    var tempNode = BST.prototype.getMin(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  }
  if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  }
  node.right = removeNode(node.right, data);
  return node;
};      

BST.prototype.update = function(node) {
  node.count++;
};
  
/*  
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.inOrder(nums.root);
console.log();
console.log(nums.numNodes());
console.log(nums.numEdges());
*/

module.exports = BST;
