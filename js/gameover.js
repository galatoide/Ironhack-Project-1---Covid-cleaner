    gameOverImage = new Image();
    gameOverImage.src = '/images/gameover.png';

function gameOver() {

    window.cancelAnimationFrame(animationId);

    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "60px Arial";
    
    ctx.drawImage(gameOverImage,0,0, canvas.width, canvas.height)  //game over image
    
    // ctx.fillText(`GAME OVER!`, canvas.width / 3, canvas.height / 3);
    // ctx.restore();
    if (points <= 1){
        ctx.fillText(`YOU KILLED ${points} VÍRUS!`, canvas.width - 700,canvas.height - 500 );
    }
    if (points > 1){
        ctx.fillText(`YOU KILLED ${points} VÍRUS!`, canvas.width - 700,canvas.height - 500);
    };

    ctx.fillText(`CLICK TO TRY AGAIN`, canvas.width - 750, canvas.height - 100);
    ctx.restore();

    console.log('GAME OVER')
  }