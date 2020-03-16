let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function collision(){
    // change direction when hit left and right
    if (x + speedX < ballRadius || x + speedX > canvas.width-ballRadius){
        speedX = -speedX;
        ctx.fillStyle = '#0075DD';
        ctx.fillStyle = getRandomColor();
        console.log('Ball Position \nx:'+ x + ' y:' + y)
    }
    // change direction when hit top and bottom
    if (y + speedY < ballRadius || y + speedY >canvas.height-ballRadius){
        speedY = -speedY;
        ctx.fillStyle = getRandomColor();
        console.log('Ball Position \nx:'+ x + ' y:' + y)
    }


}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball();
    bar();
    collision()
    controls()
    
    x += speedX;
    y += speedY;

    
}
setInterval(draw, 10);

console.log('testing')