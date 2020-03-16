let barHeight = 10;
let barWidth = 75;
let barPosition = (canvas.width - barWidth) / 2;

let  leftPressed = false
let  rightPressed = false

function bar(){
    ctx.beginPath();
    ctx.rect(barPosition, canvas.height - barHeight, barWidth, barHeight);
    // ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();


}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

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

function controls() {
    if(rightPressed) {
        barPosition += 7;
        if (barPosition + barWidth > canvas.width){
            barPosition = canvas.width - barWidth;
        }
    }
    else if(leftPressed) {
        barPosition -= 7;
        if (barPosition < 0){
            barPosition = 0;
        }
    }
}




