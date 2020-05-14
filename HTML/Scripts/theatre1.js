// JavaScript source code

const btnBook = document.getElementById("Book")
const txtSeatsRequired = document.getElementById("SeatsRequired");
const txtOutput = document.getElementById("output");


btnBook.addEventListener("click", Book);
var showPrice=0


var show_prices = new Array();
show_prices["PhantomOpera"] = 79;
show_prices["Hamilton"] = 85;
show_prices["LionKing"] = 67;
show_prices["MissSaigon"] = 83;





//This function finds the filling price based on the
//drop down selection

    function getShowPrice() {
        var showPrice = 0;
        //Get a reference to the form id="cakeform"
        var theForm = document.forms["BookingForm"];
        //Get a reference to the select id="filling"
        var selectedShow = theForm.elements["show"];

        //set cakeFilling Price equal to value user chose
        //For example filling_prices["Lemon".value] would be equal to 5
        showPrice = show_prices[show.value];

        //finally we return cakeFillingPrice
        return showPrice;
        console.log("showPrice")
    }




function getTotal() {
    
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var totalCost = getShowPrice() * txtSeatsRequired;
    return totalCost;


}
var gettotal = getTotal();

function Book() {
    
    txtOutput.innerText = `Your cost is: £${gettotal.value}`;
}

