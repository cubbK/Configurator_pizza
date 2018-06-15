document.addEventListener('DOMContentLoaded', () => {
    loadTypePizza();
    loadTypeBlat();

});
/*function loadTypeBlat() {
    fetch('http://localhost:3000/db')
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(blats) {
            createTypeBlatPizzaSelect ({ blats })
        })
}*/
function loadTypePizza() {
    fetch('http://localhost:3000/db')
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(pizzas) {
            createTypePizzaSelect(pizzas);
            let selectedPizzas = document.querySelectorAll('.item-add-btn');
            for (const selectedPizza of selectedPizzas) {
                selectedPizza.addEventListener('click', () => {
                "use strict";
                console.log('clicked')
                })
            }
        })
}

function createTypePizzaSelect ({ Pizzas }){
    console.log(Pizzas);
    let selectElement = document.querySelector('.form-aside select:first-child');
    console.log(selectElement);
    for (const pizza of Pizzas) {
        const option = document.createElement('option');
        option.value = pizza.denumire;
        option.innerText = pizza.denumire;
        selectElement.appendChild(option)
    }

    for (const pizza of Pizzas) {

    }
}
/*function compliteCard ({ Pizzas }) {
    console.log(Pizzas);
    let div = document.getElementsByClassName('item')[0],
        itemTitle = document.getElementsByClassName('item-title'),
        //itemPrice = document.getElementsByClassName('item-price'),
        itemDescription = document.getElementsByClassName('itemDescription');
    console.log(div);

}*/

function createTypeBlatPizzaSelect ({ Blats }){
    console.log(Blats);
    let selectElement = document.querySelector('.form-aside select:nth-child(2)');
    console.log(selectElement);
   for (const blats of Blats) {
        const option = document.createElement('option');
        option.value = blats.forma_blat;
        option.innerText = blats.forma_blat;
        selectElement.appendChild(option)
    }
}
