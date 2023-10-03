import { AVLTree } from './tree/tree.js';
import draw from './viewer/draw.js';
const tree = new AVLTree();
let root = tree.init();
root = tree.insert(root, 32);
root = tree.insert(root, 43);
root = tree.insert(root, 10);
root = tree.insert(root, 21);
root = tree.insert(root, 66);
root = tree.insert(root, 41);
tree.inOrder(root);
console.log(root);
//Draw the tree
draw(root);
