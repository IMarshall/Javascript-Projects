//define Instrument dictionary
var Instrument = {
    Name: "Trumpet",
    Family: "Brass",
    Ensemble: "Band",
    Mouthpiece: "2C"
};

//define function to get the name of the instrument
function trumpet() {
    document.getElementById("instrumentName").innerHTML = Instrument.Name;
}

//define function to delete the name of the instrument
function deleteName() {
    delete Instrument.Name;
}

//define function to try to get the name of the instrument again
function trumpet2() {
    document.getElementById("instrumentName2").innerHTML = Instrument.Name;
}