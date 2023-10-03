import Coord from './types.js';
import circle from './shapes.js';
import strokes from './strokes.js';
import { AVLTree, TreeNode } from '../tree/tree.js';
import { howManyNeeded, getPadding } from './functions.js';

const canva = document.querySelector('#avl-tree') as HTMLCanvasElement;
let ctx = canva.getContext('2d') as CanvasRenderingContext2D;
ctx.fillStyle = '#3c3c3c';
ctx.font = '20px Comic Sans MS';
const radius: number = 30;
const centerY: number = radius + 10;
const centerX: number = canva.width / 2;

interface DrawHelp {
  layer: number;
  padding: number;
  coords: Coord;
}

let coordsMap:DrawHelp[] = [];
let padding: number = 0;

function draw(root: TreeNode) {
    createTree(root);
    appendRight(coordsMap[coordsMap.length - 1].coords, root.left);
    appendLeft(coordsMap[coordsMap.length - 2].coords, root.right);
    appendLeft(coordsMap[coordsMap.length - 1].coords, root.left);
}

function createTree(root: TreeNode) {
    padding = getPadding(root.height);
    let coords = circle(ctx, centerX, centerY, 0, root.value.toString());
    coordsMap.push({
        layer: root.height,
        padding: padding,
        coords: coords!
    });
}

function appendLeft(currentCoords: Coord, drawRoot: TreeNode | null) {
    if (!drawRoot)
        return null;

    let newCoords = circle(ctx, currentCoords!.x, currentCoords!.y, 1, drawRoot!.value.toString());
    coordsMap.push({
        layer: drawRoot.height,
        padding: padding,
        coords: newCoords!
    });
}

function appendRight(currentCoords: Coord, drawRoot: TreeNode | null) {
    if (!drawRoot)
        return null;

    let newCoords = circle(ctx, currentCoords!.x, currentCoords!.y, 2, drawRoot!.value.toString());
    coordsMap.push({
        layer: drawRoot.height,
        padding: padding,
        coords: newCoords!
    });
}

//const hashmap = new Map<number | null | undefined, number>();
//values.forEach(item => {
//    if (!hashmap.has(item.layer))
//        hashmap.set(item.layer, 1);
//    else
//        hashmap.set(item.layer, hashmap.get(item.layer)! + 1);
//});
//
//let counter: number = 0;
//let coordsQueue: Coord[] = [];
//hashmap.forEach((value, key) => {
//    for (let i = 0; i < values.length; i++) {
//        if (values[i].layer == key) {
//            const padding = getPadding(counter);
//            if (counter == 0) {
//                let coords1 = circle(ctx, centerX, centerY, 0, values[i].value)
//                coordsQueue.push(coords1);
//            } else {
//                let currentCoords = coordsQueue.shift();
//                if (!currentCoords)
//                    continue;
//
//                let leftNode: Coord = circle(ctx, currentCoords.x - padding, currentCoords.y, 1, values[i].value);
//                strokes(ctx, currentCoords.x, currentCoords.y, true, -padding);
//                if (leftNode) coordsQueue.push(leftNode);
//
//                let rightNode: Coord = circle(ctx, currentCoords.x + padding, currentCoords.y, 2, values[++i].value);
//                strokes(ctx, currentCoords.x, currentCoords.y, false, padding);
//                if (rightNode) coordsQueue.push(rightNode);
//
//            }
//            counter++;
//        }
//    }
//});
//
export default draw;
