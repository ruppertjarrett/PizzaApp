var pizza = document.getElementById('pizza');
var basics;
document.getElementById("meatlovers").addEventListener("click", meatlovers);
document.getElementById("pepperonilovers").addEventListener("click", pepperonilovers);
document.getElementById("hawaiian").addEventListener("click", hawaiian);
document.getElementById("supreme").addEventListener("click", supreme);
document.getElementById("thebeast").addEventListener("click", thebeast);
document.getElementById("smallsize").addEventListener("click", smallsize);
document.getElementById("mediumsize").addEventListener("click", mediumsize);
document.getElementById("largesize").addEventListener("click", largesize);
document.getElementById("xlsize").addEventListener("click", xlsize);
document.getElementById("marinara").addEventListener("click", marinara);
document.getElementById("barbecue").addEventListener("click", barbecue);
document.getElementById("buffalo").addEventListener("click", buffalo);
document.getElementById("lightcheese").addEventListener("click", lightcheese);
document.getElementById("regularcheese").addEventListener("click", regularcheese);
document.getElementById("extracheese").addEventListener("click", extracheese);
document.getElementById("pepperonifull").addEventListener("click", pepperonifull);
document.getElementById("pepperonileft").addEventListener("click", pepperonileft);
document.getElementById("pepperoniright").addEventListener("click", pepperoniright);
document.getElementById("baconfull").addEventListener("click", baconfull);
document.getElementById("baconleft").addEventListener("click", baconleft);
document.getElementById("baconright").addEventListener("click", baconright);
document.getElementById("chickenfull").addEventListener("click", chickenfull);
document.getElementById("chickenleft").addEventListener("click", chickenleft);
document.getElementById("chickenright").addEventListener("click", chickenright);
document.getElementById("hamfull").addEventListener("click", hamfull);
document.getElementById("hamleft").addEventListener("click", hamleft);
document.getElementById("hamright").addEventListener("click", hamright);
document.getElementById("mushroomfull").addEventListener("click", mushroomfull);
document.getElementById("mushroomleft").addEventListener("click", mushroomleft);
document.getElementById("mushroomright").addEventListener("click", mushroomright);
document.getElementById("bananapepperfull").addEventListener("click", bananapepperfull);
document.getElementById("bananapepperleft").addEventListener("click", bananapepperleft);
document.getElementById("bananapepperright").addEventListener("click", bananapepperright);
document.getElementById("jalapenofull").addEventListener("click", jalapenofull);
document.getElementById("jalapenoleft").addEventListener("click", jalapenoleft);
document.getElementById("jalapenoright").addEventListener("click", jalapenoright);
document.getElementById("itiliansausagefull").addEventListener("click", itiliansausagefull);
document.getElementById("itiliansausageleft").addEventListener("click", itiliansausageleft);
document.getElementById("itiliansausageright").addEventListener("click", itiliansausageright);
document.getElementById("blackolivefull").addEventListener("click", blackolivefull);
document.getElementById("blackoliveleft").addEventListener("click", blackoliveleft);
document.getElementById("blackoliveright").addEventListener("click", blackoliveright);
document.getElementById("pineapplefull").addEventListener("click", pineapplefull);
document.getElementById("pineappleleft").addEventListener("click", pineappleleft);
document.getElementById("pineappleright").addEventListener("click", pineappleright);
document.getElementById("basics").addEventListener("click", basics);
document.getElementById("toppings").addEventListener("click", toppings);

function basics(evt) {
    console.log('basics works');
    document.getElementById('basicoptions').style.display = 'block';
    document.getElementById('toppingoptions').style.display = 'none';
}

function toppings(evt) {
    console.log('toppings works');
    document.getElementById('toppingoptions').style.display = 'block';
    document.getElementById('basicoptions').style.display = 'none';
}

function meatlovers(evt) {
    pizza.style.background = "url('Images/Toppings/HamFull.png'), url('Images/Toppings/ItalianSausageFull.png'), url('Images/Toppings/BaconFull.png'), url('Images/Toppings/ChickenFull.png'), url('Images/Toppings/PepperoniFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function pepperonilovers(evt) {
    pizza.style.background = "url('Images/Toppings/PepperoniFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function hawaiian(evt) {
    pizza.style.background = "url('Images/Toppings/PineappleFull.png'), url('Images/Toppings/HamFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function supreme(evt) {
    pizza.style.background = "url('Images/Toppings/BaconFull.png'), url('Images/Toppings/JalapenoFull.png'), url('Images/Toppings/BlackOliveFull.png'), url('Images/Toppings/MushroomFull.png'),url('Images/Toppings/BananaPeppersFull.png'), url('Images/Toppings/PepperoniFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function thebeast(evt) {
    pizza.style.background = "url('Images/Toppings/PineappleFull.png'),url('Images/Toppings/BananaPeppersFull.png'),url('Images/Toppings/BlackOliveFull.png'),url('Images/Toppings/JalapenoFull.png'),url('Images/Toppings/MushroomFull.png'),url('Images/Toppings/PepperoniFull.png'), url('Images/Toppings/ItalianSausageFull.png'), url('Images/Toppings/BaconFull.png'), url('Images/Toppings/ChickenFull.png'), url('Images/Toppings/HamFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}