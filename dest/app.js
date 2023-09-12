import circle from './viewer/shapes.js';
import AVLTree from './tree/tree.js';
const canva = document.querySelector('#avl-tree');
let ctx = canva.getContext('2d');
ctx.fillStyle = '#3c3c3c';
ctx.font = '20px Comic Sans MS';
const radius = 30;
const centerY = radius + 10;
const centerX = canva.width / 2;
let treeList = [50, 40, 90, 75, 85, 60, 100, 90, 50, 85, 95, 55, 65, 50, 50];
let treeObject = [
    { "value": 50, "layer": 1 },
    { "value": 40, "layer": 2 },
    { "value": 45, "layer": 2 },
    { "value": 44, "layer": 2 },
    { "value": 43, "layer": 2 },
    { "value": 42, "layer": 2 }
];
const tree = new AVLTree();
tree.insertMany([51, 25, 76, 10, 43, 69, 88]);
const values = tree.breadthFirstTraversal(tree.root);
//hashmap layer->n por layer
const hashmap = new Map();
values === null || values === void 0 ? void 0 : values.forEach(item => {
    let { value, layer } = item;
    if (layer === 1) {
        circle(ctx, centerX, centerY, 0, value);
        return;
    }
});
