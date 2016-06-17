//user interface logic
$(document).ready(function() {
  $("form#user-options").submit(function(event) {
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
    $("ul#pies").append("<li><span class='pie'>" + pizza.bignesses[0].sizeValue + "</span></li>");
    $(".pie").last().click(function() {
      $(".show-pie").show();
      $(".price").text(pizza.price);
      $(".size").text(pizza.bignesses[0].sizeValue);
      $("ul#toppings").text("");
      pizza.toppings.forEach(function(toppings) {
        $("ul#toppings").append("<li>" + toppings +"</li>");
      });
    });
  });
  $("form#place-order").submit(function(event) {
    event.preventDefault();
    var userName = $("input#name").val();
    var userAddress = $("input#address").val();
    $(".order-complete").show();
    $(".order-form").hide();
    $("#user-name").text(userName);
    $("#user-address").text(userAddress);
  });
});
//business logic
function Pizza(toppings, price, bignesses) {
  this.toppings = toppings;
  this.price = price;
  this.bignesses = [];
}

function Bigness(sizeValue, sizePrice) {
  this.sizeValue = sizeValue;
  this.sizePrice = sizePrice;
}

var sizeArray = ["Small", "Medium", "Large"]

Pizza.prototype.cost = function (bigness) {
  this.price = 10 + this.toppings.length + this.bignesses[0].sizePrice;
}
