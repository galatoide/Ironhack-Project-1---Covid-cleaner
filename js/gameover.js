    gameOverImage = new Image();
    gameOverImage.src = '/images/gameover.png';

function gameOver() {

    window.cancelAnimationFrame(animationId);

    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.font = "60px Arial";
    
    ctx.drawImage(gameOverImage,0,0, canvas.width, canvas.height)  //game over image
    
    // ctx.fillText(`GAME OVER!`, canvas.width / 3, canvas.height / 3);
    ctx.restore();
    if (points <= 1){
        ctx.fillText(`YOU HIT ${points} BLOCK!`, canvas.width / 3,canvas.height - 150 );
    }
    if (points > 1){
        ctx.fillText(`YOU HIT ${points} BLOCKS!`, canvas.width / 3,canvas.height - 200);
    };

    ctx.fillText(`CLICK TO TRY AGAIN`, canvas.width / 3, canvas.height - 250);
    ctx.restore();
  }