import { AVLTree } from './tree/tree.js';
const tree = new AVLTree();
let root = tree.init();
root = tree.insert(root, 32);
root = tree.insert(root, 43);
root = tree.insert(root, 10);
root = tree.insert(root, 21);
root = tree.insert(root, 66);
//          32
//          /\
//      10      43
//        \      \
//       21      66
tree.inOrder(root);
root = tree.delete(root, 32);
root = tree.delete(root, 66);
//          43
//          /\
//      10     66
//       \
//       21
tree.inOrder(root);
//          43
//          /\
//       32    76
console.log(root);
