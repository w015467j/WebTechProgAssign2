// JavaScript source code
const cost=0

const optShow = document.getElementById("show");
const txtOutput = document.getElementById("output");
const btnBook = document.getElementById("Book")
const txtSeatsRequired = document.getElementById("SeatsRequired");
const theMod = document.getElementById("Mod");

optShow.addEventListener("change", displaySelect);

displaySelect();

function displaySelect() {
    let country = optShow.options[optShow.selectedIndex].innerText;
    txtOutput.innerText = "show: " + country;
}
