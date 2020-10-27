
let limeColaButton = document.querySelector(".limeCola");

let chocolateBarButton = document.querySelector(".chocolateBar");

let saltedPeanutsButton = document.querySelector(".saltedPeanuts");

let fruitGummiesButton = document.querySelector(".fruitGummies");

let totalDisplay = document.querySelector(".totalDisplay");

let total = 0.00;

limeColaButton.addEventListener("click", () => {
    let price = parseFloat(limeColaButton.getAttribute("data-price"));

    total += price;

    totalDisplay.innerText = (`Your total is: $${total}`);

});

chocolateBarButton.addEventListener("click", () => {
    let price = parseFloat(chocolateBarButton.getAttribute("data-price"));

    total += price;

    totalDisplay.innerText = (`Your total is: $${total}`);
});


saltedPeanutsButton.addEventListener("click", () => {
    let price = parseFloat(saltedPeanutsButton.getAttribute("data-price"));

    total += price;

    totalDisplay.innerText = (`Your total is: $${total}`);
});

fruitGummiesButton.addEventListener("click", () => {
    let price = parseFloat(fruitGummiesButton.getAttribute("data-price"));

    total += price;

    totalDisplay.innerText = (`Your total is: $${total}`);
});



// 2 //

// let number = document.querySelector.parseFloat(".number");

let coinMakerForm = document.querySelector(".coinMakerForm");

signInForm.addEventListener("submit", () => {

    let formData = new FormData(coinMakerForm);
    //can we name the formData variable anything? or is it just best practice to name it formData?

    let number = formData.get.parseFloat("number");

    let penny = formData.get("penny");

    let nickel = formData.get("nickel");

    let dime = formData.get("dime");

    let quarter = formData.get("quarter");

});

// how do i make variables for each type of coin? in a way that is efficient? so that i may use it later? or do i just make a variable for each one above, in the same place i put the number variable?



let moneyButton = document.querySelector(".moneyButton");

let coinHolder = document.querySelector(".coin-holder");

let anotherCoin = createElement("div");

// anotherCoin.innerText = `${coinName}`;

anotherCoin.setAttribute("class", "coin");

//where do i do the multiplication so that it knows that i want "this" many coins to appear?

moneyButton.addEventListener("click", () => {

    for (i = 0; i <= number; i++) {
        coinHolder.append(anotherCoin);
    }


});