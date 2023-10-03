function configuration() {
    const canva = document.querySelector('#avl-tree');
    let ctx = canva.getContext('2d');
    ctx.fillStyle = '#3c3c3c';
    ctx.font = '20px Comic Sans MS';
    const radius = 30;
    const centerY = radius + 10;
    const centerX = canva.width / 2;
}
export default configuration;
