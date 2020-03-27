let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let gameStatus = 'game-off';
let animationId;

let backgroundMusic = new Audio("/sounds/House Fire (120 bpm).wav")
    backgroundMusic.play();
    backgroundMusic.loop = true;
let hitBarSound = new Audio("/sounds/hit-bar2.mp3");
let hitBlockSound = new Audio("/sounds/hit-block.mp3")


function collision(){


    // if(ballRight >= barLeft || ballLeft <= barRight){
    //     speedX = -speedX
    //     console.log('BALL COLLISION');
    //     console.log('Ball Position \nx:'+ x + ' y:' + y)
    // }
    // if(ballTop >= barBottom || ballBottom <= barTop){
    //     speedY = -speedY
    // }

    // change direction when hit left and right
    if (x + speedX < ballRadius || x + speedX > canvas.width-ballRadius){
        speedX = -speedX;
        ctx.fillStyle = getRandomColor();
        // console.log('Ball Position \nx:'+ x + ' y:' + y)
    }
    // change direction when hit top and bottom
    if (y + speedY < ballRadius){
        speedY = -speedY;
        // hitBlockSound.play();
        // speedY +=3; //putting more speed on the ball
        // speedX +=-3; //each time the bar hits the ball
        ctx.fillStyle = getRandomColor();
        // console.log('Ball Position \nx:'+ x + ' y:' + y)
    } else if(y + speedY > canvas.height) {
        if(x > barPositionX && x < barPositionX + barWidth) {
            if(y = y - barHeight){
                hitBarSound.play();
                speedY = -speedY;
                speedY +=-0.05;
                speedX +=0.05;
            }
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
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    collision()
    ball();
    bar();
    controls();
    // drawBlocks();
    collisionDetection();
    drawPoints();
    drawLives();

    x += speedX;
    y += speedY;

}
// Control the blocks going down
function updateBlocks() {
    blockTopStart += 5;
}

// setInterval(updateBlocks, 2000)
    

function animation() {
    

    draw();
    drawBlocks();

    if (animationId % 120 === 0){
        // blocks2.push()
        // console.log('HELLO')
    }

    animationId = window.requestAnimationFrame(() => {
        if (gameStatus === "game-on") {
          animation();
        }
        if (gameStatus === "game-over") {
            window.cancelAnimationFrame(animationId);
            gameOver();
            backgroundMusic.pause();
            // document.addEventListener("click", startGame, true);
        }
        if(gameStatus === 'paused'){
            document.addEventListener("click", startGame, true);
            startGame()
            // document.addEventListener("click", startBlocks, true);
        }
    });
}

// window.requestAnimationFrame(animation);   //this was before I created the startGame function


// click to restart!
function restart() {
    if (gameStatus === 'game-over'){
            gameStatus = 'game-on';
            document.location.reload();
    }
}
document.addEventListener("click", restart, true);

    function startBlocks(){
        if(gameStatus === 'game-on'){
            drawBlocks();
            setInterval(updateBlocks, 2000)
            window.requestAnimationFrame(drawBlocks)
        }
    }
    
if (gameStatus === 'game-off'){
    ctx.save();
    ctx.fillStyle = "white";
    ctx.font = "60px exo2";
    ctx.fillText(`Click the start button`, canvas.width - 750, 500 );
    ctx.fillText(`to begin`, canvas.width - 550, 550 );
    ctx.fill();
    ctx.restore();
}