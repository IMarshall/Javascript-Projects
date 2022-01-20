//while loop
function Call_Loop() {
    var blank = "";
    var x = 10;
    while (x >= 0) {
        blank += "<br>" + x;
        x--
    }
    document.getElementById("Loop").innerHTML = blank;
}

var Instruments =  ["Trumpet", "Clarinet", "Snare Drum", "Rhodes Piano", "Bass Guitar"]

//for loop with string length property
function for_Loop() {
    var list = "";
    var a;
    for (a = 0; a < Instruments.length; a++) {
        list += "<br>" + Instruments[a];
    }
    document.getElementById("List_of_Instruments").innerHTML = list;
}

//function to demonstrate arrays
function array_Function() {
    var i = Math.round(Math.random() * (Instruments.length - 1));
    document.getElementById("Array").innerHTML = "You get to play the " + Instruments[i] + "!";
}

//define a constant
const me = { first_name: "Ian", last_name: "Marshall", hair_color: "Red", fav_band: "Steely Dan", fav_candy:"Sour Patch Kids"};

//function to display a property value of my constant
function constant_Function() {
    document.getElementById("Constant").innerHTML = me.fav_band;
}

//change the value of a property
me.fav_candy = "Jolly Ranchers";

//add a property and value
me.eye_color = "Blue";

//display changed and added properties
function constant_Function2() {
    document.getElementById("Constant").innerHTML = "My eyes are " + me.eye_color + " and my favorite candy is " + me.fav_candy + "!";
}

//utilize the let keyword
{
    let Instruments = "Walter Becker";
    window.alert(Instruments);
}
window.alert(Instruments);

