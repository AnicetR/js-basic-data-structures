class Node {
  right = null;
  left = null;
  constructor(data) {
    this.data = data;
  }
}


class BST {
  root = null;

  //Insert new data as node in the tree
  insert(data) {
    const node = new Node(data);
    //If there is no root, insert the new node as root
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  //Insert new node in the tree
  insertNode(node, newNode) {
    // if the new node data is < than the compared node data, we go left
    if (newNode.data < node.data) {
      // if le left node is null, we put the new node there
      if (node.left === null) {
        node.left = newNode;
      } else {
        //If left is not null, recur till it is
        this.insertNode(node.left, newNode);
      }
    } else {
      // if the new node data is > than the compared node data, we go right
      // if le right node is null, we put the new node there
      if (node.right === null) {
        node.right = newNode;
      } else {
        //If right is not null, recur till it is
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(data) {
    return this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
    } else {
 
      //No children
      if (node.left === null && node.right === null) {
        return null;
      }
      //One children
      if (node.left === null) {
        return node.right;
      }
      else if (node.right === null) {
        return node.left;
      }

      //If there is two children, we take the max node of the left subtree
      let maxNode = this.findMaxNode(node.left);
      node.data = maxNode.data;
      node.left = this.removeNode(node.left, maxNode.data);
      return node;
    }
    return node;
  }

  findMaxNode(node) {
    if (node.right === null) {
      return node;
    }
    return this.findMaxNode(node.right);
  }

  inorder(node) {
    let orderedArray = [];
    if(node !== null){
      orderedArray.push(this.inorder(node.left));
      orderedArray.push(node.data);
      orderedArray.push(this.inorder(node.right));
    }
    return orderedArray.flat();
  }

  preorder(node) {
    let orderedArray = [];
    if(node !== null){
      orderedArray.push(this.preorder(node.right));
      orderedArray.push(node.data);
      orderedArray.push(this.preorder(node.left));
    }
    return orderedArray.flat();
  }

  postorder(node) {
    let orderedArray = [];
    if(node !== null){
      orderedArray.push(this.postorder(node.right));
      orderedArray.push(this.postorder(node.left));
      orderedArray.push(node.data);
    }
    return orderedArray.flat();
  }

  searchData(node, data){
    //Data is not in the tree
    if(node === null){
      return null;
    } else if(data > node.data){
      return this.searchData(node.right, data);
    } else if(data < node.data){
      return this.searchData(node.left, data);
    } else {
      return node;
    }
  }
}


let testBST = new BST();
testBST.insert(10);
testBST.insert(0);
testBST.insert(12);
testBST.insert(11);
testBST.insert(76);
testBST.insert(32);
testBST.insert(22);
testBST.insert(21);
testBST.insert(305);
testBST.insert(15);
testBST.insert(12);
testBST.insert(230);
testBST.insert(8);
testBST.insert(22);
testBST.insert(1);
testBST.insert(7);
testBST.insert(6);
testBST.insert(7);
testBST.insert(3);

console.log(testBST.root);
console.log(testBST.remove(305));
console.log(testBST.findMaxNode(testBST.root));
console.log(testBST.inorder(testBST.root));
console.log(testBST.preorder(testBST.root));
console.log(testBST.postorder(testBST.root));
console.log(testBST.searchData(testBST.root, 10));
console.log(testBST.searchData(testBST.root, 230));
console.log(testBST.searchData(testBST.root, 4500));