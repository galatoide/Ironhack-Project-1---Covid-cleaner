livesImage = new Image();
livesImage.src = '/images/lives.png'

let lives = 1;

function drawLives(){
    ctx2.save();
    ctx2.font = "16px Arial";
    // ctx2.fillStyle = "#0095DD";
    // ctx2.fillText("Lives: "+lives, canvas.width-65, 20);
    ctx2.drawImage(livesImage, canvas.width-65, 0, 70,70)
    ctx2.drawImage(livesImage, canvas.width-110, 0, 70,70)
    ctx2.drawImage(livesImage, canvas.width-155, 0, 70,70)
    ctx2.restore();
}

