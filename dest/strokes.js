import coordsDistance from "./constants.js";
const strokes = (ctx, centerX, centerY, left, padding = 0) => {
    let xDistance = left ? -coordsDistance.x : coordsDistance.x;
    let newDistance = (centerX + xDistance) + padding;
    ctx.globalCompositeOperation = 'destination-over';
    ctx.beginPath();
    ctx.lineTo(centerX, centerY);
    ctx.lineTo(newDistance, centerY + coordsDistance.y);
    ctx.stroke();
    ctx.globalCompositeOperation = 'source-over';
};
export default strokes;
