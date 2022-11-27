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
