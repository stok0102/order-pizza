//front end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var bigness = parseInt($("input[type='radio'][name='bigness']:checked").val());
    var toppings = []
     $.each($("input[name='topping']:checked"), function(){
                toppings.push($(this).val());
            });
    pizza = new Pizza(bigness, toppings, 0)
    pizza.cost();
    $("ul").append("<li>This pizza will cost:" + pizza.price + "</li>");
  })
});
//back end logic
function Pizza(bigness, toppings, price) {
  this.bigness = bigness ;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.cost = function () {
  this.price = 10;
  this.price += this.toppings.length;
  this.price += this.bigness;
}
