class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    // this.book = book;
    // console.log(book);
    const list = document.getElementById('book-list');
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class='delete'>X</a></td>
    `
    list.appendChild(tr);
  }

  showAlert(message, className) {
    const container = document.querySelector('.container');
    const form = document.getElementById('book-form');

    const alertDiv = document.createElement('div');
    alertDiv.className = `${className}`;
    alertDiv.appendChild(document.createTextNode(`${message}`));
    container.insertBefore(alertDiv, form);

    setTimeout(() => {
      alertDiv.remove();
    }, 2000);

  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

document.getElementById('book-form').addEventListener('submit', e => {
  // console.log('test');

  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);

  const ui = new UI();

  // Validate 
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Add book to list!', 'error');
  } else {
    ui.showAlert('Book added', 'success');
    // Add book to list
    ui.addBookToList(book);
    // Clear fields
    ui.clearFields();
  }



  // Non-OOP approach
  // const tr = document.createElement('tr');
  // const tdTitle = document.createElement('td');
  // const tdAuthor = document.createElement('td');
  // const tdIsbn = document.createElement('td');

  // tdTitle.appendChild(document.createTextNode(`${title}`));
  // tdAuthor.appendChild(document.createTextNode(`${author}`));
  // tdIsbn.appendChild(document.createTextNode(`${isbn}`));

  // tr.appendChild(tdTitle);
  // tr.appendChild(tdAuthor);
  // tr.appendChild(tdIsbn);

  // document.getElementById('book-list').appendChild(tr);

  e.preventDefault();
});

