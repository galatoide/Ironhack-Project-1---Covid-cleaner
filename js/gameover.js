    gameOverImage = new Image();
    gameOverImage.src = '/images/gameover.png';

function gameOver() {

    window.cancelAnimationFrame(animationId);

    let gameOverSound = new Audio("/sounds/game-over.mp3")
    gameOverSound.play();

    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "60px exo2";
    
    ctx.drawImage(gameOverImage,0,0, canvas.width, canvas.height)  //game over image
    
    // ctx.fillText(`GAME OVER!`, canvas.width / 3, canvas.height / 3);
    // ctx.restore();
    if (points <= 1){
        ctx.fillText(`YOU KILLED ${points} VÍRUS!`, canvas.width - 735,canvas.height - 500 );
    }
    if (points > 1){
        ctx.fillText(`YOU KILLED ${points} VÍRUSES!`, canvas.width - 740,canvas.height - 500);
    };

    ctx.fillText(`CLICK START TO TRY AGAIN`, canvas.width - 820, canvas.height - 100);
    ctx.restore();

    console.log('GAME OVER')
    
  }