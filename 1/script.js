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

class Circle extends NonPolygon {
  constructor(name, radius) {
    super(name, radius);
  }
}

class Cylindrical extends Circle {
  constructor(name, radius, height) {
    super(name, radius);
    this.height = height;
  }
  get height() {
    return this._height;
  }
  set height(value) {
    this._height = value;
  }
  getArea() {
    return 2 * super.getArea() + super.getPerimeter() * this._height;
  }
  getPerimeter() {
    return super.getArea() * this._height;
  }
}

const shapeTypeElement = document.getElementById("selectOption"),
  radiusInput = document.getElementById("radius"),
  widthInput = document.getElementById("width"),
  heightInput = document.getElementById("height"),
  perimeterLabel = document.getElementById("perimeter"),
  areaLabel = document.getElementById("area"),
  inputElements = document.querySelectorAll("input");

const changeShape = (event) => {
  widthInput.value = "";
  heightInput.value = "";
  radiusInput.value = "";
  if (event.target.value === 1) {
    widthInput.setAttribute("disabled", "true");
    heightInput.setAttribute("disabled", "true");
    radiusInput.removeAttribute("disabled");
    shape = new Circle();
  }
  if (event.target.value === 2) {
    widthInput.setAttribute("disabled", "true");
    heightInput.removeAttribute("disabled");
    radiusInput.removeAttribute("disabled");
    shape = new Cylindrical();
  }
  if (event.target.value === 3) {
    widthInput.removeAttribute("disabled");
    heightInput.removeAttribute("disabled");
    radiusInput.setAttribute("disabled", "true");
    shape = new Rectangle();
  }
  if (event.target.value === 4) {
    widthInput.removeAttribute("disabled");
    heightInput.setAttribute("disabled", "true");
    radiusInput.setAttribute("disabled", "true");
    shape = new Square();
  }
};
shapeTypeElement.addEventListener("change", changeShape);
let shape;
const calculation = () => {
  if (shapeTypeElement.value === 1 && +radiusInput.value) {
    shape.radius = +radiusInput.value;
    showCalcResults();
  }
  if (
    shapeTypeElement.value === 2 &&
    +radiusInput.value &&
    +heightInput.value
  ) {
    shape.radius = +radiusInput.value;
    shape.height = +heightInput.value;
    showCalcResults();
  }
  if (shapeTypeElement.value === 3 && +widthInput.value && +heightInput.value) {
    shape.width = +widthInput.value;
    shape.height = +heightInput.value;
    showCalcResults();
  }
  if (shapeTypeElement.value === 4 && +widthInput.value) {
    shape.width = +widthInput.value;
    shape.height = +widthInput.value;
    showCalcResults();
  }
};
inputElements.forEach((element) =>
  element.addEventListener("input", calculation)
);
function showCalcResults() {
  perimeterLabel.innerText = shape.getPerimeter();
  areaLabel.innerText = shape.getArea();
}
