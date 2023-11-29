let library = [];

function addBook() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;

  if (title !== '' && author !== '') {
    let book = {
      title: title,
      author: author
    };

    library.push(book);
    displayBooks();
  }
}

function displayBooks() {
  let booksList = document.getElementById('books');
  booksList.innerHTML = '';

  for (let i = 0; i < library.length; i++) {
    let bookItem = document.createElement('li');
    bookItem.classList.add('bookItem');

    let bookTitle = document.createElement('h3');
    bookTitle.textContent = library[i].title;

    let bookAuthor = document.createElement('p');
    bookAuthor.textContent = 'Автор: ' + library[i].author;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.onclick = function() {
      deleteBook(i);
    };

    let editButton = document.createElement('button');
    editButton.textContent = 'Редактировать';
    editButton.onclick = function() {
      editBook(i);
    };

    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor);
    bookItem.appendChild(deleteButton);
    bookItem.appendChild(editButton);

    booksList.appendChild(bookItem);
  }
}

function deleteBook(index) {
  library.splice(index, 1);
  displayBooks();
}

function editBook(index) {
  let titleInput = document.getElementById('title');
  let authorInput = document.getElementById('author');
  titleInput.value = library[index].title;
  authorInput.value = library[index].author;
  deleteBook(index);
}

function searchBooks() {
  let searchTitle = document.getElementById('searchTitle').value.toLowerCase();
  let filteredLibrary = [];

  for (let i = 0; i < library.length; i++) {
    let bookTitle = library[i].title.toLowerCase();

    if (bookTitle.includes(searchTitle)) {
      filteredLibrary.push(library[i]);
    }
  }

  library = filteredLibrary;
  displayBooks();
}

function sortBooks() {
  library.sort(function(a, b) {
    let titleA = a.title.toLowerCase();
    let titleB = b.title.toLowerCase();

    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  displayBooks();
}
