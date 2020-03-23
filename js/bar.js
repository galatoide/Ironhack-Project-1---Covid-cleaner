let barHeight = 10; //10
let barWidth = 10000; //100
let barPositionX = (canvas.width - barWidth) / 2;
let barPositionY = canvas.height - 15;

let  leftPressed = false
let  rightPressed = false

function bar(){
    ctx.beginPath();
    ctx.rect(barPositionX, barPositionY, barWidth, barHeight);
    // ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();


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
    var relativeX = x.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        barPositionX = relativeX - barWidth/2;
    }
}

function controls() {
    if(rightPressed) {
        barPositionX += 7;
        if (barPositionX + barWidth > canvas.width){
            barPositionX = canvas.width - barWidth;
        }
    }
    else if(leftPressed) {
        barPositionX -= 7;
        if (barPositionX < 0){
            barPositionX = 0;
        }
    }
}




