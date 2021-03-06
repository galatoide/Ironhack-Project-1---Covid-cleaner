let barHeight = 10; //10
let barWidth = 150; //100
let barPositionX = (canvas.width - barWidth) / 2;
let barPositionY = canvas.height - 10;; 

// let barLeft = barPositionX;
// let barRight = barPositionX + barWidth;
// let barTop = barPositionY;
// let barBottom = barPositionY + barHeight;

// let ballLeft = x - ballRadius;
// let ballRight = x+ ballRadius;
// let ballTop = y - ballRadius;
// let ballBottom = y + ballRadius;

// let flipX = (ballRight >= barLeft || ballLeft <= barRight);
// let flipY = (ballTop >= barBottom || ballBottom <= barTop);


let  leftPressed = false
let  rightPressed = false

function bar(){
    ctx.save();
    ctx.beginPath();
    ctx.rect(barPositionX, barPositionY, barWidth, barHeight);
    ctx.fillStyle = 'white';
    
    ctx.fill();
    ctx.closePath();
    ctx.restore();


}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener("mousemove", mouseTrack, false);

function keyDownHandler(x) {
    if ( x.key === 'Left' || x.key === 'ArrowLeft'){
        leftPressed = true;
    } else if ( x.key === 'Right' || x.key === 'ArrowRight'){
        rightPressed = true;
    }
}

function keyUpHandler(x) {
    if ( x.key === 'Left' || x.key === 'ArrowLeft'){
        leftPressed = false;
    } else if ( x.key === 'Right' || x.key === 'ArrowRight'){
        rightPressed = false;
    }
}

function mouseTrack(x) {
    let relativeX = x.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        barPositionX = relativeX - barWidth/2;
    }
}

function controls() {
    if(rightPressed) {
        barPositionX += 11;
        if (barPositionX + barWidth > canvas.width){
            barPositionX = canvas.width - barWidth;
        }
    }
    else if(leftPressed) {
        barPositionX -= 11;
        if (barPositionX < 0){
            barPositionX = 0;
        }
    }
}




