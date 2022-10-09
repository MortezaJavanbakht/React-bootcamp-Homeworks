let stepsCounting = {
  steps: 0,
  increase: function () {
    this.steps++;
    return this;
  },
  decrease: function () {
    this.steps ? this.steps-- : 0;
    return this;
  },
  reset: function () {
    this.steps = 0;
    return this;
  },
  read: function () {
    console.log(`Steps: ${this.steps}`);
    return this;
  },
};

stepsCounting.read().increase().read();
stepsCounting.reset().read();
