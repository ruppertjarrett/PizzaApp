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
document.getElementById("meatlovers").addEventListener('click', meatlovers);
document.getElementById("pepperonilovers").addEventListener('click', pepperonilovers);
document.getElementById("hawaiian").addEventListener('click', hawaiian);
document.getElementById("supreme").addEventListener('click', supreme);
document.getElementById("thebeast").addEventListener('click', thebeast);

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
    size.innerHTML = "Size: Medium $7"
    document.getElementById('basicoptions').style.display = 'block';
    document.getElementById('toppingoptions').style.display = 'none';
    pizza.style.background = "url('Images/Empty.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById('list').innerHTML = "";
    document.getElementById('total').innerHTML = "Total: ";
    cost = 3;
    itemCount = 5;
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/HamFull.png'), url('Images/Toppings/ItalianSausageFull.png'), url('Images/Toppings/BaconFull.png'), url('Images/Toppings/ChickenFull.png'), url('Images/Toppings/PepperoniFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function pepperonilovers(evt) {
    size.innerHTML = "Size: Medium $7"
    document.getElementById('basicoptions').style.display = 'block';
    document.getElementById('toppingoptions').style.display = 'none';
    pizza.style.background = "url('Images/Empty.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById('list').innerHTML = "";
    document.getElementById('total').innerHTML = "Total: ";
    cost = 7;
    itemCount = 1;
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/PepperoniFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function hawaiian(evt) {
    size.innerHTML = "Size: Medium $7"
    document.getElementById('basicoptions').style.display = 'block';
    document.getElementById('toppingoptions').style.display = 'none';
    pizza.style.background = "url('Images/Empty.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById('list').innerHTML = "";
    document.getElementById('total').innerHTML = "Total: ";
    cost = 8;
    itemCount = 2;
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/PineappleFull.png'), url('Images/Toppings/HamFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function supreme(evt) {
    size.innerHTML = "Size: Medium $7"
    document.getElementById('basicoptions').style.display = 'block';
    document.getElementById('toppingoptions').style.display = 'none';
    pizza.style.background = "url('Images/Empty.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById('list').innerHTML = "";
    document.getElementById('total').innerHTML = "Total: ";
    cost = 11;
    itemCount = 6;
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/BaconFull.png'), url('Images/Toppings/JalapenoFull.png'), url('Images/Toppings/BlackOliveFull.png'), url('Images/Toppings/MushroomFull.png'),url('Images/Toppings/BananaPeppersFull.png'), url('Images/Toppings/PepperoniFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

function thebeast(evt) {
    size.innerHTML = "Size: Medium $7"
    document.getElementById('basicoptions').style.display = 'block';
    document.getElementById('toppingoptions').style.display = 'none';
    pizza.style.background = "url('Images/Empty.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
    document.getElementById('list').innerHTML = "";
    document.getElementById('total').innerHTML = "Total: ";
    cost = 15;
    itemCount = 10;
    pizza.style.background = "url('Images/Empty.png'), url('Images/Toppings/PineappleFull.png'),url('Images/Toppings/BananaPeppersFull.png'),url('Images/Toppings/BlackOliveFull.png'),url('Images/Toppings/JalapenoFull.png'),url('Images/Toppings/MushroomFull.png'),url('Images/Toppings/PepperoniFull.png'), url('Images/Toppings/ItalianSausageFull.png'), url('Images/Toppings/BaconFull.png'), url('Images/Toppings/ChickenFull.png'), url('Images/Toppings/HamFull.png'), url('Images/Cheese/RegCheese.png'), url('Images/Sauces/Marinara.png'), url('Images/Crust/Crust.png')";
    pizza.style.backgroundRepeat = "no-repeat";
    pizza.style.backgroundSize = "cover";
}

var toppingOptions = document.getElementById('toppingoptions');
var toppingBtnId = ['PepperoniFull', 'PepperoniHalf', 'PepperoniRght', 'PepperoniNone', 'PepperoniDble', 'BaconFull', 'BaconHalf', 'BaconRght', 'BaconNone', 'BaconDble', 'ChickenFull', 'ChickenHalf', 'ChickenRght', 'ChickenNone', 'ChickenDble', 'HamFull', 'HamHalf', 'HamRght', 'HamNone', 'HamDble', 'ItalianSausageFull', 'ItalianSausageHalf', 'ItalianSausageRght', 'ItalianSausageNone', 'ItalianSausageDble', 'BananaPeppersFull', 'BananaPeppersHalf', 'BananaPeppersRght', 'BananaPeppersNone', 'BananaPeppersDble', 'BlackOliveFull', 'BlackOliveHalf', 'BlackOliveRght', 'BlackOliveNone', 'BlackOliveDble', 'JalapenoFull', 'JalapenoHalf', 'JalapenoRght', 'JalapenoNone', 'JalapenoDble', 'MushroomFull', 'MushroomHalf', 'MushroomRght', 'MushroomNone', 'MushroomDble', 'PineappleFull', 'PineappleHalf', 'PineappleRght', 'PineappleNone', 'PineappleDble'];
var toppingBtns = [];
var count = 0;
var container;
var namePlate;

toppingBtnId.forEach(buildButton);
toppingBtnId.forEach(giveEventListener);

function buildButton(item, index, arr) {
    if (count == 0) {
        container = document.createElement('div');
        container.setAttribute('id', item.slice(0, item.length - 4));
        namePlate = document.createElement('p');
        namePlate.innerHTML = `${item.slice(0, item.length - 4)} :`;
        container.appendChild(namePlate);
        toppingOptions.appendChild(container);
    }
    toppingBtns[index] = document.createElement('div');
    toppingBtns[index].setAttribute('id', item);
    if (!item.includes('None')) {
        if (item.includes('Full')) {
            toppingBtns[index].setAttribute('class', 'btn full');
        } else if (item.includes('Half')) {
            toppingBtns[index].setAttribute('class', 'btn left');
        } else if (item.includes('Rght')) {
            toppingBtns[index].setAttribute('class', 'btn right');
        } else if (item.includes('Dble')) {
            toppingBtns[index].setAttribute('class', 'btn double');
        }
        toppingOptions.appendChild(toppingBtns[index]);
    } else {
        toppingBtns[index].setAttribute('class', 'btn none');
        toppingOptions.appendChild(toppingBtns[index]);
    }
    count++;
    if (count == 5) {
        toppingOptions.innerHTML += '<br />';
        count = 0;
    }
}

function giveEventListener(item, index, arr) {
    document.getElementById(item).addEventListener('click', toppingClick);
}

var image;
var currentT;
var currentL;
var topping;
var area;

function toppingClick(evt) {
    if (!evt.target.id.includes('None')) {
        console.log("toppingAdded");
        if (!evt.target.id.includes('Dble')) {
            if (itemCount == 0) {
                itemCount += 1;
            } else if (itemCount >= 1) {
                itemCount += 1;
                cost += 1;
            }
            if (itemCount == 5) {
                cost += 1;
            }
        } else {
            if (itemCount == 0) {
                itemCount += 2;
            } else if (itemCount >= 1) {
                itemCount += 2;
                cost += 2;
            }
            if (itemCount == 5) {
                cost += 2;
            }
        }
        currentT = evt.target.id;
        currentL = evt.target.id;
        topping = currentT.slice(0, currentT.length - 4);
        basics = pizza.style.background.substring(pizza.style.background.length - 102, pizza.style.background.length);
        pizza.style.background = pizza.style.background.substring(0, pizza.style.background.length - 102);
        if (evt.target.id.includes('Dble')) {
            pizza.style.background += `, url('Images/Toppings/${topping}Full.png')`
        } else {
            pizza.style.background += `, url('Images/Toppings/${currentT}.png')`
        }
        pizza.style.background += basics;
        pizza.style.backgroundRepeat = "no-repeat";
        pizza.style.backgroundSize = "cover";
        if (currentL.includes("Rght")) {
            area = "Right";
        } else {
            area = currentL.slice(currentL.length - 4, currentL.length);
        }
        if (evt.target.id.includes('Dble')) {
            document.getElementById("list").innerHTML += `${topping} Double $2 \<br /\>`;
        } else {
            document.getElementById("list").innerHTML += `${topping} ${area} $1 \<br /\>`;
        }
        document.getElementById("total").textContent = "Total: $" + cost;
    } else {
        console.log('toppingRemoved');
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
}