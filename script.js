const gridContainer = document.querySelector("#grid-container");
const newGridInputBox = document.querySelector("#squares-input");
const newGridButton = document.querySelector("#squares-apply");
const messageParagraph = document.querySelector("#message");
const noteMessageParagraph = document.querySelector("#note-message");

function hoveredOver(e) {
  if (e.target.classList.contains("grid-item"))
    e.target.style.opacity = +e.target.style.opacity + 0.1;
}

function deleteGrid() {
  messageParagraph.textContent = "Deleting grid...";

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  messageParagraph.textContent = "Old grid deleted.";
}

function createGrid(squaresPerSide) {
  messageParagraph.textContent = "Creating new grid...";

  const gridItemHeight = 100 / squaresPerSide;
  const gridItemWidth = 100 / squaresPerSide;

  const gridItem = document.createElement("div");
  gridItem.style.height = gridItemHeight + "%";
  gridItem.style.width = gridItemWidth + "%";
  gridItem.style.opacity = 0;
  gridItem.classList.add("grid-item");

  const gridItemsAmount = squaresPerSide ** 2;
  console.log(gridItemsAmount);
  for (let i = 0; i < gridItemsAmount; i++) {
    // There are 256 ** 3 possible rgb codes for colors
    let randomNumber = Math.floor(Math.random() * 256 ** 3);
    let RCode = randomNumber % 256;
    randomNumber = Math.floor(randomNumber / 256);
    let GCode = randomNumber % 256;
    randomNumber = Math.floor(randomNumber / 256);
    let BCode = randomNumber % 256;

    let newGridItem = gridItem.cloneNode();
    newGridItem.style.backgroundColor =
      "rgb(" + RCode + ", " + GCode + ", " + BCode + ")";

    gridContainer.appendChild(newGridItem);
  }

  messageParagraph.textContent = "New grid created!";
}

gridContainer.addEventListener("mouseover", hoveredOver);

newGridButton.addEventListener("click", (e) => {
  deleteGrid();
  if (newGridInputBox.value < 0) {
    noteMessageParagraph.textContent =
      "NOTE: there must be at least 1 square per side inputed!";
    newGridInputBox.value = 1;
  } else if (newGridInputBox.value > 100) {
    noteMessageParagraph.textContent =
      "NOTE: there must be at most 100 squares per side inputed!";
    newGridInputBox.value = 100;
  } else {
    noteMessageParagraph.textContent = "";
  }
  createGrid(newGridInputBox.value);
});

createGrid(10);
