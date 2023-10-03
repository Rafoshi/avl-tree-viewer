import circle from './shapes.js';
import { getPadding } from './functions.js';
const canva = document.querySelector('#avl-tree');
let ctx = canva.getContext('2d');
ctx.fillStyle = '#3c3c3c';
ctx.font = '20px Comic Sans MS';
const radius = 30;
const centerY = radius + 10;
const centerX = canva.width / 2;
let coordsMap = [];
let padding = 0;
function draw(root) {
    createTree(root);
    appendRight(coordsMap[coordsMap.length - 1].coords, root.left);
    appendLeft(coordsMap[coordsMap.length - 2].coords, root.right);
    appendLeft(coordsMap[coordsMap.length - 1].coords, root.left);
}
function createTree(root) {
    padding = getPadding(root.height);
    let coords = circle(ctx, centerX, centerY, 0, root.value.toString());
    coordsMap.push({
        layer: root.height,
        padding: padding,
        coords: coords
    });
}
function appendLeft(currentCoords, drawRoot) {
    if (!drawRoot)
        return null;
    let newCoords = circle(ctx, currentCoords.x, currentCoords.y, 1, drawRoot.value.toString());
    coordsMap.push({
        layer: drawRoot.height,
        padding: padding,
        coords: newCoords
    });
}
function appendRight(currentCoords, drawRoot) {
    if (!drawRoot)
        return null;
    let newCoords = circle(ctx, currentCoords.x, currentCoords.y, 2, drawRoot.value.toString());
    coordsMap.push({
        layer: drawRoot.height,
        padding: padding,
        coords: newCoords
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
