let stack = [];
stack.push(document.body);

found_elements = []
tagToFind = "TABLE"
while (stack.length != 0) {
  element = stack.shift();
  stack = stack.concat(Array.from(element.children));
  if (element.tagName == tagToFind) {
    found_elements.push(element)
  }
}

console.log("result", found_elements)
