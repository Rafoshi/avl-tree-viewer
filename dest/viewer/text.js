// Parameters may be declared in a variety of syntactic form
/**
 * @param {number}  position - 0 = middle, 1 left,2 == right.
 */
const text = (ctx, centerX, centerY, text, position) => {
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'red';
    let newCenterX = centerX - 20;
    let newCenterY = centerY + 10;
    ctx.fillText(text, newCenterX, newCenterY);
    ctx.globalCompositeOperation = 'destination-over';
};
export default text;
