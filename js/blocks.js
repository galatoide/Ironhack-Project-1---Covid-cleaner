let blockRowCount = 6;
let blockColumnCount = 10;
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
    for(var i=0; i<blockColumnCount; i++) {
        for(var j=0; j<blockRowCount; j++) {
            var b = blocks[i][j];
            if(x > b.x && x < b.x+blockWidth && y > b.y && y < b.y+blockHeight) {
                speedY = -speedY;
            }
        }
    }
}