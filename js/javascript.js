// Selectors
const isBookGrid = document.querySelector(".book-grid");
const addBookButton = document.querySelector(".add-book");
const submitBook = document.querySelector(".submit-book");
const isOverlay = document.querySelector(".overlay");
const isBookFormContainer = document.querySelector(".book-form-container");

// Variables
const isLibrary = [];

// Constructors
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

// DOM manipulation
const updateDisplayLibrary = (isLibrary) => {
  resetGrid();
  for (let book of isLibrary) {
    createBookGrid(book);
  }
};

const createBookGrid = (book) => {
  const createDiv = document.createElement("div");
  const createAuthorHead = document.createElement("p");
  const createAuthor = document.createElement("p");
  const createTitleHead = document.createElement("p");
  const createTitle = document.createElement("p");
  const createPagesHead = document.createElement("p");
  const createPages = document.createElement("p");
  const isRead = document.createElement("p");

  createAuthorHead.textContent = "Author";
  createTitleHead.textContent = "Title";
  createPagesHead.textContent = "Pages";
  createAuthor.textContent = book.author;
  createTitle.textContent = book.title;
  createPages.textContent = book.pages;
  if (book.read === true) {
    isRead.textContent = "Book read";
  } else {
    isRead.textContent = "Book not read";
  }
  createDiv.appendChild(createAuthorHead);
  createDiv.appendChild(createAuthor);
  createDiv.appendChild(createTitleHead);
  createDiv.appendChild(createTitle);
  createDiv.appendChild(createPagesHead);
  createDiv.appendChild(createPages);
  createDiv.appendChild(isRead);
  isBookGrid.appendChild(createDiv);
  addBookButton.parentNode.insertBefore(createDiv, addBookButton);
  createDiv.classList.add("card");
  isRead.classList.add("card-book-read");

  createAuthorHead.classList.add("card-book-head");
  createTitleHead.classList.add("card-book-head");
  createPagesHead.classList.add("card-book-head");
  createAuthor.classList.add("card-book");
  createTitle.classList.add("card-book");
  createPages.classList.add("card-book");
};

// Functions

const resetGrid = () => {
  isBookGrid.textContent = " ";
  isBookGrid.appendChild(addBookButton);
};

const addActive = () => {
  isOverlay.classList.add("active");
  isBookFormContainer.classList.add("active");
};

const removeActive = () => {
  isOverlay.classList.remove("active");
  isBookFormContainer.classList.remove("active");
};

const addBookToLibrary = (e) => {
  e.preventDefault();
  removeActive();
  let isAuthor = document.querySelector("#author").value;
  let isTitle = document.querySelector("#title").value;
  let isPages = document.querySelector("#pages").value;
  let isRead = document.querySelector("#book-read").checked;
  let newBook = new Book(isAuthor, isTitle, isPages, isRead);
  isLibrary.push(newBook);
  updateDisplayLibrary(isLibrary);
};

// Event listeners
addBookButton.addEventListener("click", () => {
  addActive();
});

isOverlay.addEventListener("click", () => {
  removeActive();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    removeActive();
  }
});

submitBook.addEventListener("click", addBookToLibrary);
