let points = 0;

function drawPoints() {
    ctx.font = "16px Arial";
    // ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+points, canvas.width / 2 - 30, 20);
}