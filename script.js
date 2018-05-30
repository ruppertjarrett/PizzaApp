var pizza = document.getElementById('pizza');
var basics;
var current;
var newCurrent;
var itemCount = 0;
var cost = 0;
document.getElementById("basics").addEventListener("click", basics);
document.getElementById("toppings").addEventListener("click", toppings);
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
document.getElementById("fullpepperoni").addEventListener("click", pepperonifull);
document.getElementById("leftpepperoni").addEventListener("click", pepperonileft);
document.getElementById("rightpepperoni").addEventListener("click", pepperoniright);
document.getElementById("nonepepperoni").addEventListener("click", pepperoninone);
document.getElementById("fullham").addEventListener("click", hamfull);
document.getElementById("leftham").addEventListener("click", hamleft);
document.getElementById("rightham").addEventListener("click", hamright);
document.getElementById("noneham").addEventListener("click", hamnone);
document.getElementById("fullchicken").addEventListener("click", chickenfull);
document.getElementById("leftchicken").addEventListener("click", chickenleft);
document.getElementById("rightchicken").addEventListener("click", chickenright);
document.getElementById("nonechicken").addEventListener("click", chickennone);
document.getElementById("fullbacon").addEventListener("click", baconfull);
document.getElementById("leftbacon").addEventListener("click", baconleft);
document.getElementById("rightbacon").addEventListener("click", baconright);
document.getElementById("nonebacon").addEventListener("click", baconnone);
document.getElementById("fullsausage").addEventListener("click", sausagefull);
document.getElementById("leftsausage").addEventListener("click", sausageleft);
document.getElementById("rightsausage").addEventListener("click", sausageright);
document.getElementById("nonesausage").addEventListener("click", sausagenone);
document.getElementById("fullbananapeppers").addEventListener("click", bananapeppersfull);
document.getElementById("leftbananapeppers").addEventListener("click", bananapeppersleft);
document.getElementById("rightbananapeppers").addEventListener("click", bananapeppersright);
document.getElementById("nonebananapeppers").addEventListener("click", bananapeppersnone);
document.getElementById("fullolives").addEventListener("click", olivesfull);
document.getElementById("leftolives").addEventListener("click", olivesleft);
document.getElementById("rightolives").addEventListener("click", olivesright);
document.getElementById("noneolives").addEventListener("click", olivesnone);
document.getElementById("fulljalapeno").addEventListener("click", jalapenofull);
document.getElementById("leftjalapeno").addEventListener("click", jalapenoleft);
document.getElementById("rightjalapeno").addEventListener("click", jalapenoright);
document.getElementById("nonejalapeno").addEventListener("click", jalapenonone);
document.getElementById("fullmushrooms").addEventListener("click", mushroomsfull);
document.getElementById("leftmushrooms").addEventListener("click", mushroomsleft);
document.getElementById("rightmushrooms").addEventListener("click", mushroomsright);
document.getElementById("nonemushrooms").addEventListener("click", mushroomsnone);
document.getElementById("fullpineapple").addEventListener("click", pineapplefull);
document.getElementById("leftpineapple").addEventListener("click", pineappleleft);
document.getElementById("rightpineapple").addEventListener("click", pineappleright);
document.getElementById("nonepineapple").addEventListener("click", pineapplenone);

function basics(evt) {
    document.getElementById('basicoptions').style.display = 'block';
    document.getElementById('toppingoptions').style.display = 'none';
}

function toppings(evt) {
    document.getElementById('toppingoptions').style.display = 'block';
    document.getElementById('basicoptions').style.display = 'none';
}

function meatlovers(evt) {
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/HamFull.png'), url('Images/Toppings/ItalianSausageFull.png'), url('Images/Toppings/BaconFull.png'), url('Images/Toppings/ChickenFull.png'), url('Images/Toppings/PepperoniFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function pepperonilovers(evt) {
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/PepperoniFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function hawaiian(evt) {
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/PineappleFull.png'), url('Images/Toppings/HamFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function supreme(evt) {
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/BaconFull.png'), url('Images/Toppings/JalapenoFull.png'), url('Images/Toppings/BlackOliveFull.png'), url('Images/Toppings/MushroomFull.png'),url('Images/Toppings/BananaPeppersFull.png'), url('Images/Toppings/PepperoniFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function thebeast(evt) {
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/PineappleFull.png'),url('Images/Toppings/BananaPeppersFull.png'),url('Images/Toppings/BlackOliveFull.png'),url('Images/Toppings/JalapenoFull.png'),url('Images/Toppings/MushroomFull.png'),url('Images/Toppings/PepperoniFull.png'), url('Images/Toppings/ItalianSausageFull.png'), url('Images/Toppings/BaconFull.png'), url('Images/Toppings/ChickenFull.png'), url('Images/Toppings/HamFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function pepperonifull(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/PepperoniFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Pepperoni Full $1 \n";
    document.getElementById("total").textContent += cost;
}

function pepperonileft(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/PepperoniHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Pepperoni Left $1 \n";
    document.getElementById("total").textContent = cost;
}

function pepperoniright(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/PepperoniRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Pepperoni Right $1 \n";
    document.getElementById("total").textContent = cost;
}

function pepperoninone(evt) {
    itemCount -= 1;
    cost -= 1;
    if(itemCount==4){
        cost = 4;
    }
    var str = document.getElementById("list").innerHTML;
    current = pizza.style.background;
    if (current.includes('PepperoniFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/PepperoniFull.png\")", "");
        var n = str.replace("Pepperoni Full $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('PepperoniHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/PepperoniHalf.png\")", "");
        var n = str.replace("Pepperoni Left $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('PepperoniRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/PepperoniRight.png\")", "");
        var n = str.replace("Pepperoni Right $1 \n", "");
        document.getElementById("list").innerHTML=n;
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("total").textContent = cost;
}

function baconfull(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BaconFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Bacon Full $1 \n";
    document.getElementById("total").textContent += cost;
}

function baconleft(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BaconHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Bacon Left $1 \n";
    document.getElementById("total").textContent += cost;
}

function baconright(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BaconRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Bacon Right $1 \n";
    document.getElementById("total").textContent += cost;
}

function baconnone(evt) {
    itemCount -= 1;
    cost -= 1;
    if(itemCount==4){
        cost = 4;
    }
    var str = document.getElementById("list").innerHTML;
    current = pizza.style.background;
    if (current.includes('BaconFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BaconFull.png\")", "");
        var n = str.replace("Bacon Full $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('BaconHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BaconHalf.png\")", "");
        var n = str.replace("Bacon Left $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('BaconRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BaconRight.png\")", "");
        var n = str.replace("Bacon Right $1 \n", "");
        document.getElementById("list").innerHTML=n;
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("total").textContent = cost;
}

function hamfull(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/HamFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Ham Full $1 \n";
    document.getElementById("total").textContent += cost;
}

function hamleft(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/HamHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Ham Left $1 \n";
    document.getElementById("total").textContent += cost;
}

function hamright(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/HamRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Ham Right $1 \n";
    document.getElementById("total").textContent += cost;
}

function hamnone(evt) {
    itemCount -= 1;
    cost -= 1;
    if(itemCount==4){
        cost = 4;
    }
    var str = document.getElementById("list").innerHTML;
    current = pizza.style.background;
    if (current.includes('HamFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/HamFull.png\")", "");
        var n = str.replace("Ham Full $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('HamHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/HamHalf.png\")", "");
        var n = str.replace("Ham Left $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('HamRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/HamRight.png\")", "");
        var n = str.replace("Ham Right $1 \n", "");
        document.getElementById("list").innerHTML=n;
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("total").textContent = cost;
}

function sausagefull(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/ItalianSausageFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Sausage Full $1 \n";
    document.getElementById("total").textContent += cost;
}

function sausageleft(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/ItalianSausageHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Sausage Left $1 \n";
    document.getElementById("total").textContent += cost;
}

function sausageright(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/ItalianSausageRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Sausage Right $1 \n";
    document.getElementById("total").textContent += cost;
}

function sausagenone(evt) {
    itemCount -= 1;
    cost -= 1;
    if(itemCount==4){
        cost = 4;
    }
    var str = document.getElementById("list").innerHTML;
    current = pizza.style.background;
    if (current.includes('ItalianSausageFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/ItalianSausageFull.png\")", "");
        var n = str.replace("Sausage Full $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('ItalianSausageHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/ItalianSausageHalf.png\")", "");
        var n = str.replace("Sausage Left $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('ItalianSausageRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/ItalianSausageRight.png\")", "");
        var n = str.replace("Sausage Right $1 \n", "");
        document.getElementById("list").innerHTML=n;
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("total").textContent = cost;
}

function chickenfull(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/ChickenFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Chicken Full $1 \n";
    document.getElementById("total").textContent += cost;
}

function chickenleft(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/ChickenHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Chicken Left $1 \n";
    document.getElementById("total").textContent += cost;
}

function chickenright(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/ChickenRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Chicken Right $1 \n";
    document.getElementById("total").textContent += cost;
}

function chickennone(evt) {
    itemCount -= 1;
    cost -= 1;
    if(itemCount==4){
        cost = 4;
    }
    var str = document.getElementById("list").innerHTML;
    current = pizza.style.background;
    if (current.includes('ChickenFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/ChickenFull.png\")", "");
        var n = str.replace("Chicken Full $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('ChickenHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/ChickenHalf.png\")", "");
        var n = str.replace("Chicken Left $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('ChickenRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/ChickenRight.png\")", "");
        var n = str.replace("Chicken Right $1 \n", "");
        document.getElementById("list").innerHTML=n;
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("total").textContent = cost;
}

function olivesfull(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BlackOliveFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Olives Full $1 \n";
    document.getElementById("total").textContent += cost;
}

function olivesleft(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BlackOliveHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Olives Left $1 \n";
    document.getElementById("total").textContent += cost;
}

function olivesright(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BlackOliveRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Olives Right $1 \n";
    document.getElementById("total").textContent += cost;
}

function olivesnone(evt) {
    itemCount -= 1;
    cost -= 1;
    if(itemCount==4){
        cost = 4;
    }
    var str = document.getElementById("list").innerHTML;
    current = pizza.style.background;
    if (current.includes('BlackOliveFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BlackOliveFull.png\")", "");
        var n = str.replace("Black Olives $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('BlackOliveHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BlackOliveHalf.png\")", "");
        var n = str.replace("Black Olives $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('BlackOliveRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BlackOliveRight.png\")", "");
        var n = str.replace("Black Olives Right $1 \n", "");
        document.getElementById("list").innerHTML=n;
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("total").textContent = cost;
}

function bananapeppersfull(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BananaPeppersFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Banana Peppers Full $1 \n";
    document.getElementById("total").textContent += cost;
}

function bananapeppersleft(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BananaPeppersHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Banana Peppers Left $1 \n";
    document.getElementById("total").textContent += cost;
}

function bananapeppersright(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BananaPeppersRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Banana Peppers Right $1 \n";
    document.getElementById("total").textContent += cost;
}

function bananapeppersnone(evt) {
    itemCount -= 1;
    cost -= 1;
    if(itemCount==4){
        cost = 4;
    }
    var str = document.getElementById("list").innerHTML;
    current = pizza.style.background;
    if (current.includes('BananaPeppersFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BananaPeppersFull.png\")", "");
        var n = str.replace("Banana Peppers Full $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('BananaPeppersHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BananaPeppersHalf.png\")", "");
        var n = str.replace("Banana Peppers Left $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('BananaPeppersRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BananaPeppersRight.png\")", "");
        var n = str.replace("Banana Peppers Right $1 \n", "");
        document.getElementById("list").innerHTML=n;
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("total").textContent = cost;
}

function jalapenofull(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/JalapenoFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Jalapeno Full $1 \n";
    document.getElementById("total").textContent += cost;
}

function jalapenoleft(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/JalapenoHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Jalapeno Left $1 \n";
    document.getElementById("total").textContent += cost;
}

function jalapenoright(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/JalapenoRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Jalapeno Right $1 \n";
    document.getElementById("total").textContent += cost;
}

function jalapenonone(evt) {
    itemCount -= 1;
    cost -= 1;
    if(itemCount==4){
        cost = 4;
    }
    var str = document.getElementById("list").innerHTML;
    current = pizza.style.background;
    if (current.includes('JalapenoFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/JalapenoFull.png\")", "");
        var n = str.replace("Jalapenos Full $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('JalapenoHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/JalapenoHalf.png\")", "");
        var n = str.replace("Jalapenos Left $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('JalapenoRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/JalapenoRight.png\")", "");
        var n = str.replace("Jalapenos Right $1 \n", "");
        document.getElementById("list").innerHTML=n;
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("total").textContent = cost;
}

function mushroomsfull(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/MushroomFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Mushrooms Full $1 \n";
    document.getElementById("total").textContent += cost;
}

function mushroomsleft(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/MushroomHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Mushrooms Left $1 \n";
    document.getElementById("total").textContent += cost;
}

function mushroomsright(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/MushroomRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Mushrooms Right $1 \n";
    document.getElementById("total").textContent += cost;
}

function mushroomsnone(evt) {
    itemCount -= 1;
    cost -= 1;
    if(itemCount==4){
        cost = 4;
    }
    var str = document.getElementById("list").innerHTML;
    current = pizza.style.background;
    if (current.includes('MushroomFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/MushroomFull.png\")", "");
        var n = str.replace("Mushrooms Full $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('MushroomHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/MushroomHalf.png\")", "");
        var n = str.replace("Mushrooms Left $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('MushroomRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/MushroomRight.png\")", "");
        var n = str.replace("Mushrooms Right $1 \n", "");
        document.getElementById("list").innerHTML=n;
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("total").textContent = cost;
}

function pineapplefull(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/PineappleFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Pineapple Full $1 \n";
    document.getElementById("total").textContent += cost;
}

function pineappleleft(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/PineappleHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Pineapple Left $1 \n";
    document.getElementById("total").textContent += cost;
}

function pineappleright(evt) {
    itemCount += 1;
    cost += 1;
    if(itemCount==5){
        cost = 3;
    }
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/PineappleRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("list").textContent += "Pineapple Right $1 \n";
    document.getElementById("total").textContent += cost;
}

function pineapplenone(evt) {
    itemCount -= 1;
    cost -= 1;
    if(itemCount==4){
        cost = 4;
    }
    var str = document.getElementById("list").innerHTML;
    current = pizza.style.background;
    if (current.includes('PineappleFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/PineappleFull.png\")", "");
        var n = str.replace("Pineapple Full $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('PineappleHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/PineappleHalf.png\")", "");
        var n = str.replace("Pineapple Left $1 \n", "");
        document.getElementById("list").innerHTML=n;
    } else if (current.includes('PineappleRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/PineappleRight.png\")", "");
        var n = str.replace("Pineapple Right $1 \n", "");
        document.getElementById("list").innerHTML=n;
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("total").textContent = cost;
}