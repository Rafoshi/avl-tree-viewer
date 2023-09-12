import coordsDistance from "./constants.js";
import text from './text.js';
// Parameters may be declared in a variety of syntactic form
/**
 * @param {number}  position - 0 = middle, 1 left,2 == right.
 */
const circle = (ctx, centerX, centerY, position, value, color = "#003300") => {
    let xDistance = 0;
    let yDistance = 0;
    if (position === 1) {
        xDistance = -coordsDistance.x;
        yDistance = coordsDistance.y;
    }
    if (position === 2) {
        xDistance = coordsDistance.x;
        yDistance = coordsDistance.y;
    }
    const newX = centerX + xDistance;
    const newY = centerY + yDistance;
    ctx.beginPath();
    ctx.arc(newX, newY, coordsDistance.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    text(ctx, newX, newY, value, position);
    return {
        "x": newX,
        "y": newY
    };
};
export default circle;
