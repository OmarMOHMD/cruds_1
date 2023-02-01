var booksList = document.querySelector('.app__list');
var container = document.querySelector('.app__content');
var searchInput = document.querySelector('.app__search input');
var bookInput = document.querySelector('.app__add input');

var books = ['How to code', 'Learn HTML' , 'Learn CSS' ,'Learn JS'];

function renderBooks(booksEdit) {
    booksList.innerHTML ='';

    for (var i=0; i < booksEdit.length; i++) {
        booksList.innerHTML += `
        <li class = "app__book">
            <span>${booksEdit[i]}</span>
            <button class="app__delete" onclick="deleteBook(${i})">
                <img src="./assets/images/garbage.png" alt="Delete Icon">
            </button>
        </li>
        `;``
    }
}

renderBooks(books);

function addBook(e) {
    e.preventDefault();
    var bookTitle = bookInput.value;

    books.push(bookTitle);

    renderBooks(books);
    bookInput.value = '';
}

function deleteBook(index) {
    books.splice(index, 1);

    renderBooks(books);
}

function preventSubmit(e) {
    e.preventDefault();
}

function searchBooks() {
var search = searchInput.value.toLowerCase();
var matchedBooks =[];
matchedBooks =books.filter((book)=>book.toLowerCase().includes(search));

renderBooks(matchedBooks);
}

function checkLocalStorage(){
    if (localStorage.data) {
        return JSON.parse(localStorage.data);
    }
}