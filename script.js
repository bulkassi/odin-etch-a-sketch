const gridContainer = document.querySelector("#grid-container");

function hoveredOver(e) {
  if (e.target.classList.contains("grid-item"))
    e.target.classList.add("visited");
}

gridContainer.addEventListener("mousemove", hoveredOver);
