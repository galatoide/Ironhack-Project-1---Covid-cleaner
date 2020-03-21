let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let gameStatus = 'on';
let animationId;


function collision(){
    // change direction when hit left and right
    if (x + speedX < ballRadius || x + speedX > canvas.width-ballRadius){
        speedX = -speedX;
        ctx.fillStyle = '#0075DD';
        ctx.fillStyle = getRandomColor();
        // console.log('Ball Position \nx:'+ x + ' y:' + y)
    }
    // change direction when hit top and bottom
    if (y + speedY < ballRadius){
        speedY = -speedY;
        speedY +=0.1; //putting more speed on the ball
        speedX +=0.1; //each time the bar hits the ball
        ctx.fillStyle = getRandomColor();
        // console.log('Ball Position \nx:'+ x + ' y:' + y)
    } else if(y + speedY > canvas.height-ballRadius) {
        if(x > barPositionX && x < barPositionX + barWidth) {
            speedY = -speedY;
        }
        else {
            // alert("GAME OVER");
            document.location.reload();
            clearInterval(interval); 
            console.log('COLLISION')
        }
    }
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    collision()
    ball();
    bar();
    controls();
    drawBlocks();
    collisionDetection();
    drawPoints();
    
    x += speedX;
    y += speedY;

    
}
// let interval = setInterval(draw, 10);

function animation() {
    draw();

    animationId = window.requestAnimationFrame(() => {
        if (gameStatus === "on") {
          animation();
        }
        if (this.gameStatus === "game-over") {
            window.cancelAnimationFrame(animation);
            gameOver();
          }
    });
}

window.requestAnimationFrame(animation);