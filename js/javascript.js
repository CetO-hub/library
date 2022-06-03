// Selectors
const isBookGrid = document.querySelector(".book-grid");
const addBookButton = document.querySelector(".add-book");
const submitBook = document.querySelector(".submit-book");
const isOverlay = document.querySelector(".overlay");
const isBookFormContainer = document.querySelector(".book-form-container");

// Variables
let isLibrary = [];
let isCounterID = 0;

// Constructors
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.id = getID();
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
  const isRead = document.createElement("button");
  const isRemoveBook = document.createElement("button");

  createAuthorHead.textContent = "Author";
  createTitleHead.textContent = "Title";
  createPagesHead.textContent = "Pages";
  createAuthor.textContent = book.author;
  createTitle.textContent = book.title;
  createPages.textContent = book.pages;
  createDiv.dataset.id = book.id;
  console.log(createDiv.dataset.id);
  isRemoveBook.textContent = "Remove Book";

  if (book.read === true) {
    isRead.textContent = "Book read";
    isRead.classList.add("card-book-read");
  } else {
    isRead.textContent = "Book not read";
    isRead.classList.add("card-book-not-read");
  }
  createDiv.appendChild(createAuthorHead);
  createDiv.appendChild(createAuthor);
  createDiv.appendChild(createTitleHead);
  createDiv.appendChild(createTitle);
  createDiv.appendChild(createPagesHead);
  createDiv.appendChild(createPages);
  createDiv.appendChild(isRead);
  createDiv.appendChild(isRemoveBook);
  isBookGrid.appendChild(createDiv);
  addBookButton.parentNode.insertBefore(createDiv, addBookButton);
  createDiv.classList.add("card");

  createAuthorHead.classList.add("card-book-head");
  createTitleHead.classList.add("card-book-head");
  createPagesHead.classList.add("card-book-head");
  createAuthor.classList.add("card-book");
  createTitle.classList.add("card-book");
  createPages.classList.add("card-book");
  isRemoveBook.classList.add("card-remove");
};

const toggleReadStatus = (event) => {
  if (event.target.textContent === "Book read") {
    event.target.textContent = "Book not read";
    event.target.className = "card-book-not-read";
  } else {
    event.target.textContent = "Book read";
    event.target.className = "card-book-read";
  }
};

const removeBook = (event) => {
  const isID = event.target.parentNode.getAttribute("data-id");
  isLibrary = isLibrary.filter((book) => book.id != isID);
  updateDisplayLibrary(isLibrary);
};

const getID = () => {
  return (isCounterID += 1);
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
  let isValid = document.querySelector(".book-form").checkValidity();
  if (!isValid) {
    document.querySelector(".book-form").reportValidity();
  } else {
    removeActive();
    const isAuthor = document.querySelector("#author").value;
    const isTitle = document.querySelector("#title").value;
    const isPages = document.querySelector("#pages").value;
    const isRead = document.querySelector("#book-read").checked;

    let newBook = new Book(isAuthor, isTitle, isPages, isRead);
    isLibrary.push(newBook);
    updateDisplayLibrary(isLibrary);
  }
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

submitBook.addEventListener("click", (e) => {
  addBookToLibrary(e);
});

document.body.addEventListener("click", (event) => {
  if (
    event.target.className == "card-book-read" ||
    event.target.className == "card-book-not-read"
  ) {
    toggleReadStatus(event);
  }
  return;
});

document.body.addEventListener("click", (event) => {
  if (event.target.className == "card-remove") {
    removeBook(event);
  }
});
