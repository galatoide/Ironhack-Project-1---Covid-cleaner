let blockRowCount = 26;  //6
let blockColumnCount = 10;  //10
let blockWidth = 75;  //75
let blockHeight = 20;  //20
let blockPadding = 10; //10
let blockTopStart = -700; //30
let blockLeftStart = 20; //20

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
                let blockX = (i*(blockWidth+blockPadding))+blockLeftStart;
                let blockY = (j*(blockHeight+blockPadding))+blockTopStart;
                
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

// collision between ball and blocks
function collisionDetection() {
    for(let i=0; i<blockColumnCount; i++) {
        for(let j=0; j<blockRowCount; j++) {
            let b = blocks[i][j];
            if(b.status == 1) {
                if(x > b.x && x < b.x+blockWidth && y > b.y && y < b.y+blockHeight) {
                    speedY = -speedY;
                    b.status = 0;
                    points+= 1;

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
