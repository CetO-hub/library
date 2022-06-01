// Selectors
const isBookGrid = document.querySelector(".book-grid");
const addBookButton = document.querySelector(".add-book");
const submitBook = document.querySelector(".submit-book");
const isOverlay = document.querySelector(".overlay");
const isBookFormContainer = document.querySelector(".book-form-container");

// Variables
const isLibrary = [
  { author: "a", title: "a", pages: 1, read: false },
  { author: "a", title: "a", pages: 1, read: false },
  { author: "a", title: "a", pages: 1, read: false },
];

// Constructors
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

// DOM manipulation
const updateDisplayLibrary = (isLibrary) => {
  for (let book of isLibrary) {
    createBookGrid(book);
  }
};

const createBookGrid = (book) => {
  const createDiv = document.createElement("div");
  const createAuthor = document.createElement("p");
  const createTitle = document.createElement("p");
  const createPages = document.createElement("p");

  createAuthor.textContent = book.author;
  createTitle.textContent = book.title;
  createPages.textContent = book.pages;
  createDiv.appendChild(createAuthor);
  createDiv.appendChild(createTitle);
  createDiv.appendChild(createPages);
  isBookGrid.appendChild(createDiv);
  addBookButton.parentNode.insertBefore(createDiv, addBookButton);
  createDiv.classList.add("card");
};

// Functions

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

  console.log(newBook);
  console.log(isAuthor);
  console.log(isTitle);
  console.log(isPages);
  console.log(isLibrary);
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
