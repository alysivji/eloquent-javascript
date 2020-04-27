var assert = require('assert');

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

assert.deepEqual(new Vec(1, 1).plus(new Vec(1, 1)), new Vec(2, 2))
assert.deepEqual(new Vec(1, 1).minus(new Vec(1, 1)), new Vec(0, 0))
assert.equal(new Vec(1, 1).length, Math.sqrt(2))


class Group {
  constructor() {
    this.groups = [];
  }

  get length() {
    return this.groups.length;
  }

  index(idx) {
    return this.groups[idx];
  }

  add(item) {
    if (!this.groups.includes(item)) {
      this.groups.push(item);
    }
  }

  delete(item) {
    let index = this.groups.indexOf(item)
    if (index < 0) {
      return false
    }
    this.groups.splice(index, 1);
    return true;
  }

  static fromIterable(values) {
    let result = new Group();
    for (let value in values) {
      result.add(value);
    }
    return result;
  }
}

groups = new Group()
groups.add(1)
groups.add(2)
console.log(groups)
groups.add(3)
console.log(groups)
groups.delete(2)
console.log(groups)

g = Group.fromIterable([1, 2, 3, 4])
g.delete(3)
console.log(g)

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }

  next() {
    if (this.index >= this.group.length) {
      return { done: true };
    }

    let value = this.group.index(this.index);
    this.index++;
    return { value, done: false };
  }
}
Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

console.log(groups);
for (let item of groups) {
  console.log(item);
};
