var assert = require('assert');
require('./scripts.js');

function flatten(arrayOfArrays) {
  return arrayOfArrays.reduce((a, b) => a.concat(b))
}

my_list = [[2, 3, 4], [5], [6, 7, 8, 9]]
result = flatten(my_list)
assert.deepEqual(result, [2, 3, 4, 5, 6, 7, 8, 9])


function loop(value, testFunction, updateFunction, bodyFunction) {
  do {
    result = testFunction(value)
    if (result == false) {
      return
    }
    bodyFunction(value)
    value = updateFunction(value)
  } while (true);
}

result = loop(1, (x) => x <= 5, (x) => x + 1, console.log)

function everyLoop(arr, test) {
  for (let item in arr) {
    if (!test(item)) {
      return false
    }
  }
  return true
}

assert.equal(everyLoop([1, 2, 3], (x) => x < 5), true)
assert.equal(everyLoop([1, 2, 3], (x) => x > 5), false)

function everySome(arr, test) {
  return arr.map((item))
}

assert.equal(everyLoop([1, 2, 3], (x) => x < 5), true)
assert.equal(everyLoop([1, 2, 3], (x) => x > 5), false)


function countBy(items, groupName) {
  // ripped foom the book
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

result = countBy(SCRIPTS, (script) => script.direction)
console.log(result)
