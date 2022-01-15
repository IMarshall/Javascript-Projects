function add(num1, num2) {  //defines function and parameters
    var sum = (num1 + num2); //adds two arguments together and assigns the result to the sum variable
    sum += " is the answer!" //concetenates the sum variable with a string
    document.getElementById("answer").innerHTML = sum; //assigns the sum variable to innerHTML of the <p> element
}