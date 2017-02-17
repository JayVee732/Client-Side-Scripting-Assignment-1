'use strict';

(function addEvents() {
    document.getElementById('store').addEventListener("click", storeData, false);
})();

function storeData() {
    localStorage.clear();
    var colour = document.getElementById('rectColor').value;
    var x = document.getElementById('xPicker').value;
    var y = document.getElementById('yPicker').value;
    var width = document.getElementById('widthPicker').value;
    var height = document.getElementById('heightPicker').value;

    var fillStyle = colour;
    var fillRectx = x;
    var fillRecty = y;
    var fillRectWidth = width;
    var fillRectHeight = height;

    var canvas = {
        "fillStyle": fillStyle,
        "fillRectx": fillRectx,
        "fillRecty": fillRecty,
        "fillRectWidth": fillRectWidth,
        "fillRectHeight": fillRectHeight
    };

    localStorage.setItem(fillStyle, JSON.stringify(canvas));
}

function renderShape() {

    var c = document.getElementById('output');
    var ctx = c.getContext('2d');

    for (var i = 0; i < localStorage.length; i++) {
        var canvas = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var fillColour = canvas.fillStyle;
        var x = canvas.fillRectx;
        var y = canvas.fillRecty;
        var width = canvas.fillRectWidth;
        var height = canvas.fillRectHeight;
    }

    ctx.fillStyle = fillColour;
    ctx.fillRect(x, y, width, height);
}