//front end logic

//back end logic
function Pizza(bigness, toppings, price) {
  this.bigness = bigness ;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.cost = function () {
  this.price = 10;
  this.price += this.toppings.length();
}

pizza = new Pizza("large", ["cheese", "pepperoni"], "$10");
