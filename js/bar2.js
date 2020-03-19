let bar2Height = 10;
let bar2Width = 100;
let bar2PositionX = 0;
let bar2PositionY = canvas.height - 15;

let  left2Pressed = false
let  right2Pressed = false

function bar2(){
    ctx.beginPath();
    ctx.rect(bar2PositionX, bar2PositionY, bar2Width, bar2Height);
    // ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();


}

document.addEventListener('keydown', keyDownHandler2, false);
document.addEventListener('keyup', keyUpHandler2, false);

function keyDownHandler2(x) {
    if ( x.key === 'Left' || x.key === 'ArrowLeft'){
        left2Pressed = true;
    } else if ( x.key === 'Right' || x.key === 'ArrowRight'){
        right2Pressed = true;
    }
}

function keyUpHandler2(x) {
    if ( x.key === 'Left' || x.key === 'ArrowLeft'){
        left2Pressed = false;
    } else if ( x.key === 'Right' || x.key === 'ArrowRight'){
        right2Pressed = false;
    }
}

function controls2() {
    if(right2Pressed) {
        bar2PositionX += 7;
        if (bar2PositionX + bar2Width > canvas.width){
            bar2PositionX = canvas.width - bar2Width;
        }
    }
    else if(left2Pressed) {
        bar2PositionX -= 7;
        if (bar2PositionX < 0){
            bar2PositionX = 0;
        }
    }
}




