import Coord from './viewer/types.js';
import circle from './viewer/shapes.js';
import strokes from './viewer/strokes.js';
import text from './viewer/text.js';
import AVLTree from './tree/tree.js';
import TreeReturn from './tree/treeReturn.js';

const canva = document.querySelector('#avl-tree') as HTMLCanvasElement;
let ctx = canva.getContext('2d') as CanvasRenderingContext2D;
ctx.fillStyle = '#3c3c3c';
ctx.font = '20px Comic Sans MS';

const radius: number = 30;
const centerY: number = radius + 10;
const centerX: number = canva.width / 2;

let treeList: number[] = [50, 40, 90, 75, 85, 60, 100, 90, 50, 85, 95, 55, 65, 50, 50];
let treeObject: any = [
    { "value": 50, "layer": 1 },
    { "value": 40, "layer": 2 },
    { "value": 45, "layer": 2 },
    { "value": 44, "layer": 2 },
    { "value": 43, "layer": 2 },
    { "value": 42, "layer": 2 }
];


const tree = new AVLTree();
tree.insertMany([51, 25, 76, 10, 43, 69, 88])
const values = tree.breadthFirstTraversal(tree.root);

//hashmap layer->n por layer
const hashmap = new Map<String,number>();

values?.forEach(item => {
    let {value, layer}:TreeReturn = item;
    if(layer === 1){
        circle(ctx, centerX,centerY, 0, value);
        return;
    }



})