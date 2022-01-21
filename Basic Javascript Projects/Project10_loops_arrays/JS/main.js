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


//function to utilize the return statement
function returnFunction(name) {
    return "Hello " + name;
}

document.getElementById("Return").innerHTML = returnFunction("World!");

//object with let keyword including properties and a method
let SteelySong = {
    title: "Cousin Dupree",
    album: "Two Against Nature",
    year: "2000",
    grammy: "Best Pop Performance by a Duo or Group with Vocal",
    description: function () {
        return "The song " + this.title + " from the album " + this.album +
            " (" + this.year + ") by Steely Dan, won a Grammy for " + this.grammy + ".";
    }
};

document.getElementById("Steely_Dan").innerHTML = SteelySong.description();

//while loop with break statement
function Break_Loop() {
    var blank = "";
    var x = 10;
    while (x >= 0) {
        blank += "<br>" + x;
        x--
        if (x == 5) {
            break;
        }
    }
    document.getElementById("Break").innerHTML = blank;
}

//while loop with continue statement
function Continue_Loop() {
    var blank = "";
    var x = 11;
    while (x > 0) {
        x--
        if (x == 5) {
            blank += "<br>";
            continue;
        }
        blank += "<br>" + x;
    }
    document.getElementById("Continue").innerHTML = blank;
}