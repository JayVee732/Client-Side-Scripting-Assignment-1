'use strict';

(function addEvents() {
    if (document.getElementById('storePage') == storePage) {
        document.getElementById('store').addEventListener("click", storeData, false);
        document.getElementById('clear').addEventListener("click", clearData, false);
    }

    else if (document.getElementById('storePage') !== storePage) {
        document.getElementById('clear').addEventListener("click", clearData, false);
    }
})();

function storeData() {
    var name = document.getElementById('bookName').value;
    var isbn = document.getElementById('bookISBN').value;
    var publisher = document.getElementById('bookPublisher').value;

    var book = {
        "name": name,
        "isbn": isbn,
        "publisher": publisher
    };
    localStorage.setItem(isbn, JSON.stringify(book));
}

function retrieveData() {
    for (var i = 0; i < localStorage.length; i++) {
        var book = JSON.parse(localStorage.getItem(localStorage.key(i)));
        document.getElementById('output').innerHTML += book.name + ' ' + book.isbn + ' ' + book.publisher + '<br/>';
    }
    //window.onload = retrieveData;
}

function clearData() {
    localStorage.clear();
    document.getElementById('output').innerHTML = "";
    location.reload();
}