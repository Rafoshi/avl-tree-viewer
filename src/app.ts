import {AVLTree, TreeNode} from './tree/tree.js';

const tree = new AVLTree();
let root:TreeNode | null = tree.init();
root = tree.insert(root!, 32);
root = tree.insert(root, 43);
root = tree.insert(root, 10);
root = tree.insert(root, 21);
root = tree.insert(root, 66);

root = tree.delete(root, 32);
root = tree.delete(root, 66);
tree.inOrder(root);
//Draw the tree
//draw(root);
console.log(root);
