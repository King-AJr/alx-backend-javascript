export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // Getter for the brand attribute
  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  // Getter for the motor attribute
  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  // Getter for the color attribute
  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  // Method to clone a Car object
  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
