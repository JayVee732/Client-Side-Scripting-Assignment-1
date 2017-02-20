'use strict';

(function addEvents() {
    document.getElementById('clear').addEventListener("click", clearData, false);
    document.getElementById('removeOne').addEventListener("click", removeBookMethodOne, false);
    document.getElementById('removeTwo').addEventListener("click", removeBookMethodTwo, false);
})();

function retrieveData() {
    for (var i = 0; i < localStorage.length; i++) {
        var book = JSON.parse(localStorage.getItem(localStorage.key(i)));
        document.getElementById('output').innerHTML += 'Book Name: ' + book.name + '<br/>' +
                                                         'Book ISBN: ' + book.isbn + '<br/>' +
                                                         'Book Publisher: ' + book.publisher + '<br/>' + 
                                                         'Book Date: ' + book.date + '<br/>' + '<br/>';
    }
}

function removeBookMethodOne() {
    var x = document.getElementById("removeName").value;
    //Selects the book and deletes it from the array
    for (var i = 0; i < localStorage.length; i++) {
        var book = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (x == book.name) {
            localStorage.removeItem(book.isbn);
        }
    }
    location.reload();
}

function removeBookMethodTwo() {
    var x = document.getElementById("removeISBN").value;
    //Selects the book and deletes it from the array
    for (var i = 0; i < localStorage.length; i++) {
        var book = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (x == book.isbn) {
            localStorage.removeItem(book.isbn);
        }
    }
    location.reload();
}


function clearData() {
    //Deletes everything from local storage and refreshes the page
    localStorage.clear();
    document.getElementById('output').innerHTML = "";
    location.reload();
}

//localStorage.removeItem(book.name) created with the help of: http://stackoverflow.com/a/10710029/6945041