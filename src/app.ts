import Coord from './viewer/types.js';
import circle from './viewer/shapes.js';
import strokes from './viewer/strokes.js';
import AVLTree from './tree/tree.js';
import { howManyNeeded, getPadding } from './viewer/functions.js';

const canva = document.querySelector('#avl-tree') as HTMLCanvasElement;
let ctx = canva.getContext('2d') as CanvasRenderingContext2D;
ctx.fillStyle = '#3c3c3c';
ctx.font = '20px Comic Sans MS';

const radius: number = 30;
const centerY: number = radius + 10;
const centerX: number = canva.width / 2;

const tree = new AVLTree();
tree.insertMany([51, 25, 76, 10, 43, 69, 88])
const values = tree.breadthFirstTraversal(tree.root);

if (!values)
    throw new Error('Values is undefined');

const hashmap = new Map<number | null | undefined, number>();
values.forEach(item => {
    if (!hashmap.has(item.layer))
        hashmap.set(item.layer, 1);
    else
        hashmap.set(item.layer, hashmap.get(item.layer)! + 1);
});

let counter: number = 0;
let coordsQueue: Coord[] = [];
hashmap.forEach((value, key) => {
    for (let i = 0; i < values.length; i++) {
        if (values[i].layer == key) {
            const padding = getPadding(counter);
            if (counter == 0) {
                let coords1 = circle(ctx, centerX, centerY, 0, values[i].value)
                coordsQueue.push(coords1);
            } else {
                let currentCoords = coordsQueue.shift();
                if (!currentCoords)
                    continue;

                let leftNode: Coord = circle(ctx, currentCoords.x - padding, currentCoords.y, 1, values[i].value);
                strokes(ctx, currentCoords.x, currentCoords.y, true, -padding);
                if (leftNode) coordsQueue.push(leftNode);

                let rightNode: Coord = circle(ctx, currentCoords.x + padding, currentCoords.y, 2, values[++i].value);
                strokes(ctx, currentCoords.x, currentCoords.y, false, padding);
                if (rightNode) coordsQueue.push(rightNode);

            }
            counter++;
        }
    }
});