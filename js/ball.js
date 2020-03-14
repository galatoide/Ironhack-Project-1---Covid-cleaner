let x = canvas.width/2;
let y = canvas.height-30;

let speedX = 2;
let speedY = -2;

function ball(){
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath;
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball();
    x += speedX;
    y += speedY;
}
setInterval(draw, 10);
// requestAnimationFrame(draw)