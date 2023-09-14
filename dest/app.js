import { AVLTree } from './tree/tree.js';
//Inicial configuration
//const canva = document.querySelector('#avl-tree') as HTMLCanvasElement;
//let ctx = canva.getContext('2d') as CanvasRenderingContext2D;
//ctx.fillStyle = '#3c3c3c';
//ctx.font = '20px Comic Sans MS';
//
//const radius: number = 30;
//const centerY: number = radius + 10;
//const centerX: number = canva.width / 2;
const tree = new AVLTree();
let root = tree.init();
root = tree.insert(root, 2);
root = tree.insert(root, 6);
root = tree.insert(root, 9);
root = tree.insert(root, 10);
root = tree.insert(root, 13);
