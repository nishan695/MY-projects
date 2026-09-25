// Frankfurter API
const BASE_URL = "https://api.frankfurter.dev/v2";


// Select elements
const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");

const fromCurr = document.querySelector(".from select");

const toCurr = document.querySelector(".to select");

const msg = document.querySelector(".msg");


// ------------------------------------
// CREATE CURRENCY OPTIONS
// ------------------------------------

for (let select of dropdowns) {

for (let currCode in countryList) {

let newOption = document.createElement("option");

newOption.innerText = currCode;

newOption.value = currCode;


// Default FROM = USD
if (select.name === "from" && currCode === "USD") {

newOption.selected = true;

}


// Default TO = NPR
if (select.name === "to" && currCode === "NPR") {

newOption.selected = true;

}


select.append(newOption);
}


// Update flag when currency changes

select.addEventListener("change", (evt) => {

updateFlag(evt.target);

});

}



// ------------------------------------
// UPDATE FLAG
// ------------------------------------

const updateFlag = (element) => {

let currCode = element.value;

let countryCode = countryList[currCode];

let newSrc =
`https://flagsapi.com/${countryCode}/flat/64.png`;

let img =
element.parentElement.querySelector("img");

img.src = newSrc;

};



// ------------------------------------
// GET EXCHANGE RATE
// ------------------------------------

const updateExchangeRate = async () => {

let amount =
document.querySelector(".amount input");

let amtVal = Number(amount.value);


// If amount is invalid

if (amtVal <= 0 || isNaN(amtVal)) {

amtVal = 1;

amount.value = 1;

}


let from = fromCurr.value;

let to = toCurr.value;


// Same currency

if (from === to) {

msg.innerText =
`${amtVal} ${from} = ${amtVal} ${to}`;

return;

}


// API URL

const URL =
`${BASE_URL}/rate/${from}/${to}`;


try {

msg.innerText = "Getting exchange rate...";


// Fetch API

let response = await fetch(URL);


// Check response

if (!response.ok) {

throw new Error("Exchange rate request failed");

}


// Convert response to JSON

let data = await response.json();


console.log(data);


// Get exchange rate

let rate = data.rate;


// Calculate

let finalAmount =
amtVal * rate;


// Show result

msg.innerText =
`${amtVal} ${from} = ${finalAmount.toFixed(2)} ${to}`;


} catch (error) {

console.log("ERROR:", error);

msg.innerText =
"Unable to get exchange rate.";

}

};



// ------------------------------------
// BUTTON
// ------------------------------------

btn.addEventListener("click", (evt) => {

evt.preventDefault();

updateExchangeRate();

});



// ------------------------------------
// PAGE LOAD
// ------------------------------------

window.addEventListener("load", () => {

// Set initial flags

for (let select of dropdowns) {

updateFlag(select);

}


// Get initial exchange rate

updateExchangeRate();

});