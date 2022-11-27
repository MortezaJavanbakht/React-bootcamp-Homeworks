class Shape {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  getPerimeter() {
    return 0;
  }
  getArea() {
    return 0;
  }
}

class Polygon extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
  get width() {
    return this._width;
  }
  set width(value) {
    this._width = value;
  }
  get height() {
    return this._height;
  }
  set height(value) {
    this._height = value;
  }
  getPerimeter() {
    return this._width * 2 + this.height * 2;
  }
  getArea() {
    return this._width * this._height;
  }
}
