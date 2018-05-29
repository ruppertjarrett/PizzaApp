var pizza = document.getElementById('pizza');
document.getElementById("meatlovers").addEventListener("click", meatlovers);
document.getElementById("pepperonilovers").addEventListener("click", pepperonilovers);
document.getElementById("hawaiian").addEventListener("click", hawaiian);
document.getElementById("supreme").addEventListener("click", supreme);
document.getElementById("thebeast").addEventListener("click", thebeast);

function meatlovers(evt) {
    console.log("running");
    pizza.style.background = "url('Images/Toppings/PepperoniFull.png'), url('Images/Toppings/ItalianSausageFull.png'), url('Images/Toppings/BaconFull.png'), url('Images/Toppings/ChickenFull.png'), url('Images/Toppings/HamFull.png'), url('Images/Cheese/RegularCheese.png'), url('Images/Sauces/MarinaraSauce.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function pepperonilovers(evt) {
    pizza.style.background = "url('Images/Toppings/PepperoniFull.png'), url('Images/Cheese/RegularCheese.png'), url('Images/Sauces/MarinaraSauce.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function hawaiian(evt) {
    pizza.style.background = "url('Images/Toppings/PineappleFull.png'), url('Images/Toppings/HamFull.png'), url('Images/Cheese/RegularCheese.png'), url('Images/Sauces/MarinaraSauce.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function supreme(evt) {
    pizza.style.background = "url('Images/Toppings/BaconFull.png'), url('Images/Toppings/JalapenoFull.png'), url('Images/Toppings/BlackOliveFull.png'), url('Images/Toppings/MushroomFull.png'),url('Images/Toppings/BananaPeppersFull.png'), url('Images/Toppings/PepperoniFull.png'), url('Images/Cheese/RegularCheese.png'), url('Images/Sauces/MarinaraSauce.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function thebeast(evt) {
    pizza.style.background = "url('Images/Toppings/PineappleFull.png'),url('Images/Toppings/BananaPeppersFull.png'),url('Images/Toppings/BlackOliveFull.png'),url('Images/Toppings/JalapenoFull.png'),url('Images/Toppings/MushroomFull.png'),url('Images/Toppings/PepperoniFull.png'), url('Images/Toppings/ItalianSausageFull.png'), url('Images/Toppings/BaconFull.png'), url('Images/Toppings/ChickenFull.png'), url('Images/Toppings/HamFull.png'), url('Images/Cheese/RegularCheese.png'), url('Images/Sauces/MarinaraSauce.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}