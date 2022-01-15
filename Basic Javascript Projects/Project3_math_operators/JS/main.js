var x = Math.round(Math.random() * 10000); //define the starting counter number

var luckyNumber = Math.round(Math.random() * 10000); //define the target number

window.alert("The lucky number is " + luckyNumber + ". Use the buttons to get to the lucky number as quick as possible!"); //tell the user the target number

//define a function to update the HTML counter
function updateCount() {
    document.getElementById("Count").innerHTML = "Your number is " + x;
}

//define a function to determine if the target number has been reached. If it has, alert the user.
function winner(num) {
    if (num == luckyNumber) {
        window.alert("That's the lucky number! \(" + luckyNumber +"\)")
    }
}


//add 2 to the counter
function add2() {
    x = x + 2
    updateCount();
    winner(x);
}

//subtract 2 from the counter
function sub2() {
    x = x - 2
    updateCount();
    winner(x);
}

//multiply the counter by 2
function mult2() {
    x = x * 2
    updateCount();
    winner(x);
}

//divide the counter by 2
function div2() {
    x = x / 2
    updateCount();
    winner(x);
}

//increment the counter
function inc() {
    x++
    updateCount();
    winner(x);
}

//decrement the counter
function dec() {
    x--
    updateCount();
    winner(x);
}

//round the counter down
function round() {
    x = Math.floor(x)
    updateCount();
    winner(x);
}