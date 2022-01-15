var Instrument = {
    Name: "Trumpet",
    Family: "Brass",
    Ensemble: "Band",
    Mouthpiece: "2C"
};

function trumpet() {
    document.getElementById("instrumentName").innerHTML = Instrument.Name;
}

function deleteName() {
    delete Instrument.Name;
}

function trumpet2() {
    document.getElementById("instrumentName2").innerHTML = Instrument.Name;
}