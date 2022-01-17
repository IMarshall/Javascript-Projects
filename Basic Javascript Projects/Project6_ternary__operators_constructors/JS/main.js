//Define variables with random numbers to be used with ternary operators
var x = Math.round(Math.random() * 100);
var y = Math.round(Math.random() * 100);

//Use of ternary operators to display correct answer
window.alert(z = (x > y) ? x + " is more than " + y : x + " is less than " + y);

//Constructor function using "this" keyword
function Instrument(Name, Family, Valves, Reed_Size) {
    this.Instument_Name = Name;
    this.Instrument_Family = Family;
    this.Valve_Num = Valves;
    this.Reed_Size = Reed_Size;
}

//Defining new instruments using the constructor function and "new" keyword
var Trumpet = new Instrument("Trumpet", "Brass", 3, "NA");
var Saxophone = new Instrument("Saxophone", "Woodwind", "NA", 2.5);

//Function to display the results of the constructor function
function createInstrument() {
    var Tuba = new Instrument("Tuba", "brass", 4, "NA");
    document.getElementById("New_and_This").innerHTML =
        "Created new " + Tuba.Instrument_Family + " instrument called a " +
        Tuba.Instument_Name + ", which has " + Tuba.Valve_Num + " valves.";
}

//Nested Function
function roll() {
    document.getElementById("Nested_Function").innerHTML = nested();
    function nested() {
        var num1 = Math.round(Math.random() * 6);
        return num1;
    }
}