balloon = document.getElementById("balloon")
let currSize = 10
balloon.style.fontSize = (currSize) + "px";

window.addEventListener("keydown", keyDown);

function keyDown(event) {
  if (event.code == "ArrowUp") {
    currSize += 5;

    if (currSize >= 150) {
      balloon.innerHTML = "💥";
      window.removeEventListener("keydown", keyDown);
    }

    balloon.style.fontSize = (currSize) + "px";
  } else if (event.code == "ArrowDown") {
    currSize -= 5;
    balloon.style.fontSize = (currSize) + "px";
  }
}
