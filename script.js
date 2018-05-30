var pizza = document.getElementById('pizza');
var size = document.getElementById('size');
var basics;
var crust;
var current;
var newCurrent;
window.addEventListener("load", load);
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
document.getElementById("smallsize").addEventListener("click", smallsize);
document.getElementById("mediumsize").addEventListener("click", mediumsize);
document.getElementById("largesize").addEventListener("click", largesize);
document.getElementById("xlsize").addEventListener("click", xlsize);
document.getElementById("lightcheese").addEventListener("click", lightcheese);
document.getElementById("regularcheese").addEventListener("click", regularcheese);
document.getElementById("extracheese").addEventListener("click", extracheese);
document.getElementById("marinara").addEventListener("click", marinara);
document.getElementById("buffalo").addEventListener("click", buffalo);
document.getElementById("barbecue").addEventListener("click", barbecue);

function load(evt) {
    console.log('Loaded');
    pizza.style.background = "url('Images/Empty.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function smallsize(evt) {
    size.innerHTML = "Size: Small";
}

function mediumsize(evt) {
    size.innerHTML = "Size: Medium";
}

function largesize(evt) {
    size.innerHTML = "Size: Large";
}

function xlsize(evt) {
    size.innerHTML = "Size: Extra Large";
}

function marinara(evt) {
    if (pizza.style.background.length < 79) {
        crust = pizza.style.background.substring(pizza.style.background.length - 31, pizza.style.background.length);
        pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 31);
    } else if (pizza.style.background.length > 79) {
        crust = pizza.style.background.substring(pizza.style.background.length - 31, pizza.style.background.length);
        pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 66);
    }
    pizza.style.background += ", url('Images/Sauces/Marinara.png')";
    pizza.style.background += crust;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function barbecue(evt) {
    if (pizza.style.background.length < 79) {
        crust = pizza.style.background.substring(pizza.style.background.length - 31, pizza.style.background.length);
        pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 31);
    } else if (pizza.style.background.length > 79) {
        crust = pizza.style.background.substring(pizza.style.background.length - 31, pizza.style.background.length);
        pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 66);

    }
    pizza.style.background += ", url('Images/Sauces/Barbecue.png')";
    pizza.style.background += crust;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function buffalo(evt) {
    if (pizza.style.background.length < 79) {
        crust = pizza.style.background.substring(pizza.style.background.length - 31, pizza.style.background.length);
        pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 31);
    } else if (pizza.style.background.length > 79) {
        crust = pizza.style.background.substring(pizza.style.background.length - 31, pizza.style.background.length);
        pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 66);
    }
    pizza.style.background += ", url('Images/Sauces/Buffalos.png')";
    pizza.style.background += crust;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function lightcheese(evt) {
    if (pizza.style.background.length < 114) {
        crust = pizza.style.background.substring(pizza.style.background.length - 66, pizza.style.background.length);
        pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 66);
    } else if (pizza.style.background.length > 114) {
        crust = pizza.style.background.substring(pizza.style.background.length - 66, pizza.style.background.length);
        pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    }
    pizza.style.background += ", url('Images/Cheese/LowCheese.png')";
    pizza.style.background += crust;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function regularcheese(evt) {
    if (pizza.style.background.length < 114) {
        crust = pizza.style.background.substring(pizza.style.background.length - 66, pizza.style.background.length);
        pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 66);
    } else if (pizza.style.background.length > 114) {
        crust = pizza.style.background.substring(pizza.style.background.length - 66, pizza.style.background.length);
        pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    }
    pizza.style.background += ", url('Images/Cheese/RegCheese.png')";
    pizza.style.background += crust;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function extracheese(evt) {
    if (pizza.style.background.length < 114) {
        crust = pizza.style.background.substring(pizza.style.background.length - 66, pizza.style.background.length);
        pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 66);
    } else if (pizza.style.background.length > 114) {
        crust = pizza.style.background.substring(pizza.style.background.length - 66, pizza.style.background.length);
        pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    }
    pizza.style.background += ", url('Images/Cheese/ExtCheese.png')";
    pizza.style.background += crust;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function basics(evt) {
    document.getElementById('basicoptions').style.display = 'block';
    document.getElementById('toppingoptions').style.display = 'none';
}

function toppings(evt) {
    document.getElementById('toppingoptions').style.display = 'block';
    document.getElementById('basicoptions').style.display = 'none';
}

function meatlovers(evt) {
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/HamFull.png'), url('Images/Toppings/ItalianSausageFull.png'), url('Images/Toppings/BaconFull.png'), url('Images/Toppings/ChickenFull.png'), url('Images/Toppings/PepperoniFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
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
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/PepperoniFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function pepperonileft(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/PepperoniHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function pepperoniright(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/PepperoniRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function pepperoninone(evt) {
    current = pizza.style.background;
    if (current.includes('PepperoniFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/PepperoniFull.png\")", "");
    } else if (current.includes('PepperoniHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/PepperoniHalf.png\")", "");
    } else if (current.includes('PepperoniRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/PepperoniRight.png\")", "");
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function baconfull(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BaconFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function baconleft(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BaconHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function baconright(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BaconRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function baconnone(evt) {
    current = pizza.style.background;
    if (current.includes('BaconFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BaconFull.png\")", "");
    } else if (current.includes('BaconHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BaconHalf.png\")", "");
    } else if (current.includes('BaconRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BaconRight.png\")", "");
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function hamfull(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/HamFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function hamleft(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/HamHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function hamright(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/HamRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function hamnone(evt) {
    current = pizza.style.background;
    if (current.includes('HamFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/HamFull.png\")", "");
    } else if (current.includes('HamHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/HamHalf.png\")", "");
    } else if (current.includes('HamRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/HamRight.png\")", "");
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function sausagefull(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/ItalianSausageFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function sausageleft(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/ItalianSausageHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function sausageright(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/ItalianSausageRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function sausagenone(evt) {
    current = pizza.style.background;
    if (current.includes('ItalianSausageFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/ItalianSausageFull.png\")", "");
    } else if (current.includes('ItalianSausageHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/ItalianSausageHalf.png\")", "");
    } else if (current.includes('ItalianSausageRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/ItalianSausageRight.png\")", "");
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function chickenfull(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/ChickenFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function chickenleft(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/ChickenHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function chickenright(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/ChickenRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function chickennone(evt) {
    current = pizza.style.background;
    if (current.includes('ChickenFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/ChickenFull.png\")", "");
    } else if (current.includes('ChickenHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/ChickenHalf.png\")", "");
    } else if (current.includes('ChickenRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/ChickenRight.png\")", "");
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function olivesfull(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BlackOliveFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function olivesleft(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BlackOliveHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function olivesright(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BlackOliveRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function olivesnone(evt) {
    current = pizza.style.background;
    if (current.includes('BlackOliveFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BlackOliveFull.png\")", "");
    } else if (current.includes('BlackOliveHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BlackOliveHalf.png\")", "");
    } else if (current.includes('BlackOliveRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BlackOliveRight.png\")", "");
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function bananapeppersfull(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BananaPeppersFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function bananapeppersleft(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BananaPeppersHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function bananapeppersright(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/BananaPeppersRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function bananapeppersnone(evt) {
    current = pizza.style.background;
    if (current.includes('BananaPeppersFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BananaPeppersFull.png\")", "");
    } else if (current.includes('BananaPeppersHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BananaPeppersHalf.png\")", "");
    } else if (current.includes('BananaPeppersRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/BananaPeppersRight.png\")", "");
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function jalapenofull(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/JalapenoFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function jalapenoleft(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/JalapenoHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function jalapenoright(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/JalapenoRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function jalapenonone(evt) {
    current = pizza.style.background;
    if (current.includes('JalapenoFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/JalapenoFull.png\")", "");
    } else if (current.includes('JalapenoHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/JalapenoHalf.png\")", "");
    } else if (current.includes('JalapenoRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/JalapenoRight.png\")", "");
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function mushroomsfull(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/MushroomFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function mushroomsleft(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/MushroomHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function mushroomsright(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/MushroomRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function mushroomsnone(evt) {
    current = pizza.style.background;
    if (current.includes('MushroomFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/MushroomFull.png\")", "");
    } else if (current.includes('MushroomHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/MushroomHalf.png\")", "");
    } else if (current.includes('MushroomRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/MushroomRight.png\")", "");
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function pineapplefull(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/PineappleFull.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function pineappleleft(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/PineappleHalf.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function pineappleright(evt) {
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += ", url('Images/Toppings/PineappleRight.png')"
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function pineapplenone(evt) {
    current = pizza.style.background;
    if (current.includes('PineappleFull')) {
        newCurrent = current.replace(", url(\"Images/Toppings/PineappleFull.png\")", "");
    } else if (current.includes('PineappleHalf')) {
        newCurrent = current.replace(", url(\"Images/Toppings/PineappleHalf.png\")", "");
    } else if (current.includes('PineappleRight')) {
        newCurrent = current.replace(", url(\"Images/Toppings/PineappleRight.png\")", "");
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}
medium