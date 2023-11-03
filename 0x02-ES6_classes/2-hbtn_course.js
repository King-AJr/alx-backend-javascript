function areAllStrings(arr) {
  return arr.every((item) => typeof item === 'string');
}

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) === 'string' && typeof (length) === 'number' && areAllStrings(students) === true) {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof (n) === 'string') {
      this._name = n;
    }
  }

  get length() {
    return this._length;
  }

  set length(n) {
    if (typeof (n) === 'number') {
      this._length = n;
    }
  }

  get students() {
    return this._length;
  }

  set students(n) {
    if (areAllStrings(n)) {
      this._students = n;
    }
  }
}
