var pizza = document.getElementById('pizza');
document.getElementById("meatlovers").addEventListener("mousedown", meatlovers);

function meatlovers() {
    document.getElementById('pizza').style.backgroundImage(url('Images/Toppings/PepperoniFull.png'), url('Images/Toppings/ItalianSausageFull.png'), url('Images/Toppings/BaconFull.png'), url('Images/Toppings/ChickenFull.png'), url('Images/Toppings/HamFull.png'), url('Images/Cheese/RegularCheese.png'), url('Images/Sauces/MarinaraSauce.png'), url('Images/Crust/Crust.png'));
}