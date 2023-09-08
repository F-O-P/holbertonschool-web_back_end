export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw TypeError('brand must be a string');
    } else if (typeof motor !== 'string') {
      throw TypeError('motor must be a string');
    } else if (typeof color !== 'string') {
      throw TypeError('color must be a string');
    } else {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  }

  cloneCar() {
    return new this.consructor(this._brand, this._motor, this._color);
  }
}
