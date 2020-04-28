// create 1 divs=
// absolute reference where my mouse is

my_divs = []
for (let color in ["green", "blue", "red"]) {
  follower = document.createElement("div");
  follower.style.position = "absolute";
  follower.style.left = '100px';
  follower.style.top = '100px';
  follower.style.width = '30px';
  follower.style.height = '30px';
  follower.style.background = "red";
  document.body.appendChild(follower);
  my_divs.push(follower)
}


function moved(event) {
  my_div = my_divs.shift()
  my_div.style.left = event.clientX;
  my_div.style.top = event.clientY;
  my_divs.push(my_div)
}

window.addEventListener("mousemove", moved);
