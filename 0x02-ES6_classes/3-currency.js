export default class Currency {
  constructor(code, name) {
    if (typeof (code) === 'string' && typeof (name) === 'string') {
      this._code = code;
      this._name = name;
    }
  }

  get code() {
    return this._code;
  }

  set code(n) {
    if (typeof (n) === 'string') {
      this._code = n;
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

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
