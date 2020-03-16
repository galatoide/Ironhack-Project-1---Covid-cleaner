let x = canvas.width/2;
let y = canvas.height-30;

let ballRadius = 10; 

let speedX = 4;
let speedY = -4;

function ball(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    // ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath;
}

function getRandomColor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// window.requestAnimationFrame(draw)