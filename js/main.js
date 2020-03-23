let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let gameStatus = 'game-on';
let animationId;


function collision(){
    // change direction when hit left and right
    if (x + speedX < ballRadius || x + speedX > canvas.width-ballRadius){
        speedX = -speedX;
        // ctx.fillStyle = '#0075DD';
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
            lives--;
            if(!lives) {
                gameStatus = 'game-over';
                
                
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                speedX = 10;
                speedY= -10;
                barPositionX = (canvas.width-barWidth)/2;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // document.location.reload();  //restart the canvas
            // clearInterval(animation); 
            window.cancelAnimationFrame(animation)
            console.log('BALL FELL')
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
    drawLives();

    x += speedX;
    y += speedY;

}
// Control the blocks going down
function updateBlocks() {
    blockTopStart += 10;
}
    
    setInterval(updateBlocks, 1000)
    

function animation() {
    draw();

if (animationId % 120 === 0){
    blocks2.push()
    // console.log('HELLO')
}

    animationId = window.requestAnimationFrame(() => {
        if (gameStatus === "game-on") {
          animation();
        }
        if (gameStatus === "game-over") {
            window.cancelAnimationFrame(animationId);
            gameOver();
          }
    });
}

window.requestAnimationFrame(animation);


// click to restart!
function restart() {
    if (gameStatus === 'game-over'){
            gameStatus = 'game-on';
            document.location.reload();

    }
}
document.addEventListener("click", restart, true);

