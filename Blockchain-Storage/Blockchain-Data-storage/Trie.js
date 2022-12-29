const TrieNode = require("./TrieNode");

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(str, root = this.root) {
    let strArray = str.split("");
    let nodes = [this.root];

    for (let i = 0; i < strArray.length; i++) {
      let letter = strArray[i];

      if (root.children.hasOwnProperty(letter)) {
        root = root.children[letter];
      } else {
        let node = new TrieNode(letter);
        root.children[letter] = node;
        root = node;
      }
    }
    root.isWord = true;
  }

  contains(word, root = this.root) {
    let strArray = word.split("");

    if (strArray.length == 0) {
      return false;
    }

    for (let i = 0; i < strArray.length; i++) {
      let letter = strArray[i];

      if (!root.isWord && root.children.hasOwnProperty(letter)) {
        root = root.children[letter];
      } else {
        return false;
      }
    }
    if (!root.isWord) {
      return false;
    }

    return true;
  }
}

module.exports = Trie;
