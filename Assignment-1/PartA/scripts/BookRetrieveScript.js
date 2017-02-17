'use strict';

(function addEvents() {
    document.getElementById('clear').addEventListener("click", clearData, false);
    document.getElementById('remove').addEventListener("click", removeOneBook, false);
})();

function retrieveData() {
    for (var i = 0; i < localStorage.length; i++) {
        var book = JSON.parse(localStorage.getItem(localStorage.key(i)));
        console.log(localStorage.key(i));
        document.getElementById('output').innerHTML += 'Book Name: ' + book.name + '<br/>' +
                                                         'Book ISBN: ' + book.isbn + '<br/>' +
                                                         'Book Publisher: ' + book.publisher + '<br/>' + '<br/>';
    }
}

function removeOneBook() {
    var x = document.getElementById("removeText").value;
    //Broken, will fix
    for (var i = 0; i < localStorage.length; i++) {
        var book = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if(x == book.name) {
            localStorage.removeItem(book);
        }
    }
    location.reload();
}

function clearData() {
    localStorage.clear();
    document.getElementById('output').innerHTML = "";
    location.reload();
}