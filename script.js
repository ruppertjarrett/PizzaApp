var pizza = document.getElementById('pizza');
var size = document.getElementById('size');
var basics;
var crust;
var current;
var newCurrent;
window.addEventListener("load", load);
var itemCount = 0;
var cost = 0;
document.getElementById("basics").addEventListener("click", basics);
document.getElementById("toppings").addEventListener("click", toppings);
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
document.getElementById("add").addEventListener("click", add);

function load(evt) {
    console.log('Loaded');
    pizza.style.background = "url('Images/Empty.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function add(evt) {
    alert("Thank you for your order!!!");
    size.innerHTML = "Size:"
    document.getElementById('basicoptions').style.display = 'block';
    document.getElementById('toppingoptions').style.display = 'none';
    pizza.style.background = "url('Images/Empty.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById('list').innerHTML = "";
    document.getElementById('total').innerHTML = "Total: ";
    cost = 0;
    itemCount = 0;
}

function smallsize(evt) {
    size.innerHTML = "Size: Small $5";
    cost += 5;
    document.getElementById("total").textContent = "Total: $" + cost;
}

function mediumsize(evt) {
    size.innerHTML = "Size: Medium $7";
    cost += 7;
    document.getElementById("total").textContent = "Total: $" + cost;
}

function largesize(evt) {
    size.innerHTML = "Size: Large $10";
    cost += 10;
    document.getElementById("total").textContent = "Total: $" + cost;
}

function xlsize(evt) {
    size.innerHTML = "Size: Extra Large $13";
    cost += 13;
    document.getElementById("total").textContent = "Total: $" + cost;
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
    size.innerHTML = "Size:"
    document.getElementById('basicoptions').style.display = 'block';
    document.getElementById('toppingoptions').style.display = 'none';
    pizza.style.background = "url('Images/Empty.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById('list').innerHTML = "";
    document.getElementById('total').innerHTML = "Total: ";
    cost = 0;
    itemCount = 0;
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/HamFull.png'), url('Images/Toppings/ItalianSausageFull.png'), url('Images/Toppings/BaconFull.png'), url('Images/Toppings/ChickenFull.png'), url('Images/Toppings/PepperoniFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    hamfull(evt);
    sausagefull(evt);
    baconfull(evt);
    chickenfull(evt);
    pepperonifull(evt);
}

function pepperonilovers(evt) {
    size.innerHTML = "Size:"
    document.getElementById('basicoptions').style.display = 'block';
    document.getElementById('toppingoptions').style.display = 'none';
    pizza.style.background = "url('Images/Empty.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById('list').innerHTML = "";
    document.getElementById('total').innerHTML = "Total: ";
    cost = 0;
    itemCount = 0;
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/PepperoniFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    pepperonifull(evt);
}

function hawaiian(evt) {
    size.innerHTML = "Size:"
    document.getElementById('basicoptions').style.display = 'block';
    document.getElementById('toppingoptions').style.display = 'none';
    pizza.style.background = "url('Images/Empty.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById('list').innerHTML = "";
    document.getElementById('total').innerHTML = "Total: ";
    cost = 0;
    itemCount = 0;
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/PineappleFull.png'), url('Images/Toppings/HamFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    pineapplefull(evt);
    hamfull(evt);
}

function supreme(evt) {
    size.innerHTML = "Size:"
    document.getElementById('basicoptions').style.display = 'block';
    document.getElementById('toppingoptions').style.display = 'none';
    pizza.style.background = "url('Images/Empty.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById('list').innerHTML = "";
    document.getElementById('total').innerHTML = "Total: ";
    cost = 0;
    itemCount = 0;
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/BaconFull.png'), url('Images/Toppings/JalapenoFull.png'), url('Images/Toppings/BlackOliveFull.png'), url('Images/Toppings/MushroomFull.png'),url('Images/Toppings/BananaPeppersFull.png'), url('Images/Toppings/PepperoniFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    baconfull(evt);
    jalapenofull(evt);
    olivesfull(evt);
    mushroomsfull(evt);
    bananapeppersfull(evt);
    pepperonifull(evt);
}

function thebeast(evt) {
    size.innerHTML = "Size:"
    document.getElementById('basicoptions').style.display = 'block';
    document.getElementById('toppingoptions').style.display = 'none';
    pizza.style.background = "url('Images/Empty.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById('list').innerHTML = "";
    document.getElementById('total').innerHTML = "Total: ";
    cost = 0;
    itemCount = 0;
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/PineappleFull.png'),url('Images/Toppings/BananaPeppersFull.png'),url('Images/Toppings/BlackOliveFull.png'),url('Images/Toppings/JalapenoFull.png'),url('Images/Toppings/MushroomFull.png'),url('Images/Toppings/PepperoniFull.png'), url('Images/Toppings/ItalianSausageFull.png'), url('Images/Toppings/BaconFull.png'), url('Images/Toppings/ChickenFull.png'), url('Images/Toppings/HamFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    pineapplefull(evt);
    bananapeppersfull(evt);
    olivesfull(evt);
    jalapenofull(evt);
    mushroomsfull(evt);
    pepperonifull(evt);
    sausagefull(evt);
    baconfull(evt);
    chickenfull(evt);
    hamfull(evt);
}

var toppingOptions = document.getElementById('toppingoptions');
var toppingBtnId = ['PepperoniFull', 'PepperoniHalf', 'PepperoniRght', 'PepperoniNone', 'BaconFull', 'BaconHalf', 'BaconRght', 'BaconNone', 'ChickenFull', 'ChickenHalf', 'ChickenRght', 'ChickenNone', 'HamFull', 'HamHalf', 'HamRght', 'HamNone', 'ItalianSausageFull', 'ItalianSausageHalf', 'ItalianSausageRght', 'ItalianSausageNone', 'BananaPeppersFull', 'BananaPeppersHalf', 'BananaPeppersRght', 'BananaPeppersNone', 'BlackOliveFull', 'BlackOliveHalf', 'BlackOliveRght', 'BlackOliveNone', 'JalapenoFull', 'JalapenoHalf', 'JalapenoRght', 'JalapenoNone', 'MushroomFull', 'MushroomHalf', 'MushroomRght', 'MushroomNone', 'PineappleFull', 'PineappleHalf', 'PineappleRght', 'PineappleNone'];
var toppingBtns = [];

toppingBtnId.forEach(buildButton);

function buildButton(item, index, arr) {
    buttons[index] = document.createElement('div');
    buttons[index].setAttribute('id', item);
    if (!item.includes('None')) {
        if (item.includes('Full')) {
            buttons[index].setAttribute('class', 'btn full');
        } else if (item.includes('Half')) {
            buttons[index].setAttribute('class', 'btn left');
        } else if (item.includes('Rght')) {
            buttons[index].setAttribute('class', 'btn right');
        }
        toppingOptions.appendChild(buttons[index]);
        buttons[index].addEventListener('click', toppingAdded);
    } else {
        buttons[index].setAttribute('class', 'btn none');
        toppingOptions.appendChild(buttons[index]);
        buttons[index].addEventListener('click', toppingRemoved);
    }
}

var image;
var currentT;
var currentL;
var topping;
var area;

function toppingAdded(evt) {
    if (itemCount == 0) {
        itemCount += 1;
    } else if (itemCount >= 1) {
        itemCount += 1;
        cost += 1;
    }
    if (itemCount == 5) {
        cost += 1;
    }
    currentT = evt.target.id;
    currentL = evt.target.id;
    basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
    pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
    pizza.style.background += `, url('Images/Toppings/${currentT}.png')`
    pizza.style.background += basics;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    topping = currentT.slice(0, currentT.length - 4);
    if (currentL.includes("Rght")) {
        area = "Right";
    } else {
        area = currentL.slice(currentL.length - 4, currentL.length);
    }
    document.getElementById("list").innerHTML += `${topping} ${area} $1 \<br /\>`;
    document.getElementById("total").textContent = "Total: $" + cost;
}

function toppingRemoved(evt) {
    if (itemCount > 0 && cost > 0) {
        itemCount -= 1;
        cost -= 1;
    }
    currentT = evt.target.id;
    var topping = currentT.slice(0, currentT.length - 4);
    var str = document.getElementById("list").innerHTML;
    current = pizza.style.background;
    if (current.includes(`${topping}Full`)) {
        newCurrent = current.replace(`, url(\"Images/Toppings/${topping}Full.png\")`, "");
        var n = str.replace(`${topping} Full $1 \<br\>`, "");
        document.getElementById("list").innerHTML = n;
    } else if (current.includes(`${topping}Half`)) {
        newCurrent = current.replace(`, url(\"Images/Toppings/${topping}Half.png\")`, "");
        var n = str.replace(`${topping} Left $1 \<br\>`, "");
        document.getElementById("list").innerHTML = n;
    } else if (current.includes(`${topping}Rght`)) {
        newCurrent = current.replace(`, url(\"Images/Toppings/${topping}Rght.png\")`, "");
        var n = str.replace(`${topping} Right $1 \<br\>`, "");
        document.getElementById("list").innerHTML = n;
    }
    pizza.style.background = newCurrent;
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById("total").textContent = "Total: $" + cost;
}