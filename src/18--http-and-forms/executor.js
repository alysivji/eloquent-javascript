let form = document.querySelector("form");
form.addEventListener("submit", event => {
  console.log("submitted");
  event.preventDefault();

  let codeArea = document.getElementById("code")
  code = codeArea.value;
  result = evalAndReturn(code);

  let output = document.getElementById("result")
  output.innerText = result;
  console.log(result);
})


function evalAndReturn(code) {
  return eval(code);
}
