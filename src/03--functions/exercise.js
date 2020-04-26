function min(a, b) {
  if (a < b) {
    return a
  } else {
    return b
  }
}

function isEven(num) {
  if (num == 1) {
    return false
  } else if (num == 0) {
    return true
  }
  return isEven(num - 2)
}

function countBs(text) {
  return countChars(text, char = "B")
}

function countChars(text, char) {
  let count = 0;
  let i;
  for (i = 0; i < text.length; i++) {
    if (text[i] == char) {
      count += 1
    }
  }
  return count
}

exports._test = {
  min: min,
  isEven: isEven,
  countBs: countBs,
}
