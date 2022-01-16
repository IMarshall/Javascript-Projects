var x = 3;

var luckyNumber = Math.round(Math.random() * 5);

document.write(x + " is a " + typeof (x) + "<br>"); //display the type of the x variable

document.write(x + "5" + "<br>");//combine a number and a string to show type coercion

//check whether the lucky number is greater than 3
function greater() {
    document.getElementById("greater").innerHTML = 3 < luckyNumber;
}

//check whether the lucky number is less than 3
function less() {
    document.getElementById("less").innerHTML = 3 > luckyNumber;
}

//check whether the lucky number is between 0 and 5
function and() {
    document.getElementById("and").innerHTML = luckyNumber >= 0 && luckyNumber <= 5;
}

//check whether the lucky number is 0 or 5
function or() {
    document.getElementById("or").innerHTML = luckyNumber == 0 || luckyNumber == 5;
}

//check whether the lucky number is NOT 3 and is a number
function equal() {
    document.getElementById("equal").innerHTML = !(3 === luckyNumber);
}

//admit the lie
function lie() {
    document.getElementById("lie").innerHTML = "You caught me!";
}

//give the answer
function answer() {
    document.getElementById("answer").innerHTML = "The lucky number is " + luckyNumber + "!";
}