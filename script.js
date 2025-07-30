const gridContainer = document.querySelector("#grid-container");
const messageParagraph = document.querySelector("#message");

function hoveredOver(e) {
  if (e.target.classList.contains("grid-item"))
    e.target.classList.add("visited");
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
  gridItem.classList.add("grid-item");

  const gridItemsAmount = squaresPerSide ** 2;
  console.log(gridItemsAmount);
  for (let i = 0; i < gridItemsAmount; i++) {
    gridContainer.appendChild(gridItem.cloneNode());
  }

  messageParagraph.textContent = "New grid created!";
}

gridContainer.addEventListener("mouseover", hoveredOver);
createGrid(10);
