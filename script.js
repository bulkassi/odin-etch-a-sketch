const gridContainer = document.querySelector("#grid-container");

function hoveredOver(e) {
  if (e.target.classList.contains("grid-item"))
    e.target.classList.add("visited");
}

function deleteGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function createGrid(squaresPerSide) {
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
}

gridContainer.addEventListener("mousemove", hoveredOver);
deleteGrid();
createGrid(10);
