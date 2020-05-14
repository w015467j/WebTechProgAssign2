// JavaScript source code

const txtName = document.getElementById("Name");
const txtAddress = document.getElementById("Address");
const txtSeatsRequired = document.getElementById("SeatsRequired");
const theMod = document.getElementById("Mod");
const btnBook = document.getElementById("Book")
const optShow = document.getElementById("show");
const txtOutput = document.getElementById("output");
//const TotalCost = Cost * txtSeatsRequired.value;
//const Discount = parseFloat(TotalCost * 0.1);
//const Discount2 = parseFloat(TotalCost * 0.15);
let Cost = 0;
let TotalCost = Cost * txtSeatsRequired;


optShow.addEventListener("change", displaySelect);
theMod.addEventListener("change", displaySelect);




var show_prices = new Array();
cake_prices["PhantomOpera"] = 20;
cake_prices["Hamilton"] = 25;
cake_prices["LionKing"] = 35;
cake_prices["MissSaigon"] = 75;

function getCakeSizePrice() {
    var showPrice = 0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["Show;"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedCake = theForm.elements["selectedcake"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for (var i = 0; i < selectedCake.length; i++) {
        //if the radio button is checked
        if (selectedCake[i].checked) {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
            cakeSizePrice = cake_prices[selectedCake[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return cakeSizePrice;
}

