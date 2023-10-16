import {AVLTree, TreeNode} from './tree/tree.js';
import draw from './viewer/draw.js';

const tree = new AVLTree();
let root:TreeNode | null = tree.init();
root = tree.insert(root!, 32);
root = tree.insert(root, 43);
root = tree.insert(root, 10);
root = tree.insert(root, 21);
root = tree.insert(root, 66);
root = tree.insert(root, 41);

tree.inOrder(root);
let breadthFirstTraversal = tree.breadthFirstTraversal(root);
//Draw the tree
//        32
//   10      43
//     21  41  66
draw(root);
