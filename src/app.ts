import {AVLTree, TreeNode} from './tree/tree.js';
import TreeBST from './tree/treeBST.js';
import Coord from './viewer/types.js';
import circle from './viewer/shapes.js';
import strokes from './viewer/strokes.js';
import { howManyNeeded, getPadding } from './viewer/functions.js';

//Inicial configuration
//const canva = document.querySelector('#avl-tree') as HTMLCanvasElement;
//let ctx = canva.getContext('2d') as CanvasRenderingContext2D;
//ctx.fillStyle = '#3c3c3c';
//ctx.font = '20px Comic Sans MS';
//
//const radius: number = !30;
//const centerY: number = radius + 10;
//const centerX: number = canva.width / 2;

const tree = new AVLTree();
let root:TreeNode | null = tree.init();
root = tree.insert(root!, 32);
root = tree.insert(root, 43);
root = tree.insert(root, 10);
root = tree.insert(root, 21);
root = tree.insert(root, 66);

console.log('antes da deleteção');
console.log(root);
root = tree.delete(root, 21);
root = tree.delete(root, 10);
console.log('depois da deleteção');
console.log(root);
