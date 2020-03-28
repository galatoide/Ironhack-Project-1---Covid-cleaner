let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

let points = 0;

function drawPoints() {
    ctx2.save();
    ctx2.font = "36px exo2";
    ctx2.fillStyle = 'white';
    ctx2.fillText("Vírus: " + points, canvas2.width - 180, 50);
    ctx2.restore();

    ctx2.save();
    ctx2.font = "46px exo2";
    ctx2.fillStyle = 'white';
    ctx2.fillText("COVID CLEANER", canvas2.width - 620, 50);
    ctx2.restore();
}