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

class NonPolygon extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    this._radius = value;
  }
  getPerimeter() {
    return 2 * this._radius * Math.PI;
  }
  getArea() {
    return Math.PI * this._radius * this._radius;
  }
}

class Rectangle extends Polygon {
  constructor(name, width, height) {
    super(name, width, height);
  }
}

class Square extends Polygon {
  constructor(name, length) {
    super(name, length, length);
  }
}
