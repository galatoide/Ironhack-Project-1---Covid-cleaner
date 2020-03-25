let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

let points = 0;

function drawPoints() {
    ctx2.save();
    ctx2.font = "36px Arial";
    ctx2.fillStyle = 'green';
    ctx2.fillText("Score: " + points, canvas2.width - 830, 50);
    ctx2.restore();
}