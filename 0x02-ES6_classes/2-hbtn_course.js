function areAllStrings(arr) {
  return arr.every((item) => typeof item === 'string');
}

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof n !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = n;
  }

  get length() {
    return this._length;
  }

  set length(n) {
    if (typeof n !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = n;
  }

  get students() {
    return this._length;
  }

  set students(n) {
    if (!areAllStrings(n)) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = n;
  }
}
