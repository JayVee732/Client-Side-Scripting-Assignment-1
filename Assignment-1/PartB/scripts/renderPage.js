'use strict';

function allowDrop(ev) {
    ev.preventDefault();
}

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

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    removeDiv();
}

function removeDiv() {
    playAudio();
    var canvasDiv = document.getElementById('output');
    canvasDiv.parentNode.removeChild(canvasDiv);

    var deleteDiv = document.getElementById('div1');
    deleteDiv.parentNode.removeChild(deleteDiv);

    localStorage.clear();
}

function playAudio() {
    var x = document.getElementById("audioFiles");
    x.play();
}

//Function code for drawStar taken from https://jsfiddle.net/m1erickson/8j6kdf4o/
//Code in deleteDiv https://stackoverflow.com/questions/11080620/how-to-remove-div-elements-in-javascript-using-their-id
//audio code: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play