//Testing local and global variable scope
var globalX = 10;

//works because globalX has global scope
function localVar() {
    var localX = 20;
    console.log(globalX + 10);
}

//doesn't work because localX has local scope in another function
function globalVar() {
    console.log(localX + 10);
}

//function utilizing Date().getHours() and an if statement
function goodMorning() {
    currentTime = new Date().getHours();
    console.log(currentTime);
    if (currentTime < 12) {
        document.getElementById("greeting").innerHTML = "Good morning!";
    }
}

//function using my own if statement
function rollDie() {
    var num1 = Math.ceil(Math.random() * 6);
    console.log(num1);
    if (num1 > 4) {
        document.getElementById("die").innerHTML = "You beat me!";
    }
    else {
        document.getElementById("die").innerHTML = "Too bad!";
    }
}

//function using else and else if statements
function catOrDog() {
    fave = document.getElementById("catdog").value;
    if (fave == "dogs") {
        msg = "Here's a cute dog!";
        document.getElementById("cutePicture").src = "./img/dogs.jpg";
    }
    else if (fave == "cats") {
        msg = "Here's a cute cat!";
        document.getElementById("cutePicture").src = "./img/cats.jpg";
    }
    else {
        msg = "Please choose dogs or cats."
        document.getElementById("cutePicture").src = "./img/oops.jpg";
    }
    document.getElementById("gift").innerHTML = msg;
}