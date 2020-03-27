livesImage = new Image();
livesImage.src = '/images/lives.png'

let lives = 1;

function drawLives(){
    ctx2.font = "36px exo2";
    ctx2.fillText("Lives: ", canvas2.width-850, 50);

    if (lives == 3) {
        ctx2.drawImage(livesImage, canvas2.width-770, 0, 70,70)
        ctx2.drawImage(livesImage, canvas2.width-720, 0, 70,70)
        ctx2.drawImage(livesImage, canvas2.width-670, 0, 70,70)
    } else if (lives == 2){
        ctx2.drawImage(livesImage, canvas2.width-770, 0, 70,70)
        ctx2.drawImage(livesImage, canvas2.width-720, 0, 70,70)
    } else if (lives == 1){
        ctx2.drawImage(livesImage, canvas2.width-770, 0, 70,70)
    }


    // ctx2.save();
    // ctx2.font = "16px exo2";
    // ctx2.fillStyle = getRandomColor();
    // ctx2.fillText("Lives: "+lives, canvas.width-65, 20);
    // ctx2.drawImage(livesImage, canvas2.width-65, 0, 70,70)
    // ctx2.drawImage(livesImage, canvas2.width-110, 0, 70,70)
    // ctx2.drawImage(livesImage, canvas2.width-155, 0, 70,70)
    // ctx2.restore();
}

// class Lives {
//     constructor() {
//         this.image = new Image() ;
//         this.image.src = '/images/lives.png'
//         this.x = canvas2.width-65;
//         this.y = 0;
//         this.w = 70;
//         this.h = 70;
//     }

//     drawe() {
//         ctx2.drawImage(this.image, this.x, this.y, this.w, this.h);
//       }
// }


