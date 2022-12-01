class Food {
  constructor(name, price) {
    this._name = name;
    this._price = price;
    this._count = 0;
  }
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }
  set price(value) {
    this._price = value;
  }
  get price() {
    return this._price;
  }
  set count(value) {
    this._count = value;
  }
  get count() {
    return this._count;
  }
  add() {
    this._count++;
    updateVars(this._name);
  }
  remove() {
    this._count--;
    if (this._count < 0) this._count = 0;
    updateVars(this._name);
  }
  sumPrice() {
    return this._price * this._count;
  }
}

class Order {
  constructor() {
    this.orderlist = {};
    this._totalPrice = 0;
    this._tax = 0;
    this._totalPayment = 0;
    this._offPercent = 0;
    this._off = 0;
  }
  calculateTotalPrice() {
    this._totalPrice = 0;
    for (let food in this.orderlist) {
      this._totalPrice += this.orderlist[food].sumPrice();
    }
    return this._totalPrice;
  }
  calculateTax() {
    this._tax = this._totalPrice * 0.09;
    return this._tax;
  }
  calculateOff() {
    this._off = this._offPercent * (this._totalPrice + this._tax);
    return this._off;
  }
  calculateTotalPayment() {
    this._totalPayment = this._totalPrice + this._tax - this._off;
    return this._totalPayment;
  }
}

const foodObjects = {};
foodObjects["burger"] = new Food("burger", 10000);
foodObjects["mushroom"] = new Food("mushroom", 15000);
foodObjects["cheese"] = new Food("cheese", 20000);
foodObjects["halo"] = new Food("halo", 25000);
foodObjects["potato"] = new Food("potato", 15000);
foodObjects["garlic"] = new Food("garlic", 20000);
foodObjects["cesar"] = new Food("cesar", 20000);
foodObjects["salad"] = new Food("salad", 15000);
foodObjects["lemonade"] = new Food("lemonade", 8000);
foodObjects["doogh"] = new Food("doogh", 8000);
const order = new Order();
const foodContainer = document.getElementById("foodContainer");

const addAndRemoveFunction = (event) => {
  const classes = Array.from(event.target.classList);
  const selectedFood = event.target.closest(".product").id;
  if (classes.includes("plusBtn")) foodObjects[selectedFood].add();
  if (classes.includes("minusBtn")) foodObjects[selectedFood].remove();
};

foodContainer.addEventListener("click", addAndRemoveFunction);

function updateVars(foodName) {
  order.orderlist = foodObjects;
  const foodCountLabel = document.querySelector(
    `#${foodName} .product__spec__counter label`
  );
  const foodSumPriceLabel = document.querySelector(
    `#${foodName} .product__totalPrice`
  );
  foodCountLabel.innerText = foodObjects[foodName].count;
  foodSumPriceLabel.innerText = foodObjects[foodName].sumPrice();
  const totalPriceLabel = document.getElementById("totalPrice"),
    taxLabel = document.getElementById("tax"),
    offLabel = document.getElementById("off"),
    totalPaymentLabel = document.getElementById("totalPayment");
  totalPriceLabel.innerText = order.calculateTotalPrice();
  taxLabel.innerText = order.calculateTax();
  offLabel.innerText = order.calculateOff();
  totalPaymentLabel.innerText = order.calculateTotalPayment();
}
