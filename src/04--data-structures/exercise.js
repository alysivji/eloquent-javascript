function range(min, max, step = 1) {
  values = Array()
  if (step > 0) {
    for (let i = min; i <= max; i += step) {
      values.push(i)
    }
  } else {
    for (let i = min; i >= max; i += step) {
      values.push(i)
    }
  }

  return values
}

function sum(range) {
  let result = 0
  for (let value of range) {
    result += Number(value)
  }
  return result
}

function reverseArray(values) {
  let reversedValues = [];
  for (let value of values) {
    reversedValues.unshift(value)
  }
  return reversedValues
}

function reversedArrayInPlace(values) {
  for (let i = 0; i < parseInt(values.length / 2); i++) {
    temp = values[i]
    values[i] = values[values.length - i - 1]
    values[values.length - i - 1] = temp
  }
  return values
}

function arrayToList(values) {
  item = null
  for (let val of Array.from(values).reverse()) {
    item = prepend(val, item)
  }
  return item
}

function listToArray(list) {
  let values = []
  curr = Object.assign(list)
  do {
    ({ value, rest } = curr);
    values.push(value);
    curr = rest;
  } while (curr != null);
  return values;
}

function prepend(element, list) {
  return {
    value: element,
    rest: list,
  }
}

function nth(list, n) {
  arr = listToArray(list)
  console.log(arr)
  return arr[n]
}

function deepEqual(first, second) {
  // TODO
}

exports._test = {
  range: range,
  sum: sum,
  reverseArray: reverseArray,
  reversedArrayInPlace: reversedArrayInPlace,
  listToArray: listToArray,
  arrayToList: arrayToList,
  nth: nth,
  deepEqual: deepEqual,
}
