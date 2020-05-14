// JavaScript source code

//get interactive elements
const imgspin1 = document.getElementById("spin1");
const imgspin2 = document.getElementById("spin2");
const imgspin3 = document.getElementById("spin3");
const txtWinnings = document.getElementById("Winnings");
const txtCollect = document.getElementById("collect");
const txtCredit= document.getElementById("credit");
const btnCredit = document.getElementById("Credit");
const btnSpin = document.getElementById("Spin");
const btnCollect = document.getElementById("Collect");
//add event listeners
btnSpin.addEventListener("click", Spin);
btnCredit.addEventListener("click", Credit);
btnCollect.addEventListener("click", Collect);
let credit = 1;
let winnings = 0;
let Collect1 = 0;

function Credit() {
   
        btnSpin.disabled = false;
    var credit2 = document.getElementById("credit").innerHTML;
 
    document.getElementById("credit").innerHTML = "Credit = " + credit;
    event.preventDefault()
    credit++;

}




//when page loaded


function Spin() {
  
    var credit2 = document.getElementById("Winnings").innerHTML;

    document.getElementById("Winnings").innerHTML = "Winnings = " + winnings;
    event.preventDefault()
    if (credit === 2) {
    btnSpin.disabled = true;
        txtCredit.innerText = "You have no credits"
        event.preventDefault();}
    
    let spin1 = Math.floor(Math.random() * 6) + 1;
    let spin2 = Math.floor(Math.random() * 6) + 1;
    let spin3 = Math.floor(Math.random() * 6) + 1;
    imgspin1.setAttribute("src", "images/spin" + spin1 + ".png");
    imgspin2.setAttribute("src", "images/spin" + spin2 + ".png");
    imgspin3.setAttribute("src", "images/spin" + spin3 + ".png");

   
    if (spin1 === spin2)
        if (spin1 === spin3) {
            winnings =+ 10;
            txtCredit.innerText += "\n you have won " + " Your credit is now " + credit + " and your winnings are now " + winnings ;
           
          
        }

    if (spin2 === spin3) {
        winnings = winnings + 5;
        txtCredit.innerText += "\n you have half won " + " Your credit is now " + credit + " and your winnings are now " + winnings;
       

    }

        else
        {
            winnings = winnings;
            txtCredit.innerText += "\n you have lost ." + " Your credit is now " + credit + " and your winnings are  " + winnings;
            event.preventDefault();
        }
    credit--;
   
}
//when spin button clicked
function Collect() {
    var credit2 = document.getElementById("Winnings").innerHTML;

    document.getElementById("Winnings").innerHTML = "Winnings = " + winnings;
    event.preventDefault()
    if (winnings > 0) {
        txtCollect.innerText += "\n you have now collected " + winnings + " Winnings";
        winnings = winnings - winnings;
    }
    else {
        txtCollect.innerText += "\n you have no winnings to collect";
      
    }
}



