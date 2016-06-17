//front end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var sizes = parseInt($("input[type='radio'][name='bigness']:checked").val());
    var toppings = []
    $.each($("input[name='topping']:checked"), function(){
                toppings.push($(this).val());
            });
    pizza = new Pizza(toppings, 0)
    bigness = new Bigness(sizeArray[sizes], sizes)
    pizza.bignesses.push(bigness);
    console.log(pizza);
    pizza.cost();
    $("ul").append("<li>This pizza will cost:" + pizza.price + "</li>");
  })
});
//back end logic
function Pizza(toppings, price, bignesses) {
  this.toppings = toppings;
  this.price = price;
  this.bignesses = [];
}

function Bigness(sizeValue, sizePrice) {
  this.sizeValue = sizeValue;
  this.sizePrice = sizePrice;
}

var sizeArray = ["small", "medium", "large"]

Pizza.prototype.cost = function (bigness) {
  this.price = 10 + this.toppings.length + this.bignesses[0].sizePrice;
}
