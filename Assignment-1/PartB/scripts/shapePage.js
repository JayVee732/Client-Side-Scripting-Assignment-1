'use strict';

(function addEvents() {
    document.getElementById('store').addEventListener("click", storeData, false);
})();

function storeData() {
    localStorage.clear();
    //Sets the inner and outer colour
    var borderColour = document.getElementById('borderColour').value;
    var fillColour = document.getElementById('fillColour').value;
    var points = document.getElementById('points').value;

    var objBorderColour = borderColour;
    var objFillColour = fillColour;
    var objPoints = points;

    var canvas = {
        //Object for canvas
        "objBorderColour": objBorderColour,
        "objFillColour": objFillColour,
        "objPoints": objPoints
    };

    localStorage.setItem(objPoints, JSON.stringify(canvas));
}