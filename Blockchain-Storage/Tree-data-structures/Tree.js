class Tree {
  constructor() {
    this.root = null;
  }

  insertNode(parent, child) {
    if (child.data < parent.data) {
      if (parent.left == null) {
        parent.left = child;
        return;
      }
      this.insertNode(parent.left, child);
      return;
    }
    if (parent.right == null) {
      parent.right = child;
      return;
    }
    this.insertNode(parent.right, child);
    return;
  }

  addNode(node) {
    if (this.root == null) {
      this.root = node;
      return;
    }
    this.insertNode(this.root, node);
  }

  hasNode(number) {
    return this.findNode(this.root, number);
  }

  findNode(root, number) {
    if (!root) {
      return false;
    }
    if (root.data == number) {
      return true;
    } else if (number < root.data) {
      return this.findNode(root.left, number);
    }
    return this.findNode(root.right, number);
  }
}

module.exports = Tree;
