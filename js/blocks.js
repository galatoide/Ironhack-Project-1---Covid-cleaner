let blockRowCount = 2;  //6
let blockColumnCount = 1;  //10
let blockWidth = 75;
let blockHeight = 20;
let blockPadding = 10;
let blockOffsetTop = 30;
let blockOffsetLeft = 30;

let blocks = [];
for(let i=0; i<blockColumnCount; i++) {
    blocks[i] = [];
    for(let j=0; j<blockRowCount; j++) {
        blocks[i][j] = { x: 0, y: 0, status: 1 };
    }
}

function drawBlocks() {
    for(let i=0; i<blockColumnCount; i++) {
        for(let j=0; j<blockRowCount; j++) {
            if(blocks[i][j].status == 1) {
                let blockX = (i*(blockWidth+blockPadding))+blockOffsetLeft;
                let blockY = (j*(blockHeight+blockPadding))+blockOffsetTop;
                
                blocks[i][j].x = blockX;
                blocks[i][j].y = blockY;
                ctx.beginPath();
                ctx.rect(blockX, blockY, blockWidth, blockHeight);
                // ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function collisionDetection() {
    for(let i=0; i<blockColumnCount; i++) {
        for(let j=0; j<blockRowCount; j++) {
            let b = blocks[i][j];
            if(b.status == 1) {
                if(x > b.x && x < b.x+blockWidth && y > b.y && y < b.y+blockHeight) {
                    speedY = -speedY;
                    b.status = 0;
                    points++;

                    if (points === blockRowCount * blockColumnCount) {
                        // ctx.clearRect(0, 0, canvas.width, canvas.height)
                        gameOver();
                        console.log('GAME OVER');
                        gameStatus = 'game-over'
                    }
                }
            }
        }
    }
}

function gameOver() {
    // ctx.save();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.font = "30px Arial";

    ctx.fillText(`GAME OVER!`, canvas.width / 3, canvas.height / 3);
    if (points <= 1){
        ctx.fillText(`YOU HIT ${points} BLOCK!`, canvas.width / 3,canvas.height / 2);
    }
    if (points > 1){
        ctx.fillText(`YOU HIT ${points} BLOCKS!`, canvas.width / 3,canvas.height / 2);
    };
    // ctx.restore();
  }
