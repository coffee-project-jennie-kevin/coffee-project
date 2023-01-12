"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee col-6 d-flex justify-content-center">';
    html += '<div="' + coffee.id + '" class="light d-flex">';
    html += '<h4>' + coffee.name + '</h4>';
    html += '<p class="m-1">' + coffee.openSpan + coffee.roast + coffee.closeSpan + '</p>';
    html += '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let coffeeName = coffeeSelection.value.toLowerCase();
    let filteredCoffees = [];

    document.getElementById("alert").classList.add('visually-hidden');

    coffees.forEach(function (coffee) {
        if ((coffee.roast === selectedRoast || selectedRoast === "all") && coffeeName === "" ) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all" && coffee.name.toLowerCase().includes(coffeeName)){
            filteredCoffees.push(coffee);
        } else if ((coffee.roast === selectedRoast) && coffee.name.toLowerCase().includes(coffeeName)){
            filteredCoffees.push(coffee);
        }
    });
    //includes string
    //

    if (filteredCoffees.length===0) {
        document.getElementById("alert").classList.remove('visually-hidden');
    }

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light', openSpan:'<span style="color: #A8E4A0">', closeSpan:'</span>'},
    {id: 2, name: 'Half City', roast: 'light', openSpan:'<span style="color: #A8E4A0">', closeSpan:'</span>'},
    {id: 3, name: 'Cinnamon', roast: 'light', openSpan:'<span style="color: #A8E4A0">', closeSpan:'</span>'},
    {id: 4, name: 'City', roast: 'medium', openSpan:'<span style="color: #8DB600">', closeSpan:'</span>'},
    {id: 5, name: 'American', roast: 'medium', openSpan:'<span style="color: #8DB600">', closeSpan:'</span>'},
    {id: 6, name: 'Breakfast', roast: 'medium', openSpan:'<span style="color: #8DB600">', closeSpan:'</span>'},
    {id: 7, name: 'High', roast: 'dark', openSpan:'<span style="color: #507D2A">', closeSpan:'</span>'},
    {id: 8, name: 'Continental', roast: 'dark', openSpan:'<span style="color: #507D2A">', closeSpan:'</span>'},
    {id: 9, name: 'New Orleans', roast: 'dark', openSpan:'<span style="color: #507D2A">', closeSpan:'</span>'},
    {id: 10, name: 'European', roast: 'dark', openSpan:'<span style="color: #507D2A">', closeSpan:'</span>'},
    {id: 11, name: 'Espresso', roast: 'dark', openSpan:'<span style="color: #507D2A">', closeSpan:'</span>'},
    {id: 12, name: 'Viennese', roast: 'dark', openSpan:'<span style="color: #507D2A">', closeSpan:'</span>'},
    {id: 13, name: 'Italian', roast: 'dark', openSpan:'<span style="color: #507D2A">', closeSpan:'</span>'},
    {id: 14, name: 'French', roast: 'dark', openSpan:'<span style="color: #507D2A">', closeSpan:'</span>'},
];

function addCoffeeToCoffeesArray () {
    coffees.push({
        id: (coffees.length+1),
        name: addCoffeeSelection.value,
        roast: addRoastSelection.value,
        openSpan: addRoastColor(),

        closeSpan: '</span>'
        });

    updateCoffees();
}

function addRoastColor () {
    if (addRoastSelection.value === 'light') {
        return '<span style="color: #A8E4A0">'
    } else if (addRoastSelection.value === 'medium') {
        return '<span style="color: #8DB600">'
    } else {
        return '<span style="color: #507D2A">'
    }
}

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let coffeeSelection = document.querySelector('#filteredCoffees');
const addRoastSelection = document.querySelector('#addRoast');
const addCoffeeSelection = document.querySelector('#addCoffee');

tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);

let coffeeNameLookUp = document.getElementById("roast-selection");
coffeeNameLookUp.addEventListener("change", updateCoffees);

let searchCoffee = document.getElementById("filteredCoffees");
searchCoffee.addEventListener('keyup', updateCoffees)

let submitCoffee = document.getElementById("submitCoffee")
submitCoffee.addEventListener('click', addCoffeeToCoffeesArray);
submitCoffee.addEventListener('click', updateCoffees);