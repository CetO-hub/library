let addBookButton = document.querySelector(".add-book");
let isOverlay = document.querySelector(".overlay");
let isBookFormContainer = document.querySelector(".book-form-container");

const addActive = () => {
  isOverlay.classList.add("active");
  isBookFormContainer.classList.add("active");
};

const removeActive = () => {
  isOverlay.classList.remove("active");
  isBookFormContainer.classList.remove("active");
};

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
