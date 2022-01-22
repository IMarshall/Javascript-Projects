var c = document.getElementById("canvas");

var canvas = c.getContext("2d");

function diagLine() {
    canvas.moveTo(0, 0);
    canvas.lineTo(500, 250);
    canvas.stroke();
}

function circle() {
    canvas.beginPath();
    canvas.arc(250,125,100,0, 2 * Math.PI);
    canvas.stroke();
}

function circleGradient() {
    var grd = canvas.createRadialGradient(250, 125, 25, 250, 125, 300);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "black");
    canvas.fillStyle = grd;
    canvas.fillRect(0, 0, 500, 250);
}