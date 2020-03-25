livesImage = new Image();
livesImage.src = '/images/lives.png'

let lives = 1;

function drawLives(){
    ctx.save();
    ctx.font = "16px Arial";
    // ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
    ctx.drawImage(livesImage, canvas.width-65, 0, 70,70)
    ctx.drawImage(livesImage, canvas.width-110, 0, 70,70)
    ctx.drawImage(livesImage, canvas.width-155, 0, 70,70)
    ctx.restore();
}

