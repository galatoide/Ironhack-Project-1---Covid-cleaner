let x = canvas.width/2;
let y = canvas.height-30;

ballImage = new Image();
ballImage.src = '/images/vírus.png';

let ballRadius = 10; 

let speedX = 10;  // 
let speedY = -10; // -4

function ball(){
    ctx.save()
    ctx.beginPath();
    ctx.fillStyle = getRandomColor();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    // ctx.drawImage(ballImage,x,y, 30, 30)
    ctx.restore()

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