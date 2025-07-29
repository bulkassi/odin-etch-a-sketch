const gridContainer = document.querySelector("#grid-container");

function hoveredOver(e) {
  e.target.classList.add("visited");
}

gridContainer.addEventListener("mousemove", hoveredOver);
