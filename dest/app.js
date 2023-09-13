import circle from './viewer/shapes.js';
import strokes from './viewer/strokes.js';
import AVLTree from './tree/tree.js';
import { getPadding } from './viewer/functions.js';
const canva = document.querySelector('#avl-tree');
let ctx = canva.getContext('2d');
ctx.fillStyle = '#3c3c3c';
ctx.font = '20px Comic Sans MS';
const radius = 30;
const centerY = radius + 10;
const centerX = canva.width / 2;
const tree = new AVLTree();
tree.insertMany([51, 25, 76, 10, 43, 69, 88]);
const values = tree.breadthFirstTraversal(tree.root);
if (!values)
    throw new Error('Values is undefined');
const hashmap = new Map();
values.forEach(item => {
    if (!hashmap.has(item.layer))
        hashmap.set(item.layer, 1);
    else
        hashmap.set(item.layer, hashmap.get(item.layer) + 1);
});
let counter = 0;
let coordsQueue = [];
hashmap.forEach((value, key) => {
    for (let i = 0; i < values.length; i++) {
        if (values[i].layer == key) {
            const padding = getPadding(counter);
            if (counter == 0) {
                let coords1 = circle(ctx, centerX, centerY, 0, values[i].value);
                coordsQueue.push(coords1);
            }
            else {
                let currentCoords = coordsQueue.shift();
                if (!currentCoords)
                    continue;
                let leftNode = circle(ctx, currentCoords.x - padding, currentCoords.y, 1, values[i].value);
                strokes(ctx, currentCoords.x, currentCoords.y, true, -padding);
                if (leftNode)
                    coordsQueue.push(leftNode);
                let rightNode = circle(ctx, currentCoords.x + padding, currentCoords.y, 2, values[++i].value);
                strokes(ctx, currentCoords.x, currentCoords.y, false, padding);
                if (rightNode)
                    coordsQueue.push(rightNode);
            }
            counter++;
        }
    }
});
