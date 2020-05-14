// JavaScript source code

const txtSeatsRequired = document.getElementById("SeatsRequired");
const txtOutput = document.getElementById("output");
const txtName = document.getElementById("Name");
const txtAddress = document.getElementById("Address");
const imgPreference = document.getElementById("pref");
const btnBook = document.getElementById("Book")
let Tc = 0;
btnBook.addEventListener("click", Book2);
//get all radio buttons
const allContacts = document.querySelectorAll("input[name='shows']");

//get selected radio button
const selectedContact =
    document.querySelector("input[name='shows']:checked");

const allContacts2 = document.querySelectorAll("input[name='MethOFD']");
const selectedContact2 =
    document.querySelector("input[name='MethOFD']:checked");


for (let i = 0; i < allContacts.length; i++) {
    allContacts[i].addEventListener("change", Book);
}


function Book2() {
    event.preventDefault();

    const txtSeatsRequired = document.getElementById("SeatsRequired");
    const selectedContact = document.querySelector("input[name='shows']:checked");
    const selectedContact2 = document.querySelector("input[name='MethOfD']:checked");
    const cost = parseFloat(selectedContact.value * txtSeatsRequired.value);
    const sr = parseFloat(txtSeatsRequired.value);
    const cost2 = cost + selectedContact2;
    const txtName = document.getElementById("Name");
    const txtAddress = document.getElementById("Address");
    let Discount = 0; 
    let DValue = 0;
    if (txtSeatsRequired => 6) {
        Discount = (selectedContact.value * sr) * 0.10;
        DValue = 10;
    }
    else if (txtSeatsRequired => 10){
        Discount = (selectedContact.value * sr) * 0.15;
        DValue = 15;
    }
    txtOutput.innerText =  "Hi :" +  txtName.value  + " your address is: " + txtAddress.value +  " Price for :   " + selectedContact.id + " is :  " + ` £${selectedContact.value}` + " and the price is :   "   + ` £${selectedContact.value * sr}` +   " Discount is : " + Discount + " at:  "   + DValue + "%" + " and the final price is :  " + ` £${(selectedContact.value * sr)-Discount}` + ".Method of delivery is : " + selectedContact2.id + " at : " + ` £${selectedContact2.value}` ;


}

