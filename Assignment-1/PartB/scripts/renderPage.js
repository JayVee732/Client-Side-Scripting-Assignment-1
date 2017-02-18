'use strict';

function renderShape() {

    var c = document.getElementById('output');
    var ctx = c.getContext('2d');

    for (var i = 0; i < localStorage.length; i++) {
        var canvas = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var borderColour = canvas.objBorderColour;
        var fillColour = canvas.objFillColour;
        var points = canvas.objPoints;
        console.log(borderColour, fillColour, points);
    }
    
    drawStar(125, 75, points, 30, 15, borderColour, fillColour);
}

function drawStar(cx, cy, spikes, outerRadius, innerRadius, borderColour, fillColour) {
    var canvas = document.getElementById("output");
    var ctx = canvas.getContext("2d");

    var rot = Math.PI / 2 * 3;
    var x = cx;x
    var y = cy;
    var step = Math.PI / spikes;

    ctx.strokeSyle = "#000";
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius)

    for (var i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y)
        rot += step
    }
    ctx.lineTo(cx, cy - outerRadius)
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = borderColour;
    ctx.stroke();
    ctx.fillStyle = fillColour;
    ctx.fill();

}

//Function code for drawStar taken from https://jsfiddle.net/m1erickson/8j6kdf4o/