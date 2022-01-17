function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

function createVehicle() {
    var Ian = new Vehicle("Porsche", "911", 2000, "Orange");
    document.getElementById("New_and_This").innerHTML =
        "New " + Ian.Vehicle_Color + " " + Ian.Vehicle_Make + " " + Ian.Vehicle_Model +
        " created for Ian.";
}

function Instument(Name, Family, Valves, Reed_Size) {
    this.Instument_Name = Name;
    this.Instrument_Family = Family;
    this.Valve_Num = Valves;
    this.Reed_Size = Reed_Size;
}