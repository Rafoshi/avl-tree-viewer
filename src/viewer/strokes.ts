import coordsDistance from "./constants.js";

const strokes = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number,left:boolean, padding:number = 0) => {
    let xDistance:number = left ? -coordsDistance.x : coordsDistance.x;
    let newDistance = (centerX + xDistance) + padding;
    ctx.globalCompositeOperation = 'destination-over';
    ctx.beginPath();
    ctx.lineTo(centerX, centerY);
    ctx.lineTo(newDistance, centerY + coordsDistance.y);
    ctx.stroke();
    ctx.globalCompositeOperation = 'source-over';
}

export default strokes;